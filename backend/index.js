const express = require('express')
const cors = require('cors');
const fs = require('fs');
const app = express()
const port = 3000

// Allow specific domain
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {

  try {
    const songId = req.query.songId;
    console.log(songId)

    const filePath = `../frontend/src/assets/${songId}.mp3`;

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }

      const range = req.headers.range;

      // const fileSize = stats.size;

      // const chunkSize = 1024 * 1024;
      // const start = Number(range.substring(range.indexOf('=') + 1, range.indexOf('-')));
      // const end = Math.min(end, fileSize - 1);

      // const range = req.headers.range;
      const fileSize = stats.size;
      if (!range) {
        return res.status(400).send('Range header is required');
      }
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const headers = {
        "Content-Type": "audio/mp3",
        "Content-Length": end - start,
        "Content-Range": "bytes " + start + "-" + end + "/" + fileSize,
        "Accept-Ranges": "bytes",
      };

      res.writeHead(206, headers);

      const fileStream = fs.createReadStream(filePath, { start, end });

      fileStream.pipe(res);
    });
  } catch (err) {
    console.error('backend error: ', err);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})