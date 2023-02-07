import axios from 'axios';

// import { setUserData } from '../../features/auth/auth-slice';
// import { useAppDispatch } from '../hooks/useAppDispatch';

export const instance = axios.create({
  baseURL: 'https://blog-platform-for-guild.vercel.app/',
  withCredentials: true,
});

instance.interceptors.request.use(async config => {
  /* eslint-disable no-param-reassign */
  const token = localStorage.getItem('accessToken');

  // const isTokenExpired = checkIsTokenExpired(token)
  // if isTokenExpired request('refresh-token)
  // ..

  config.headers!.Authorization = `Bearer ${token}`;

  return config;
});

// let refresh = false;
//
// instance.interceptors.response.use(
//   resp => resp,
//   async error => {
//     const statusNumberFailed = 401;
//
//     if (error.response.status === statusNumberFailed && !refresh) {
//       refresh = true;
//       const response = await instance.post('auth/refresh-token', {}, {});
//       const statusNumberSuccess = 200;
//
//       if (response.status === statusNumberSuccess) {
//         localStorage.setItem('accessToken', response.data.accessToken);
//         const dispatch = useAppDispatch();
//         const res = await instance.get('auth/me');
//
//         dispatch(setUserData(res.data));
//
//         return instance.request(error.config);
//       }
//     }
//     refresh = false;
//   },
// );
