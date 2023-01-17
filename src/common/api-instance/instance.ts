import axios from 'axios';

import { authApi } from '../../features/auth/auth-api';

export const instance = axios.create({
  baseURL: 'https://node-js-express-ioc-containers.vercel.app/',
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  /* eslint-disable no-param-reassign */
  config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  return config;
});

let flag = false;

instance.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;

    if (
      // eslint-disable-next-line no-magic-numbers
      error.response.status === 401 &&
      error.config &&
      !flag &&
      !error.config._isRetry
    ) {
      console.log('error.config._isRetry', error.config._isRetry);
      originalRequest._isRetry = true;
      flag = true;
      console.log('originalRequest._isRetry', originalRequest._isRetry);
      try {
        const response = await authApi.refreshToken();

        localStorage.setItem('accessToken', response.data.accessToken);

        return instance.request(originalRequest);
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  },
);
