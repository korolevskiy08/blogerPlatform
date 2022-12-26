import { instance } from '../../common/api-instance/instance';

import { AuthType } from './authType';

export const authApi = {
  login(params: AuthType) {
    return instance.post('auth/login', params);
  },
};
