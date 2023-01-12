import { instance } from '../../common/api-instance/instance';

import { AuthType, SignUpType } from './authType';

export const authApi = {
  login(params: AuthType) {
    return instance.post('auth/login', params);
  },
  me() {
    return instance.get('auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },
  signUp(data: SignUpType) {
    // const message = `To finish registration please follow the link below:
    //  <a href='https://bloger-platform-fue1y84ij-korolevskiy08.vercel.app/#/Congratulation/$token$'>
    //   complete registration
    //   </a>`;

    return instance.post('auth/registration', {
      ...data,
      link: process.env['LINK '],
    });
  },
  logout() {
    return instance.post('auth/logout');
  },
  refreshToken() {
    return instance.post('auth/refresh-token', {}, { withCredentials: true });
  },
};
