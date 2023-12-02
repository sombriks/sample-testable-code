import test from 'ava'
import request from 'supertest'

import { app } from './main.mjs'

test('should get books', async t => {
  const result = await request(app.callback())
    .get('/books').expect('Content-Type', /json/)
  t.is(200, result.status)
})
