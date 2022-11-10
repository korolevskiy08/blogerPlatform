import React, { FC } from 'react';

import searchSvg from '../../../../common/icons/Search.svg';
import styles from '../Settings.module.css';

export const Search: FC = () => {
  return (
    <div>
      <img className={styles.searchImg} src={searchSvg} alt="search" />
      <input className={styles.search} type="search" placeholder="Search" />
    </div>
  );
};
