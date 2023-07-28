import axios from 'axios';

const Youtube = axios.create({
  baseURL: '/api/YoutubeRequestHandler',
});

export default Youtube;