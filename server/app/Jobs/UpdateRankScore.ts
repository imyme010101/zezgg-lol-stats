import { JobContract } from '@ioc:Rocketseat/Bull'
import MathRepository from 'App/Repositories/MathRepository'
import Database from '@ioc:Adonis/Lucid/Database'

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
export interface UpdateRankArgs {
  job: any
}

export default class UpdateRankScore implements JobContract {
  public key = 'UpdateRankScore'

  public async handle(job: any = {}) {
    console.log(job)
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
}
