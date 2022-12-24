import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { Button } from '../../common/Components/Button/Button';
import rafiki from '../../common/images/rafiki.png';
import style from '../../layout/global.module.css';

import styles from './signIn.module.css';

export const SignIn: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signIn}>
        <h2 className={`${style.textGlobal} ${styles.title}`}>Sign In</h2>
        <p className={`${style.textGlobal} ${styles.text}`}>Email or Username</p>
        <input className={`${style.textGlobal} ${styles.userName}`} type="text" />
        <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
        <input className={style.textGlobal} type="password" />
        <Button styleButton={`${style.button} ${styles.button}`} onclick={() => {}}>
          Sign In
        </Button>
        <p className={`${style.textGlobal} ${styles.haveAccount}`}>
          Don’t have an account?
        </p>
        <p className={styles.signUp}>
          <NavLink to="#" className={style.textGlobal}>
            Sign In
          </NavLink>
        </p>
      </div>
      <div className={styles.rafiki}>
        <img src={rafiki} alt="rafiki" />
      </div>
    </div>
  );
};
