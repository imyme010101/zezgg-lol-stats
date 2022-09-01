import { JobContract } from '@ioc:Rocketseat/Bull'
import Match from 'App/Models/Match'
import MatchPlayerRankParser from 'App/Parsers/MatchPlayerRankParser'

/*
|--------------------------------------------------------------------------
| Job setup
|--------------------------------------------------------------------------
|
| This is the basic setup for creating a job, but you can override
| some settings.
|
| You can get more details by looking at the bullmq documentation.
| https://docs.bullmq.io/
*/

export interface FetchMatchRankArgs {
  matchIds: string[]
}

export default class FetchMatchRank implements JobContract {
  public key = 'FetchMatchRank'

  public async handle(job) {
    const { data }: { data: FetchMatchRankArgs } = job

    // Load entire matchlist in DB if it's first time or update it
    for await (const matchId of data.matchIds) {
      const match = await Match.query()
        .where('id', matchId)
        .preload('teams')
        .preload('players', (playersQuery) => {
          playersQuery.preload('ranks')
        })
        .firstOrFail()

      let ranksLoaded = false

      for (const p of match.players) {
        if (p.ranks.length) {
          ranksLoaded = true
        }
      }

      if(ranksLoaded === false) {
        await MatchPlayerRankParser.parse(match)
      }
    }
  }
}
