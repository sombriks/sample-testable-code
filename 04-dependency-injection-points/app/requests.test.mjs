import test from 'ava'
import sinon from 'sinon'

import { BookService } from './services.mjs'
import { BookRequests } from './requests.mjs'

test.before(t => {
  t.context = [
    { title: 'American Gods', author: 'Neil Gaiman' },
    { title: 'Sandman', author: 'Neil Gaiman' }
  ]
})

test('should call listBook request', async t => {

  const service = sinon.createStubInstance(BookService)
  service.listBooks.resolves(t.context)

  const requests = new BookRequests(service)
  const ctx = { query: { author: 'Neil Gaiman' } }

  await requests.listBooks(ctx)

  t.true(service.listBooks.called)
  t.is(ctx.body, t.context)

})