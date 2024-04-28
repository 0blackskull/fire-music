import { MongoClient, ServerApiVersion } from 'mongodb';
import SongMetada from '../models/SongMetadata.js';

class DB {
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })

    this.db = this.client.db(process.env.DB_NAME);

    this.SongMetada = new SongMetada(this.db);
  }

  async init() {
    try {
      await this.client.connect();
    } finally {
      await this.client.close();
    }
  }
}

export default new DB();