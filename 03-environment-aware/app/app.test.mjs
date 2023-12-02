import test from 'ava'
import request from 'supertest'

import { db } from './database.mjs'
import { app } from './main.mjs'

test.before(async t => {
  await db.raw(`
  create table books(
    id integer not null primary key autoincrement,
    title text not null,
    author text not null
  );
  
  insert into books (title, author) values ('American Gods', 'Neil Gaiman');
  insert into books (title, author) values ('Sandman', 'Neil Gaiman');
  insert into books (title, author) values ('Watchmen', 'Alan Moore');  
  `)
})

test('should get books', async t => {
  const result = await request(app.callback())
    .get('/books').expect('Content-Type', /json/)
  t.is(200, result.status)
})
