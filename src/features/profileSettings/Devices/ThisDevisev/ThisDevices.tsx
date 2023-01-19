import { FC } from 'react';

import loginOut from '../../../../common/icons/loginOut.svg';
import style from '../../../../layout/global.module.css';

import styles from './this-devices.module.css';

type ThisDevicesType = {
  ip: string;
  browser: string;
  lastActiveDate: string;
  deviceId: string;
  icon: string;
};

export const ThisDevices: FC<ThisDevicesType> = ({
  ip,
  deviceId,
  lastActiveDate,
  browser,
  icon,
}) => {
  console.log(deviceId);

  return (
    <div className={styles.thisDevicesBlock}>
      <div className={styles.thisDevices}>
        <img src={icon} alt={browser} />
        <div className={styles.thisDevicesInfo}>
          <p className={`${style.textGlobal} ${styles.titleBrowser}`}>{browser}</p>
          <p className={style.textGlobal}>{ip}</p>
          <p className={`${style.textGlobal} ${styles.ip}`}>
            {lastActiveDate.slice(0, 10)}
          </p>
        </div>
        <div className={styles.loginOut}>
          <img src={loginOut} alt="login out" />
          <p className={style.textGlobal}>login out</p>
        </div>
      </div>
    </div>
  );
};
