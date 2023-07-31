import axios, { AxiosInstance } from 'axios';

const Random: AxiosInstance = axios.create({
  baseURL: '/api/YoutubeRandomHandler',
});

export default Random;