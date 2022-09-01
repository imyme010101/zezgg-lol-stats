import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RankScores extends BaseSchema {
  protected tableName = 'rank_scores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.specificType('kda_avg', 'JSON').nullable()
      table.specificType('kda_stddev', 'JSON').nullable()
      table.specificType('kills_avg', 'JSON').nullable()
      table.specificType('kills_stddev', 'JSON').nullable()
      table.specificType('assists_avg', 'JSON').nullable()
      table.specificType('assists_stddev', 'JSON').nullable()
      table.specificType('vision_score_avg', 'JSON').nullable()
      table.specificType('vision_score_stddev', 'JSON').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
