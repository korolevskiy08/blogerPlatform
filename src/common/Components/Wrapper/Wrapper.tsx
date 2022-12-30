import React, { FC, ReactNode } from 'react';

import { Header } from '../../../layout/Header/Header';
import { Navigation } from '../../../layout/Navigation/Navigation';

import styles from './wrapper.module.css';

type WrapperType = {
  children: ReactNode;
};

export const Wrapper: FC<WrapperType> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Navigation />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
