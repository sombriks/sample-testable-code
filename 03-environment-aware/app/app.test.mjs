import test from 'ava'
import request from 'supertest'

import { db } from './database.mjs'
import { app } from './main.mjs'

test.before(async t => {
  const trx = await db.transaction()
  await trx.schema.createTable('books', t => {
    t.increments('id')
    t.string('title').notNullable()
    t.string('author').notNullable()
  })
  await trx.commit()

  const trx2 = await db.transaction()
  await trx2('books').insert([
    { title: 'American Gods', author: 'Neil Gaiman' },
    { title: 'Sandman', author: 'Neil Gaiman' },
    { title: 'Watchmen', author: 'Alan Moore' }
  ])
  await trx2.commit()
})

test('should get books', async t => {
  const result = await request(app.callback())
    .get('/books').expect('Content-Type', /json/)
  t.is(200, result.status)
  t.is(3, result.body.length)
})
