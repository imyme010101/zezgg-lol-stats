import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Multiples extends BaseSchema {
  protected tableName = 'multiples'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.specificType('names', 'varchar(16)[]').nullable()
      table.specificType('datas', 'JSON').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}