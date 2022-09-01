// import { RiotRateLimiter } from '@fightmegg/riot-rate-limiter'
import RiotRateLimiter from 'riot-ratelimiter'
import { getRiotRegion } from 'App/helpers'
import { JaxConfig } from '../../JaxConfig'
import JaxRequest from '../JaxRequest'

export default class MatchTimeLineEndpoint {
  private config: JaxConfig
  private limiter: RiotRateLimiter

  constructor(config: JaxConfig, limiter: RiotRateLimiter) {
    this.config = config
    this.limiter = limiter
  }

  public timeLine(matchID: string, region: string): Promise<any[]> {
    return new JaxRequest(
      getRiotRegion(region),
      this.config,
      `match/v5/matches/${matchID}/timeline`,
      this.limiter,
      300
    ).execute()
  }
}
