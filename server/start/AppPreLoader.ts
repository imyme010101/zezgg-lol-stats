/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Bull from '@ioc:Rocketseat/Bull'
import UpdateRankScore from 'App/Jobs/UpdateRankScore'

Bull.add(new UpdateRankScore().key, { job: '' }, {
  repeat: {
    cron: '0 5 * * *',
  },
})