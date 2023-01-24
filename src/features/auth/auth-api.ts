import { instance } from '../../common/api-instance/instance';

import { AuthType, CodeType, ForgotPasswordType, SignUpType } from './authType';

export const authApi = {
  login(params: AuthType) {
    return instance.post<ResponseLoginType>('auth/login', params);
  },
  me() {
    return instance.get('auth/me');
  },
  signUp(data: SignUpType) {
    return instance.post('auth/registration', {
      ...data,
      link: process.env.REACT_APP_LINK || 'http://localhost:3000/#',
    });
  },
  logout() {
    return instance.post('auth/logout', {});
  },
  refreshToken() {
    return instance.post('auth/refresh-token', {});
  },
  registrationConfirmation(code: CodeType) {
    return instance.post('auth/registration-confirmation', code);
  },
  newPassword(data: ForgotPasswordType) {
    return instance.post('auth/new-password', {
      ...data,
      link: process.env.REACT_APP_LINK || 'http://localhost:3000/#',
    });
  },
};

export type ResponseLoginType = {
  accessToken: string;
};
