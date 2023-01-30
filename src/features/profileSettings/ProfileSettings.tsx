import { FC } from 'react';

import { SettingsNav } from '../../common/Components/SettingsNav/SettingsNav';
import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { Wrapper } from '../../common/Components/Wrapper/Wrapper';

import { Devices } from './Devices/Devices';
import styles from './profile-settings.module.css';

export const ProfileSettings: FC = () => {
  return (
    <Wrapper showNavigation>
      <div className={styles.container}>
        <TitleComponent title="Profile settings" />

        <SettingsNav />
        <Devices />
      </div>
    </Wrapper>
  );
};
