import * as services from './services.mjs'

export const listBooks = async ctx =>
  ctx.body = await services.listBooks(ctx.query)
