import { instance } from '../../common/api-instance/instance';

import { AuthType, CodeType, NewPasswordType, SignUpType } from './authType';

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
  passwordRecovery(email: string) {
    return instance.post('auth/password-recovery', {
      email,
      link: process.env.REACT_APP_LINK || 'http://localhost:3000/#',
    });
  },
  newPassword(data: NewPasswordType) {
    return instance.post('auth/new-password', { data });
  },
};

export type ResponseLoginType = {
  accessToken: string;
};
