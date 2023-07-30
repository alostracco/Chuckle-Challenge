import axios from 'axios';

const Random = axios.create({
  baseURL: '/api/YoutubeRandomHandler',
});

export default Random;