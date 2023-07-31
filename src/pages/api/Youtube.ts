import axios, { AxiosInstance } from 'axios';

const Youtube: AxiosInstance = axios.create({
  baseURL: '/api/YoutubeRequestHandler',
});

export default Youtube;
