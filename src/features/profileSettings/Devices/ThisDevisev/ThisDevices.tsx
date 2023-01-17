import { FC } from 'react';

import style from '../../../../layout/global.module.css';

import styles from './this-devices.module.css';

export const ThisDevices: FC = () => {
  return (
    <div className={styles.thisDevicesBlock}>
      <p className={`${style.textGlobal} ${styles.title}`}>This devices</p>
      <div className={styles.thisDevices}>
        <img src="" alt="" />
        <div className={styles.thisDevicesInfo}>
          <p>device</p>
          <p>ip</p>
          <p>status</p>
        </div>
      </div>
    </div>
  );
};
