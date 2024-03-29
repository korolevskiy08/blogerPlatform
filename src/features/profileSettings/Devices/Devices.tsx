import React, { FC, useEffect } from 'react';

import { Button } from '../../../common/Components/Button/Button';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';

import { getDevices, terminateSessions } from './devices-actions';
import styles from './devices.module.css';
import { getCurrentDevice } from './diveces-slice';
import { ThisDevices } from './ThisDevisev/ThisDevices';

export const Devices: FC = () => {
  const devices = useAppSelector(state => state.devices.devices);
  const device = useAppSelector(state => state.devices.device);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDevices());
    dispatch(getCurrentDevice({ browser: navigator.userAgent }));
  }, [dispatch]);

  const terminateAllSessions = (): void => {
    dispatch(terminateSessions());
  };

  return (
    <div>
      <p className={styles.title}>This devices</p>
      <div className={styles.currentDevice}>
        <img src={device.icon} alt="" />
        <div>
          <p className={styles.currentBrowser}>{device.browser}</p>
          <p className={styles.online}>Online</p>
        </div>
      </div>
      <div className={styles.terminateBlock}>
        <Button onclick={terminateAllSessions} className={styles.terminateButton}>
          Terminate all other session
        </Button>
      </div>
      <p className={styles.activeTitle}>Active session</p>
      <ul className={styles.devicesList}>
        {devices.map(d => {
          return (
            <li key={d.deviceId} className={styles.device}>
              <ThisDevices
                ip={d.ip}
                deviceId={d.deviceId}
                lastActiveDate={d.lastActiveDate}
                browser={d.title}
                icon={d.icon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
