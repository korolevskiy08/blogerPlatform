import React, { FC } from 'react';

import searchSvg from '../../../common/icons/Search.svg';

import styles from './Settings.module.css';

export const Settings: FC = () => {
  return (
    <div className={styles.settingBlock}>
      <div>
        <img className={styles.searchImg} src={searchSvg} alt="search" />
        <input className={styles.search} type="search" placeholder="Search" />
      </div>
      <select className={styles.select}>
        <option value="" className={styles.option}>
          New blogs first
        </option>
        <option value="" className={styles.option}>
          Old blogs First
        </option>
        <option value="" className={styles.option}>
          From A to Z
        </option>
        <option value="" className={styles.option}>
          From Z to A
        </option>
      </select>
    </div>
  );
};
