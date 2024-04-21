const express = require('express')
const app = express()
const port = 3000

const filePath = '../frontend/src/assets/sample-music.mp3';

app.get('/', (req, res) => {

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('File not found');
      return;
    }

    const range = req.headers.range;
    const fileSize = stats.size;
    const chunkSize = 1024 * 1024;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunkSize, fileSize - 1);

    const headers = {
      "Content-Type": "video/mp4",
      "Content-Length": end - start,
      "Content-Range": "bytes " + start + "-" + end + "/" + fileSize,
      "Accept-Ranges": "bytes",
    };

    res.writeHead(206, headers);

    const fileStream = fs.createReadStream(filePath, { start, end });

    fileStream.pipe(res);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})