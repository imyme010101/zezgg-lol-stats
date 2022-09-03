import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Multiple extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public names: string[]

  @column()
  public datas: object

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
