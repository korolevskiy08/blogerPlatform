import React, { FC } from 'react';

import style from '../global.module.css';

import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={style.container}>
        <div className={styles.content}>
          <p className={styles.title}>Blogger Platform</p>
        </div>
      </div>
    </header>
  );
};
