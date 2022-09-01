export enum ChampionRoles {
  assassin,
  fighter,
  mage,
  marksman,
  support,
  tank,
}

export enum TeamPosition {
  NONE,
  TOP,
  JUNGLE,
  MIDDLE,
  BOTTOM,
  UTILITY,
}

export interface PlayerRankParsed {
  player_id: number
  summoner_puuid: string
  gamemode: number
  tier: string
  rank: number
  lp: number
  wins: number
  losses: number
}
