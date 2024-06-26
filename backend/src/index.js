import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import MainRouter from './routes/index.js';
import DB from './db/mongoClient.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function start() {
  const app = express();

  await DB.init();

  app.use(cors({ origin: 'http://localhost:5173' }));

  app.use('/', MainRouter);

  app.listen(PORT, () => {
    console.info(`Fire Music playing on port ${PORT}`);
  })
}

start();





// app.get('/', (req, res) => {

//   try {
//     const songId = req.query.songId;
//     console.log('Request recieved for: ', songId)

//     const filePath = `../frontend/src/assets/${songId}.mp3`;

//     fs.stat(filePath, (err, stats) => {
//       if (err) {
//         console.error(err);
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('File not found');
//         return;
//       }

//       const range = req.headers.range;

//       const fileSize = stats.size;
//       if (!range) {
//         return res.status(400).send('Range header is required');
//       }
//       const parts = range.replace(/bytes=/, '').split('-');
//       const start = parseInt(parts[0], 10);
//       const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//       const headers = {
//         "Content-Type": "audio/mp3",
//         "Content-Length": end - start,
//         "Content-Range": "bytes " + start + "-" + end + "/" + fileSize,
//         "Accept-Ranges": "bytes",
//       };

//       res.writeHead(206, headers);

//       const fileStream = fs.createReadStream(filePath, { start, end });

//       fileStream.pipe(res);
//     });
//   } catch (err) {
//     console.error('backend error: ', err);
//   }
// })

// app.get('/proxy-fire', (req, res) => {
//   console.info('--------------------------------req from proxy---------------------------')
//   // console.info(req);
//   res.write(JSON.stringify({
//     piggy: 'hi',
//     wow: 'yo',
//   }));
//   res.send();
// });
