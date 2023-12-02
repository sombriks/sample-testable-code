import Koa from 'koa'
import Router from '@koa/router'

import * as requests from './requests.mjs'

export const app = new Koa()

const router = new Router()

router.get('/books', requests.listBooks)

app.use(router.routes())
app.use(router.allowedMethods())
