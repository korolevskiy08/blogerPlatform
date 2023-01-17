import { FC } from 'react';

import style from '../../../../layout/global.module.css';

import styles from './this-devices.module.css';

type ThisDevicesType = {
  ip: string;
  title: string;
  lastActiveDate: string;
  deviceId: string;
};

export const ThisDevices: FC<ThisDevicesType> = ({
  ip,
  deviceId,
  lastActiveDate,
  title,
}) => {
  console.log(deviceId);

  return (
    <div className={styles.thisDevicesBlock}>
      <p className={`${style.textGlobal} ${styles.title}`}>This devices</p>
      <div className={styles.thisDevices}>
        <img src="" alt="" />
        <div className={styles.thisDevicesInfo}>
          <p>{title}</p>
          <p>{ip}</p>
          <p>{lastActiveDate}</p>
        </div>
      </div>
    </div>
  );
};
