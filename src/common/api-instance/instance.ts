import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://node-js-express-ioc-containers.vercel.app/',
  headers: {
    Authorization: 'Basic YWRtaW46cXdlcnR5',
  },
});
