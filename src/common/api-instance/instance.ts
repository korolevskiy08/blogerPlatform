import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://node-js-express-ioc-containers.vercel.app/',
});

// instance.interceptors.response.use(() => {});
