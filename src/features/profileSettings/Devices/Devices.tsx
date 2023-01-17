import React, { FC, useEffect } from 'react';

import { Button } from '../../../common/Components/Button/Button';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import style from '../../../layout/global.module.css';

import { getDevices, terminateSessions } from './devices-actions';
import styles from './devices.module.css';
import { ThisDevices } from './ThisDevisev/ThisDevices';

export const Devices: FC = () => {
  const devices = useAppSelector(state => state.devices.devices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDevices());
  }, []);

  const terminateAllSessions = (): void => {
    dispatch(terminateSessions());
  };

  return (
    <div>
      <p className={`${style.textGlobal} ${styles.title}`}>This devices</p>
      <div className={styles.currentDevice}>current device</div>
      <div className={styles.terminateBlock}>
        <Button
          onclick={terminateAllSessions}
          className={`${style.button} ${styles.terminateButton}`}
        >
          Terminate all other session
        </Button>
      </div>
      <p className={`${style.textGlobal} ${styles.activeTitle}`}>Active session</p>
      <ul className={styles.devicesList}>
        {devices.map(d => {
          return (
            <li key={d.deviceId} className={styles.device}>
              <ThisDevices
                ip={d.ip}
                title={d.title}
                deviceId={d.deviceId}
                lastActiveDate={d.lastActiveDate}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
