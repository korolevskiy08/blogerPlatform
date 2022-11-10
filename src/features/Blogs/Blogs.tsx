import React, { FC } from 'react';

import style from '../../layout/global.module.css';

import styles from './Blogs.module.css';
import { Settings } from './Settings/Settings';

export const Blogs: FC = () => {
  return (
    <div className={styles.blogsBlock}>
      <div className={style.container}>
        <div className={styles.titleBlock}>
          <h2 className={style.title}>Blogs</h2>
        </div>
        <Settings />
      </div>
    </div>
  );
};
