import Knex from 'knex'

export class Database {

  _knex = undefined

  get knex() {
    return this._knex
  }

  constructor(env, connectionUrl) {
    if ('test' === env) {
      this._knex = Knex({
        connection: ':memory:',
        client: 'sqlite3',
        pool: {
          min: 1,
          max: 1,
          idleTimeoutMillis: 360000 * 1000 // see https://github.com/knex/knex/issues/1871
        }
      })
    } else {
      this._knex = Knex({
        connection: connectionUrl,
        pool: { min: 1, max: 2 },
        client: 'pg'
      })
    }
  }
}