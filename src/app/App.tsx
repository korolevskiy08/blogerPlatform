import React, { FC } from 'react';

import '../App.css';
import styles from '../layout/global.module.css';
import { Header } from '../layout/Header/Header';
import { Navigation } from '../layout/Navigation/Navigation';

import { AppRoutes } from './AppRoutes/AppRoutes';

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Navigation />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
