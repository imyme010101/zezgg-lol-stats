import Jax from './Jax'
import { SummonerDTO } from 'App/Services/Jax/src/Endpoints/SummonerEndpoint'
import { LeagueEntryDTO } from './Jax/src/Endpoints/LeagueEndpoint'
import Summoner from 'App/Models/Summoner'
import { PlayerRankParsed } from 'App/Parsers/ParsedType'
import MatchPlayerRank from 'App/Models/MatchPlayerRank'
import MathRepository from 'App/Repositories/MathRepository'
// import SummonerRepository from 'App/Repositories/SummonerRepository'

export interface LeagueEntriesByQueue {
  soloQ?: LeagueEntryByQueue
  flex5v5?: LeagueEntryByQueue
}

export interface LeagueEntryByQueue extends LeagueEntryDTO {
  fullRank: string
  winrate: string
  shortName: string | number
}

class SummonerService {
  private readonly uniqueLeagues = ['CHALLENGER', 'GRANDMASTER', 'MASTER']
  public readonly leaguesNumbers = { I: 1, II: 2, III: 3, IV: 4 }

  public getRankedShortName(rank: PlayerRankParsed | MatchPlayerRank) {
    return this.uniqueLeagues.includes(rank.tier) ? rank.lp : rank.tier[0] + rank.rank
  }

  public getWinrate(wins: number, losses: number) {
    return +((wins * 100) / (wins + losses)).toFixed(1) + '%'
  }

  /**
   * Helper to transform League Data from the Riot API
   * @param league raw data of the league from Riot API
   */
  private getleagueData(league?: LeagueEntryDTO): LeagueEntryByQueue | null {
    if (!league) {
      return null
    }
    const fullRank = this.uniqueLeagues.includes(league.tier)
      ? league.tier
      : `${league.tier} ${league.rank}`
    const winrate = this.getWinrate(league.wins, league.losses)
    const shortName = this.uniqueLeagues.includes(league.tier)
      ? league.leaguePoints
      : league.tier[0] + this.leaguesNumbers[league.rank]

    return {
      ...league,
      fullRank,
      winrate,
      shortName,
    }
  }

  /**
   * Get account infos for a searched summoner name
   * @param summonerName
   * @param region
   */
  public async getAccount(summonerName: string, region: string,  reset: boolean = false) {
    const name = summonerName.toLowerCase()
    const account = await Jax.Summoner.summonerName(name, region, reset)
    return account
  }

  /**
   * Return the full list of old and actual summoner names
   * @param account of the summoner
   * @param summonerDB summoner in the database
   */
  public async getAllSummonerNames(account: SummonerDTO, summonerDB: Summoner) {
    await summonerDB.related('names').firstOrCreate({
      name: account.name,
    })
    return summonerDB.related('names').query().select('name', 'created_at')
  }

  /**
   * Get ranked data for a specific Summoner
   * @param account
   * @param region
   */
  public async getRanked(summonerId: string, region: string): Promise<LeagueEntriesByQueue> {
    const ranked = await Jax.League.summonerID(summonerId, region)
    const result: LeagueEntriesByQueue = {}

    if (ranked && ranked.length) {
      result.soloQ =
        this.getleagueData(ranked.find((e) => e.queueType === 'RANKED_SOLO_5x5')) || undefined
      result.flex5v5 =
        this.getleagueData(ranked.find((e) => e.queueType === 'RANKED_FLEX_SR')) || undefined
    }
    return result
  }

  // public async getAuthCode(summoner: string, region: string) {
  //   const finalJSON: any = {}
  //   const authCodeKey = summoner + '-' + region

  //   let requestCached = await Redis.get(authCodeKey)
  //   let account = null

  //   if (requestCached) {
  //     requestCached = JSON.parse(requestCached)
      
  //     await Redis.del(authCodeKey)

  //     account = requestCached.account
  //   } else {
  //     account = await this.getAccount(summoner, region, true)
  //   }

  //   // Check if the summoner is found
  //   if (!account) {
  //     return null
  //   }

  //   finalJSON.account = account

  //   const currId = account.profileIconId
  //   const min = Math.ceil(1)
  //   const max = Math.floor(22)
  //   let afterId = Math.floor(Math.random() * (max - min)) + min

  //   while(currId == afterId) {
  //     afterId = Math.floor(Math.random() * (max - min)) + min
  //   }

  //   finalJSON.authCode = {
  //     currId: currId,
  //     afterId: afterId,
  //   }

  //   await Redis.setex(authCodeKey, 150, JSON.stringify(finalJSON))

  //   return finalJSON.authCode
  // }

  // public async getAuthCodeCheck(summoner: string, region: string) {
  //   const finalJSON: any = {}

  //   const authCodeKey = summoner + '-' + region
  //   const authCodeKeyReq = summoner + '-' + region + '-req'
  //   const authCodeKeyOk = summoner + '-' + region + '-ok'

  //   let requestCached = await Redis.get(authCodeKey)
  //   let account = null
  //   const endReqTimeLimit = 20

  //   if (requestCached) {
  //     requestCached = JSON.parse(requestCached)
      
  //     const reqTime = await Redis.get(authCodeKeyReq)

  //     if(reqTime) {
  //       const endReqTime = endReqTimeLimit - (Math.floor(+ new Date() / 1000) - reqTime)

  //       return {msg: '무분별한 인증 요청을 막기위해서 ' + endReqTime + '초후 인증 가능합니다.', result: false}
  //     } else {
  //       account = await this.getAccount(summoner, region, true)
        
  //       finalJSON.account = account

  //       if(account.profileIconId == requestCached.authCode.afterId) {
  //         const uuid = new Date().getTime()
  //         await Redis.setex(authCodeKeyOk, 300, uuid)
          
  //         return {msg: '소환사 인증이 정상적으로 되었습니다.', result: uuid}
  //       } else {
  //         await Redis.setex(authCodeKeyReq, endReqTimeLimit, Math.floor(+ new Date() / 1000))
          
  //         const currId = account.profileIconId
  //         const min = Math.ceil(1)
  //         const max = Math.floor(22)
  //         let afterId = Math.floor(Math.random() * (max - min)) + min
      
  //         while(currId == afterId || currId == requestCached.authCode.afterId) {
  //           afterId = Math.floor(Math.random() * (max - min)) + min
  //         }

  //         finalJSON.authCode = {
  //           currId: currId,
  //           afterId: afterId,
  //         }
      
  //         await Redis.setex(authCodeKey, 150, JSON.stringify(finalJSON))

  //         return {msg: '실패 하였습니다. 아이콘을 다시 변경후 ' + endReqTimeLimit +'초후 인증 버튼을 눌러주세요.', result: false, authCode: finalJSON.authCode}
  //       }
  //     }
  //   } else {
  //     return {msg: '일정 시간이 지나 재요청후 인증 버튼을 눌러주세요.', result: false}
  //   }
  // }
  
  public async getBaseScores() {
    return {
      kdaAvgs: await MathRepository.getTierScore('kda', 'avg'),
      kdaStds: await MathRepository.getTierScore('kda', 'stddev'),
      killsAvgs: await MathRepository.getTierScore('kills', 'avg'),
      killsStds: await MathRepository.getTierScore('kills', 'stddev'),
      assistsAvgs: await MathRepository.getTierScore('assists', 'avg'),
      assistsStds: await MathRepository.getTierScore('assists', 'stddev'),
      visionAvgs: await MathRepository.getTierScore('vision_score', 'avg'),
      visionStds: await MathRepository.getTierScore('vision_score', 'stddev')
    }
  }
}

export default new SummonerService()
