import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from '../../../styles/global.module.css';
import { Path } from '../../Routes';

import styles from './settings-nav.module.css';

export const SettingsNav: FC = () => {
  return (
    <ul className={styles.settingsList}>
      <li className={styles.itemList}>
        <NavLink className={`${style.textGlobal} ${styles.link}`} to={Path.Devices}>
          Devices
        </NavLink>
      </li>
    </ul>
  );
};
