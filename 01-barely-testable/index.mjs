import Knex from 'knex'
import Koa from 'koa'
import Router from '@koa/router'

const db = Knex({
  connection: 'postgresql://postgres:postgres@localhost:5432/bookshop',
  pool: { min: 1, max: 2 },
  client: 'pg'
})

const router = new Router()
router.get('/books', async ctx =>
  ctx.body = await db('books').where(ctx.query))

const app = new Koa()
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log(`api listening at http://localhost:3000`)
