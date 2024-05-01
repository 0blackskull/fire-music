import { MetaService } from "../services/MetaService.js";

const getAllArtists = async (req, res) => {
  try {
    const artistList = await MetaService.getArtistMetadataById();

    const resdata = JSON.stringify(artistList);

    res.send(resdata);
  } catch (error) {
    res.status(500).send('Error occured while fetching artists');
  }
}

export default {
  getAllArtists
}