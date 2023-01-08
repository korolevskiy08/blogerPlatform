import React, { FC } from 'react';

import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import style from '../../../../layout/global.module.css';

import styles from './comments.module.css';

export const Comments: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <div className={styles.avatarBlock}>
          <img src={avatar} alt="avatar" />
        </div>
        <p className={`${style.textGlobal} ${styles.nameProfile}`}>name</p>
        <p className={`${style.textGlobal} ${styles.dateComment}`}>date</p>
      </div>
      <p className={`${style.textGlobal} ${styles.textComment}`}>text comment</p>
    </div>
  );
};
