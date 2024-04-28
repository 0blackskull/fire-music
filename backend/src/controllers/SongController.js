import { SongMetadata } from '../db/mongoClient.js';

const getNextSongs = (req, res) => {
  const songList = SongMetadata.find();

  res.send(songList);
}

export default {
  getNextSongs
}