export class BookRequests {

  service = undefined

  constructor(service) {
    this.service = service
  }

  async listBooks(ctx) {
    ctx.body = await this.service.listBooks(ctx.query)
  }
}