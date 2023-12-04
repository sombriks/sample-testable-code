import Knex from 'knex'

const config = 'test' === process.env.NODE_ENV ? {
  connection: ':memory:',
  client: 'sqlite3',
  pool: {
    min: 1,
    max: 1,
    idleTimeoutMillis: 360000 * 1000 // see https://github.com/knex/knex/issues/1871
  }
} : {
  connection: process.env.PG_CONNECTION_URL,
  pool: { min: 1, max: 2 },
  client: 'pg'
}

export const db = Knex(config)