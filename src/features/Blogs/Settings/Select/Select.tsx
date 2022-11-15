import React, { FC } from 'react';

import styles from '../Settings.module.css';

const Select: FC = () => {
  return (
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
  );
};

export default Select;
