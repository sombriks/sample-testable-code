import Knex from 'knex'

export const db = Knex({
  connection: 'postgresql://postgres:postgres@localhost:5432/bookshop',
  pool: { min: 1, max: 2 },
  client: 'pg'
})