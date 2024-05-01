import { MongoClient, ServerApiVersion } from 'mongodb';
import SongMetadata from '../models/SongMetadata.js';
import ArtistMetadata from '../models/ArtistMetadata.js';
import AudioFile from '../models/AudioFile.js';

const uri = 'mongodb+srv://bajutk:W28W0eSPbd8ELLSM@cluster-fire-music.ssj4epg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-fire-music';

class DB {
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URI || uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })

    this.db = this.client.db(process.env.DB_NAME || 'fire-music');

    this.SongMetadata = new SongMetadata(this.db);
    this.ArtistMetadata = new ArtistMetadata(this.db)
    this.AudioFile = new AudioFile(this.db);
  }

  async run() {
    try {
      await this.client.connect();
      console.info('MongoDB connection success');
    } catch (error) {
      console.error(`Error in mongo connection: ${error}`)
    }
  }

  async init() {
    this.run().catch(console.dir);
  }
}

export const db = new DB();