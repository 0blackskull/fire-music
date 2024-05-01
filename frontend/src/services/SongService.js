const BASE_URL = 'http://localhost:3000/song';

const paths = {
  next: '/next',
  trend: '/trend'
}

const getNextSongs = async () => {
  try{
    const response = await fetch(`${BASE_URL}${paths.next}`);
  
    const data = await response?.json();

    return data;
  } catch (error) {
    console.error('Error while fetching next songs', error);
  }
}

const getTrendingSong = async () => {
  try{
    const response = await fetch(`${BASE_URL}${paths.trend}`);
  
    const data = await response?.json();

    return data;
  } catch (error) {
    console.error('Error while fetching trending songs', error);
  }
}

const getSongFile = async (songId) => {
  try{
    const response = await fetch(`${BASE_URL}/${songId}`);
  
    const data = await response?.json();

    return data;
  } catch (error) {
    console.error('Error while fetching trending songs', error);
  }
}

export default {
  getNextSongs,
  getTrendingSong,
  getSongFile
}