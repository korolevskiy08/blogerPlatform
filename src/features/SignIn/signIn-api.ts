import { instance } from '../../common/api-instance/instance';

import { SignInType } from './signInType';

export const signInApi = {
  login(params: SignInType) {
    return instance.post('auth/login', params);
  },
};
