import { getSeasonNumber, sortTeamByRole, arrRank } from 'App/helpers'
import Match from 'App/Models/Match'
import MatchPlayer from 'App/Models/MatchPlayer'
import { TeamPosition } from 'App/Parsers/ParsedType'
import MatchSerializer from './MatchSerializer'
import { SerializedMatch, SerializedMatchStats, SerializedMatchTeamPlayer } from './SerializedTypes'

import { create, all } from 'mathjs';
const mathF = create(all, { number: 'Fraction' }) as math.MathJsStatic;


class BasicMatchSerializer extends MatchSerializer {
  protected getPlayerSummary(player: any): SerializedMatchTeamPlayer {
    return {
      puuid: player.summonerPuuid,
      champion: this.getChampion(player.championId),
      name: player.summonerName,
      killsRank: player.killsRank,
      kdaRank: player.kdaRank,
      kda: player.kda,
      dmgChampRank: player.dmgChampRank,
      kpRank: player.kpRank,
      role: TeamPosition[player.teamPosition],
    }
  }

  protected getTeamSummary(players: MatchPlayer[]): SerializedMatchTeamPlayer[] {
    return players.map((p) => this.getPlayerSummary(p)).sort(sortTeamByRole)
  }

  protected getStats(player: any): SerializedMatchStats {
    return {
      mvp: player.mvp,
      killsRank: player.killsRank,
      kills: player.kills,
      deaths: player.deaths,
      assists: player.assists,
      minions: player.minions,
      visionRank: player.visionRank,
      vision: player.visionScore,
      gold: player.gold,
      dmgChampRank: player.dmgChampRank,
      dmgChamp: player.damageDealtChampions,
      dmgObj: player.damageDealtObjectives,
      dmgTaken: player.damageTaken,
      kpRank: player.kpRank,
      kp: player.kp,
      kdaRank: player.kdaRank,
      kda: player.kda,
      perfect: player.kills + player.assists !== 0 && player.deaths === 0 ? true : false,
      realKda: player.kda,
      criticalStrike: player.criticalStrike,
      killingSpree: player.killingSpree,
      doubleKills: player.doubleKills,
      tripleKills: player.tripleKills,
      quadraKills: player.quadraKills,
      pentaKills: player.pentaKills,
      heal: player.heal,
      towers: player.turretKills,
      longestLiving: player.timeSpentLiving,
    }
  }

  public getScore(players: any, stats: any) {
    const vs: number[] = players.map((a) => {
      return a.visionScore;
    })

    const ks: number[] = players.map((a) => {
      return a.kills;
    })

    const as: number[] = players.map((a) => {
      return a.assists;
    })

    
    const vsAvg: Number = Number(Math.floor(Number(mathF.mean(vs))))
    const ksAvg: Number = Number(Math.floor(Number(mathF.mean(ks))))
    const asAvg: Number = Number(Math.floor(Number(mathF.mean(as))))


    const vsStd: Number = Number(Math.floor(Number(mathF.std(vs))))
    const ksStd: Number = Number(Math.floor(Number(mathF.std(ks))))
    const asStd: Number = Number(Math.floor(Number(mathF.std(as))))

    const vsScore: Number = (Number(stats.vision) - Number(vsAvg)) / Number(vsStd)
    const ksScore: Number = (Number(stats.kills) - Number(ksAvg)) / Number(ksStd)
    const asScore: Number = (Number(stats.assists) - Number(asAvg)) / Number(asStd)

    const total: Number = (Number(vsScore) + Number(ksScore) + Number(asScore)) / 3

    let inbun: Number = 0
    inbun = Number(total) + 0.1
    if(inbun < 0) {
      inbun = Number(Math.ceil(Math.abs(Number(inbun))) + Number(inbun))
    } else {
      inbun = Number(Number(inbun) + 1)
    }

    return Number(inbun.toFixed(1))
  }

  public getRank(players: any, type: string, save: string) {
    const arrPlayers = players.map((v) => {
      return v[type]
    }).filter((a1) => {
      if(typeof a1 !== "undefined" && a1 !== null) {
        return a1
      }
    })
    
    return players.map((v) => {
      v[save] = arrRank(v[type], arrPlayers)
      return v
    }).filter((a1) => {
      if(typeof a1 !== "undefined" && a1 !== null && a1) {
        return a1
      }
    })
  }

  public serializeOneMatch(match: any, puuid: string, newMatch = false): SerializedMatch {
    //vision
    //px
    //damageDealtChampions
    match.players = this.getRank(match.players, 'visionScore', 'visionRank')
    match.players = this.getRank(match.players, 'kp', 'kpRank')
    match.players = this.getRank(match.players, 'damageDealtChampions', 'dmgChampRank')
    match.players = this.getRank(match.players, 'kda', 'kdaRank')
    match.players = this.getRank(match.players, 'kills', 'killsRank')
    
    const identity = match.players.find((p) => p.summonerPuuid === puuid)!
    const allyTeam = match.teams.find((t) => t.color === identity.team)!
    
    const allyPlayers: MatchPlayer[] = []
    const enemyPlayers: MatchPlayer[] = []

    for (const p of match.players) {
      //console.log('p', p)
      p.team === identity.team ? allyPlayers.push(p) : enemyPlayers.push(p)
    }

    const arrPlayers = allyPlayers.map((v) => {
      return v['kda']
    }).filter((a1) => {
      if(typeof a1 !== "undefined" && a1 !== null) {
        return a1
      }
    })
    
    identity.mvp = arrRank(identity.kda, arrPlayers) === 1 ? true : false

    let stats:any = this.getStats(identity)
    
    let allyHightyKda: number = 0
    allyPlayers.forEach((a2) => {
      if(stats.kda <= a2.kda && a2.summonerPuuid != puuid) {
        allyHightyKda += 1
      }
    })

    let enemHightyKda: number = 0
    enemyPlayers.forEach((a2) => {
      if(stats.kda <= a2.kda) {
        enemHightyKda += 1
      }
    })
    stats.teamScore = allyHightyKda - enemHightyKda

    stats.inbun = this.getScore(match.players, stats)

    return {
      allyTeam: this.getTeamSummary(allyPlayers),
      date: match.date,
      enemyTeam: this.getTeamSummary(enemyPlayers),
      matchId: match.id,
      gamemode: match.gamemode,
      map: match.map,
      newMatch,
      region: match.region,
      result: allyTeam.result,
      season: getSeasonNumber(match.date),
      stats: stats,
      time: match.gameDuration,
      ...this.getPlayerBase(identity),
    }
  }
  public serialize(matches: Match[], puuid: string, newMatches = false): SerializedMatch[] {
    return matches.map((match) => this.serializeOneMatch(match, puuid, newMatches))
  }
}

export default new BasicMatchSerializer()
