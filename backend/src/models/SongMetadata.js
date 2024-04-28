class SongMetada {
  constructor(db) {
    this.collection = db.collection('song-metadata');
  }
}

export default SongMetada;