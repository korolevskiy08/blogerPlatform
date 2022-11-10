import React, { FC } from 'react';

import { Search } from './Search/Search';
import Select from './Select/Select';
import styles from './Settings.module.css';

export const Settings: FC = () => {
  return (
    <div className={styles.settingBlock}>
      <Search />
      <Select />
    </div>
  );
};
