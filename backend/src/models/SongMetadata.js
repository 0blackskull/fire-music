class SongMetadata {
  constructor(db) {
    this.collection = db.collection('song-metadata');
  }
}

export default SongMetadata;