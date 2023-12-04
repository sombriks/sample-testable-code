import Koa from 'koa'
import Router from '@koa/router'
import { Database } from './database.mjs'
import { BookService } from './services.mjs'
import { BookRequests } from './requests.mjs'

export const db = new Database(process.env.NODE_ENV, process.env.PG_CONNECTION_URL)
const service = new BookService(db)
const requests = new BookRequests(service)
export const app = new Koa()
const router = new Router()

router.get('/books', requests.listBooks.bind(requests))

app.use(router.routes())
app.use(router.allowedMethods())
