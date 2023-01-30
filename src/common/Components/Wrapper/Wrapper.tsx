import React, { FC, ReactNode } from 'react';

import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

import styles from './wrapper.module.css';

type WrapperType = {
  showNavigation: boolean;
  children: ReactNode;
};

export const Wrapper: FC<WrapperType> = ({ children, showNavigation }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        {showNavigation && <Navigation />}
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
