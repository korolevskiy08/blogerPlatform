import { instance } from '../../../common/api-instance/instance';

export const devicesAPI = {
  getDevices() {
    return instance.get('security/devices');
  },
  terminateSessions() {
    return instance.delete('security/devices');
  },
  loginOutDevice(deviceId: string) {
    return instance.delete(`security/devices/${deviceId}`);
  },
};
