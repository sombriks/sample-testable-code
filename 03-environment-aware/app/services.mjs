import { db } from './database.mjs'

export const listBooks = async query =>
  await db('books').where(query)
