export class BookService {

  db = undefined

  constructor(db) {
    this.db = db
  }

  async listBooks(query) {
    return await this.db.knex('books').where(query)
  }
}
