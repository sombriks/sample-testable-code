import Knex from 'knex'

export const db = Knex({
  connection: process.env.PG_CONNECTION_URL,
  pool: { min: 1, max: 2 },
  client: 'pg'
})