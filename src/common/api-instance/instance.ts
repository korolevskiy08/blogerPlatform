import axios from 'axios';

import { authApi } from '../../features/auth/auth-api';

export const instance = axios.create({
  baseURL: 'https://node-js-express-ioc-containers.vercel.app/',
  withCredentials: true,
});

instance.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    const statusCode = 401;

    if (error.response.status === statusCode && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await authApi.refreshToken();

        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        localStorage.setItem('accessToken', response.data.accessToken);

        return instance.request(originalRequest);
      } catch (e) {
        console.log('не авторизован');
      }
    }
    throw error;
  },
);
