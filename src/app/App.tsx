import React, { FC } from 'react';

import '../App.css';
import { useAppSelector } from '../common/hooks/useAppSelector';
import styles from '../layout/global.module.css';
import { Header } from '../layout/Header/Header';
import { Navigation } from '../layout/Navigation/Navigation';

import { AppRoutes } from './AppRoutes/AppRoutes';

const App: FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      <Header />
      <div className={styles.main}>
        {isLoggedIn && <Navigation />}
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
