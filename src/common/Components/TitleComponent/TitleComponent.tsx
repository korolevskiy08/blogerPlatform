import React, { FC } from 'react';

import style from '../../../styles/global.module.css';

import styles from './titleComponent.module.css';

type TitleComponentType = {
  title: string;
};

export const TitleComponent: FC<TitleComponentType> = ({ title }) => {
  return (
    <div className={styles.titleBlogs}>
      <h2 className={`${style.textGlobal} ${styles.title}`}>{title}</h2>
    </div>
  );
};
