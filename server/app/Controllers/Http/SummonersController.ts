import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bull from '@ioc:Rocketseat/Bull'
import { getCurrentSeason } from 'App/helpers'
import FetchMatchList from 'App/Jobs/FetchMatchList'
import FetchMatchRank from 'App/Jobs/FetchMatchRank'
import Summoner from 'App/Models/Summoner'
import MatchRepository from 'App/Repositories/MatchRepository'
import BasicMatchSerializer from 'App/Serializers/BasicMatchSerializer'
import LiveMatchSerializer from 'App/Serializers/LiveMatchSerializer'
import Jax from 'App/Services/Jax'
import MatchService, { MatchListMode } from 'App/Services/MatchService'
import StatsService from 'App/Services/StatsService'
import SummonerService from 'App/Services/SummonerService'
import SummonerBasicValidator from 'App/Validators/SummonerBasicValidator'
import SummonerChampionValidator from 'App/Validators/SummonerChampionValidator'
import SummonerLiveValidator from 'App/Validators/SummonerLiveValidator'
import SummonerOverviewValidator from 'App/Validators/SummonerOverviewValidator'
import SummonerRecordValidator from 'App/Validators/SummonerRecordValidator'

import MathRepository from 'App/Repositories/MathRepository'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SummonersController {
  public async tests() {
    const updateColumns: string[] = [
      'kda_avg',
      'kda_stddev',

      'kills_avg',
      'kills_stddev',

      'assists_avg',
      'assists_stddev',

      'vision-score_avg',
      'vision-score_stddev',
    ] 

    let rank_score: object = {}

    // Load entire matchlist in DB if it's first time or update it
    for await (const column of updateColumns) {
      const keys: string[] = column.split('_')

      rank_score[column.replace('-', '_')] = await MathRepository.getMathTierScore(keys[0].replace('-', '_'), keys[1])
    }

    await Database.table('rank_scores').insert({
      ...rank_score
    })
  }
  /**
   * Get all played seasons for a summoner
   * @param puuid of the summoner
   */
  private async getSeasons(puuid: string): Promise<number[]> {
    const seasons = await MatchRepository.seasons(puuid) ?? []
    
    return seasons.length ? seasons.map((s) => s.season) : [getCurrentSeason()]
  }
  
  // public async authCode({ request, response }: HttpContextContract) {
  //   const { summoner, region } = await request.validate(SummonerBasicValidator)
  //   const finalJSON: any = {}

  //   // try {
  //   //   finalJSON.authCode = await SummonerService.getAuthCode(summoner, region) 
  //   // } catch (e) {
  //   //   console.log(e)
  //   //   return response.json(null)
  //   // }

  //   return response.json(finalJSON.authCode)
  // }

  // public async authCodeCheck({ request, response }: HttpContextContract) {
  //   const { summoner, region } = await request.validate(SummonerBasicValidator)
  //   const finalJSON: any = {}

  //   try {
  //     finalJSON.authCodeCheck = await SummonerService.getAuthCodeCheck(summoner, region)
  //   } catch (e) {
  //     console.log(e)
  //     return response.json(null)
  //   }

  //   return response.json(finalJSON.authCodeCheck)
  // }

  /**
   * POST: get basic summoner data
   * @param ctx
   */
  public async basic({ request, response }: HttpContextContract) {
    console.time('BASIC_REQUEST')
    const { summoner, region } = await request.validate(SummonerBasicValidator)
    const finalJSON: any = {}

    try {
      console.time('getAccount')
      
      let summoner_name: string = summoner
      if(summoner_name.length === 2) {
        summoner_name = summoner_name[0] + ' ' + summoner_name.substring(1)
      }
      
      const account = await SummonerService.getAccount(summoner_name, region)
      console.timeEnd('getAccount')
      
      // Check if the summoner is found
      if (!account) {
        return response.json(null)
      }
      finalJSON.account = account

      // Summoner in DB
      const summonerDB = await Summoner.firstOrCreate({ puuid: account.puuid })

      // Summoner names
      finalJSON.account.names = await SummonerService.getAllSummonerNames(account, summonerDB)
      

      // Only last 100 matchIds in matchlist
      await MatchService.updateMatchList(account.puuid, region, MatchListMode.LIGHT)

      // Add job in 1sec to load entire matchlist in DB (in background)
      const matchListMode = summonerDB.$isLocal ? MatchListMode.FIRSTIME : MatchListMode.UPDATE
      Bull.schedule(new FetchMatchList().key, { puuid: account.puuid, region, matchListMode }, 1000)

      // All seasons the summoner has played
      finalJSON.seasons = await this.getSeasons(account.puuid)

      // All gamemodes the summoner has played
      finalJSON.gamemodes = (await MatchRepository.gamemodes(account.puuid)).map((g) => g.gamemode)

      // CURRENT GAME
      console.time('playing')
      // finalJSON.current = await Jax.Spectator.summonerID(account.id, region)
      // finalJSON.playing = !!finalJSON.current
      finalJSON.current = undefined
      finalJSON.playing = false
      console.log(finalJSON.current, finalJSON.playing)
      console.timeEnd('playing')

      // RANKED STATS
      console.time('ranked')
      finalJSON.ranked = await SummonerService.getRanked(account.id, region)
      console.timeEnd('ranked')

      console.time('tierScore')
      finalJSON.scores = await SummonerService.getBaseScores()
      console.timeEnd('tierScore')

      // RECENT ACTIVITY
      finalJSON.recentActivity = await StatsService.getRecentActivity(account.puuid)
    } catch (e) {
      console.log(e)
      console.timeEnd('BASIC_REQUEST')
      return response.json(null)
    }

    console.timeEnd('BASIC_REQUEST')
    return response.json(finalJSON)
  }

  /**
   * POST: get overview view summoner data
   * @param ctx
   */
  public async overview({ request, response }: HttpContextContract) {
    console.time('OVERVIEW_REQUEST')
    const { puuid, region, season, queue } = await request.validate(SummonerOverviewValidator)
    const finalJSON: any = {}
    
    try {
      const queueA: any = typeof queue !== 'undefined' ? queue.split(',').map(x => Number(x)) : queue

      const matchIds = await MatchRepository.getNextMatchIds({ puuid, season, queue: queueA })
    
      finalJSON.matchesDetails = await MatchService.getMatches(region, matchIds, puuid)
      
      // 최신 전적 3개만 랭크 Job 등록
      Bull.schedule(new FetchMatchRank().key, { matchIds: matchIds.slice(0, 1) }, 1000)

      console.time('STATS')
      finalJSON.stats = await StatsService.getSummonerStats(puuid, season, queueA)
      console.timeEnd('STATS')

      console.timeEnd('OVERVIEW_REQUEST')
      return response.json(finalJSON)
    } catch (error) {
      console.log(error)
      console.log('@@')
    }
    
    
    
  }

  /**
    * POST: get champions view summoner data
    * @param ctx
    */
  public async champions({ request, response }: HttpContextContract) {
    console.time('championsRequest')
    const { puuid, queue, season } = await request.validate(SummonerChampionValidator)

    const queueA: any = typeof queue !== 'undefined' ? queue.split(',').map(x => Number(x)) : queue

    const championStats = await MatchRepository.championCompleteStats(puuid, queueA, season)
    const championStatsSerialized = championStats.map((champion) => {
      return {
        ...champion,
        champion: BasicMatchSerializer.getChampion(champion.id),
      }
    })
    console.timeEnd('championsRequest')
    return response.json(championStatsSerialized)
  }

  /**
    * POST: get records view summoner data
    * @param ctx
    */
  public async records({ request, response }: HttpContextContract) {
    console.time('recordsRequest')
    const { puuid, season } = await request.validate(SummonerRecordValidator)
    
    const records = await MatchRepository.records(puuid, season)
    const recordsSerialized = records.map((record) => {
      return {
        ...record,
        what: record.what.split('.')[1],
        champion: BasicMatchSerializer.getChampion(record.champion_id),
      }
    })
    console.timeEnd('recordsRequest')
    return response.json(recordsSerialized)
  }

  /**
  * POST: get records view summoner data
  * @param ctx
  */
  // public async summonerScore({ request, response }: HttpContextContract) {
  //   console.time('tierScore')
  //   const { puuid, tier } = await request.validate(SummonerTierScoreValidator)
  //   const finalJSON: any = {}

  //   finalJSON.summonerScores = await SummonerService.getScores()

  //   console.log(finalJSON.summonerScores)
  //   console.timeEnd('tierScore')
  //   return response.json(finalJSON)
  // }  

  /**
    * POST - Return live match detail
    * @param ctx
    */
  public async liveMatchDetails({ request, response }: HttpContextContract) {
    console.time('liveMatchDetails')
    const { id, region } = await request.validate(SummonerLiveValidator)

    // CURRENT GAME
    const currentGame = await Jax.Spectator.summonerID(id, region)

    if (!currentGame) {
      return response.json(null)
    }

    const currentGameSerialized = await LiveMatchSerializer.serializeOneMatch(currentGame, region)
    console.timeEnd('liveMatchDetails')

    return response.json(currentGameSerialized)
  }
}
