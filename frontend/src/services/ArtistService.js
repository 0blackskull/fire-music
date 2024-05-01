const BASE_URL = 'http://localhost:3000';

const paths = {
  artist: '/artist'
}

const getAllArtists = async () => {
  try{
    const response = await fetch(`${BASE_URL}${paths.artist}`);
  
    const data = await response?.json();

    return data;
  } catch (error) {
    console.error('Error while fetching artists', error);
  }
}

export default {
  getAllArtists
}