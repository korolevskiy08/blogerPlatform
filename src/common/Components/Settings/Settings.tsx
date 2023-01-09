import React, { FC, useState } from 'react';

import { NavLink } from 'react-router-dom';

import deleteSvg from '../../icons/Delete.svg';
import editSvg from '../../icons/Edit.svg';
import settingsSvg from '../../icons/Settings.svg';

import styles from './Settings.module.css';

type SettingType = {
  navigateEditMode: () => void;
  openDeleteModal: () => void;
};

export const Settings: FC<SettingType> = ({ navigateEditMode, openDeleteModal }) => {
  const [showSettings, setShowSettings] = useState(false);

  const showSettingsHandler = (): void => {
    setShowSettings(!showSettings);
  };

  return (
    <div
      className={styles.settingsBlock}
      role="presentation"
      onClick={showSettingsHandler}
    >
      <img src={settingsSvg} alt="settings" />
      {showSettings && (
        <ul className={styles.settings}>
          <li role="presentation" onClick={openDeleteModal}>
            <img src={deleteSvg} alt="delete" />
            <NavLink to="">Delete</NavLink>
          </li>
          <li role="presentation" onClick={navigateEditMode}>
            <img src={editSvg} alt="edit" />
            <NavLink to="">Edit</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};
