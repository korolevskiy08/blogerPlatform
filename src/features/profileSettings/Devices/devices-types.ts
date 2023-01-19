import { ReactNode } from 'react';

export type DevicesItemType = {
  ip: string;
  title: string;
  lastActiveDate: string;
  deviceId: string;
};
export type DeviceType = {
  ip: string;
  title: string;
  lastActiveDate: string;
  deviceId: string;
  icon: any;
};

export type ImageDevices = {
  name: string;
  img: ReactNode;
};
