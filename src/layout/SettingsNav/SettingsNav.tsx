import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { Path } from '../../common/Routes';
import style from '../global.module.css';

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
