class ArtistMetadata {
  constructor(db) {
    this.collection = db.collection('artists');
  }
}

export default ArtistMetadata;