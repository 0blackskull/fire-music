class AudioFile {
  constructor(db) {
    this.collection = db.collection('audio-files');
  }
}

export default AudioFile;