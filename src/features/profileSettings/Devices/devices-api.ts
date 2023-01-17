import { instance } from '../../../common/api-instance/instance';

export const devicesAPI = {
  getDevices() {
    return instance.get('security/devices');
  },
};
