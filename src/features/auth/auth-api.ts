import { instance } from '../../common/api-instance/instance';

import { AuthType, CodeType, SignUpType } from './authType';

export const authApi = {
  login(params: AuthType) {
    return instance.post('auth/login', params);
  },
  me() {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return Promise.resolve({ data: null });
    }

    return instance.get('auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  signUp(data: SignUpType) {
    return instance.post('auth/registration', {
      ...data,
      link: 'http://localhost:3000/#',
    });
  },
  logout() {
    return instance.post('auth/logout');
  },
  refreshToken() {
    return instance.post('auth/refresh-token');
  },
  registrationConfirmation(code: CodeType) {
    return instance.post('auth/registration-confirmation', code);
  },
};
