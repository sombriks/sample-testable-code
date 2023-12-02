import Knex from 'knex'

const config = 'test' === process.env.NODE_ENV ? {
  connection: ':memory:',
  client: 'sqlite3'
} : {
  connection: process.env.PG_CONNECTION_URL,
  pool: { min: 1, max: 2 },
  client: 'pg'
}

export const db = Knex(config)