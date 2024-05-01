import { db } from '../db/mongoClient.js';

const getSongFile = async (id) => {
  const fileObj = await db.AudioFile.collection.findOne({
    songId: id
  });

  console.log('Song Id receievd in controller', id);

  return fileObj;
}

export const StreamService = {
  getSongFile
}

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