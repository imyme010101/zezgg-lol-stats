import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bull from '@ioc:Rocketseat/Bull'
import { getCurrentSeason } from 'App/helpers'
import FetchMatchList from 'App/Jobs/FetchMatchList'
import SummonerService from 'App/Services/SummonerService'
import MatchService, { MatchListMode } from 'App/Services/MatchService'
import StatsService from 'App/Services/StatsService'
import MultipleService from 'App/Services/MultipleService'

import Summoner from 'App/Models/Summoner'
import MatchRepository from 'App/Repositories/MatchRepository'

export default class MultipleController {
  private async getSeasons(puuid: string): Promise<number[]> {
    const seasons = await MatchRepository.seasons(puuid) ?? []
    
    return seasons.length ? seasons.map((s) => s.season) : [getCurrentSeason()]
  }

  /**
   * POST - Return data from matches searched by matchIds
   * @param ctx
   */
  public async index({ request, response }: HttpContextContract) {
    console.time('MULTIPLE_REQUEST')
    const req: any = request.all()

    let summoners = req.summoners
    let region = req.region

    let finalJSON: any = {}
    
    try {
      let accounts: any = []
      let rankeds: any = []
      let seasonss: any = []
      let matchesDetailss: any = []
      let statss: any = []
      
      
      if(Array.isArray(summoners)) {
        let summonerNames: string[] = []
        for await (let summoner of summoners) {
          summonerNames.push(summoner)
          const account = await SummonerService.getAccount(summoner, region)
          accounts.push(account)
          
          const summonerDB = await Summoner.firstOrCreate({ puuid: account.puuid })
          
          // Only last 100 matchIds in matchlist
          await MatchService.updateMatchList(account.puuid, region, MatchListMode.LIGHT)
  
          // Add job in 1sec to load entire matchlist in DB (in background)
          const matchListMode = summonerDB.$isLocal ? MatchListMode.FIRSTIME : MatchListMode.UPDATE
          Bull.schedule(new FetchMatchList().key, { puuid: account.puuid, region, matchListMode }, 1000)
  
          seasonss.push(await this.getSeasons(account.puuid))
  
          // RANKED STATS
          console.time('ranked')
          rankeds.push(await SummonerService.getRanked(account.id, region))
          console.timeEnd('ranked')
          
          //매치 리스트 가져오기
          console.time('MULTIPLE_OVERVIEW_REQUEST')
          const matchIds = await MatchRepository.getNextMatchIds({ puuid: account.puuid })
          matchesDetailss.push(await MatchService.getMatches(region, matchIds, account.puuid))
            
          console.time('STATS')
          statss.push(await StatsService.getSummonerStats(account.puuid))
          console.timeEnd('STATS')
      
          console.timeEnd('MULTIPLE_OVERVIEW_REQUEST')
        }
  
        console.time('tierScore')
        finalJSON.scores = await SummonerService.getBaseScores()
        console.timeEnd('tierScore')
  
        finalJSON.seasonss = seasonss
        finalJSON.accounts = accounts
        finalJSON.rankeds = rankeds
  
        finalJSON.matchesDetailss = matchesDetailss
  
        finalJSON.statss = statss
        
        // 멀티 서치 결과 json 방식으로 저장
        finalJSON.multipleId = await MultipleService.setMultiple(summonerNames, finalJSON)
      } else {
        const multipleData = await MultipleService.getMultiple(summoners)
        
        finalJSON = multipleData.datas
        finalJSON.date = multipleData.createdAt

        finalJSON.multipleId = summoners
      }
    } catch (e) {
      console.log(e)
      return response.json(null)
    }

    console.timeEnd('MULTIPLE_REQUEST')

    return response.json(finalJSON)
  }
}
