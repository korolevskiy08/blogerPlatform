import { FC } from 'react';

import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import loginOut from '../../../../common/icons/loginOut.svg';
import style from '../../../../styles/global.module.css';
import { loginOutDevice } from '../devices-actions';

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
  const dispatch = useAppDispatch();

  const logOutDevice = (): void => {
    dispatch(loginOutDevice(deviceId));
  };

  return (
    <div className={styles.thisDevicesBlock}>
      <div className={styles.thisDevices}>
        <img className={styles.browserImg} src={icon} alt={browser} />
        <div className={styles.thisDevicesInfo}>
          <p className={`${style.textGlobal} ${styles.titleBrowser}`}>{browser}</p>
          <p className={style.textGlobal}>{ip}</p>
          <p className={`${style.textGlobal} ${styles.ip}`}>
            {lastActiveDate.slice(0, 10)}
          </p>
        </div>
        <div role="presentation" onClick={logOutDevice} className={styles.loginOut}>
          <img className={styles.loginOutImg} src={loginOut} alt="login out" />
          <p className={style.textGlobal}>login out</p>
        </div>
      </div>
    </div>
  );
};
