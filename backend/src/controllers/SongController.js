import { SongMetadata } from '../db/mongoClient.js';

const getNextSongs = (req, res) => {
  const songList = SongMetadata.collection.find();

  res.send(songList);
}

export default {
  getNextSongs
}