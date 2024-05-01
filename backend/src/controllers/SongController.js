import { MetaService } from "../services/MetaService.js";
import { StreamService } from "../services/StreamService.js";

const getNextSongs = async (req, res) => {
  try {
    const songList = await MetaService.getSongMetadataById();

    const resdata = JSON.stringify(songList);

    res.send(resdata);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occured while fetching next songs');
  }
}

const getTrendingSong = async (req, res) => {
  try {
    const trendingSongData = await MetaService.getTrendingSongData();

    const resdata = JSON.stringify(trendingSongData);

    res.send(resdata);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occured while fetching trending song');
  }
}

const getSongFile = async (req, res) => {
  try {
    console.log('Req params: ', req.params);
    const fileObj = await StreamService.getSongFile(req.params.id);

    const resdata = JSON.stringify(fileObj);

    res.send(resdata);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occured while fetching trending song');
  }
}

export default {
  getNextSongs,
  getTrendingSong,
  getSongFile
}