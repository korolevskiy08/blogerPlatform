import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReactComponent as SignIn } from '../../common/icons/logIn.svg';
import { ReactComponent as LoginOut } from '../../common/icons/loginOut.svg';
import { Path } from '../../common/Routes';
import style from '../global.module.css';

import styles from './Header.module.css';

export const Header: FC = () => {
  const userData = useAppSelector(state => state.auth.user);

  return (
    <header className={styles.header}>
      <p className={styles.title}>Blogger Platform</p>
      {userData === undefined ? (
        <div className={styles.signIn}>
          <SignIn />
          <NavLink
            to={Path.SignIn}
            className={`${style.textGlobal} ${styles.signInText}`}
          >
            Sign In
          </NavLink>
        </div>
      ) : (
        <div className={styles.signIn}>
          <p className={`${style.textGlobal} ${styles.signInText}`}>{userData.login}</p>
          <LoginOut className={styles.iconLogOut} />
          <NavLink to="#" className={style.textGlobal}>
            login out
          </NavLink>
        </div>
      )}
    </header>
  );
};
