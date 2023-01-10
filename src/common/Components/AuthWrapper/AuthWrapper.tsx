import React, { FC, ReactNode } from 'react';

import style from '../../../layout/global.module.css';
import rafiki from '../../images/rafiki.png';
import { Wrapper } from '../Wrapper/Wrapper';

import styles from './authWrapper.module.css';

type AuthWrapperType = {
  children: ReactNode;
};

export const AuthWrapper: FC<AuthWrapperType> = ({ children }) => {
  return (
    <Wrapper showNavigation={false}>
      <div className={`${style.container} ${styles.container}`}>
        {children}
        <div className={styles.rafiki}>
          <img src={rafiki} alt="rafiki" />
        </div>
      </div>
    </Wrapper>
  );
};
