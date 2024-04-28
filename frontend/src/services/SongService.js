const BASE_URL = 'http://localhost:3000';

const paths = {
  next: '/song/next'
}

const getNextSongs = async () => {
  try{
    const response = await fetch(`${BASE_URL}${paths.next}`);

    return response.data;
  } catch (error) {
    console.error('Error while fetching next songs', error);
  }
}

export default {
  getNextSongs
}