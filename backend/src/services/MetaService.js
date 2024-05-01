import { db } from '../db/mongoClient.js';

const getSongMetadataById = async (id = undefined) => {
  let songData = [];

  if (!id) {
    songData = await db.SongMetadata.collection.find().toArray();
  } else {
    songData = await db.SongMetadata.collection.find({
      id: id
    }).toArray();
  }

  return songData;
}

const getArtistMetadataById = async (id = undefined) => {
  let artistData = [];

  if (!id) {
    artistData = await db.ArtistMetadata.collection.find().toArray();
  } else {
    artistData = await db.SongMetadata.collection.find({
      id: id
    }).toArray();
  }

  return artistData;
}

const getTrendingSongData = async () => {
  const data = await db.SongMetadata.collection.find({
    type: "trending"
  }).toArray();

  return data;
}

export const MetaService = {
  getSongMetadataById,
  getArtistMetadataById,
  getTrendingSongData
}