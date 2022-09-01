import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RankScore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public kda_avg: object
  
  @column()
  public kda_stddev: object

  @column()
  public kills_avg: object

  @column()
  public kills_stddev: object

  @column()
  public assists_avg: object

  @column()
  public assists_stddev: object

  @column()
  public vision_avg: object

  @column()
  public vision_stddev: object

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
