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
    // const message = `<div style='padding: 15px'>
    // To finish registration please follow the link below:
    //  <a href='https://bloger-platform-fue1y84ij-korolevskiy08.vercel.app/#/Congratulation/$token$'>
    //   complete registration
    //   </a>
    //   </div>`;

    return instance.post('auth/registration', data);
  },
  logout() {
    return instance.post('auth/logout');
  },
};
