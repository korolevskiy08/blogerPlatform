import React, { FC } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReactComponent as SignIn } from '../../common/icons/logIn.svg';
import { ReactComponent as LoginOut } from '../../common/icons/loginOut.svg';
import { Path } from '../../common/Routes';
import { logout } from '../../features/auth/auth-actions';
import style from '../global.module.css';

import styles from './Header.module.css';

export const Header: FC = () => {
  const userData = useAppSelector(state => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateSettings = (): void => {
    navigate(Path.ProfileSettings);
  };

  const logOut = (): void => {
    dispatch(logout()).then(() => {
      navigate(Path.SignIn);
    });
  };

  return (
    <header className={styles.header}>
      <p className={styles.title}>Blogger Platform</p>
      {userData === null ? (
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
          <p
            role="presentation"
            onClick={navigateSettings}
            className={`${style.textGlobal} ${styles.signInText}`}
          >
            {userData.login}
          </p>
          <LoginOut className={styles.iconLogOut} />
          <NavLink
            onClick={logOut}
            to="#"
            className={`${style.textGlobal} ${styles.signInText}`}
          >
            Login out
          </NavLink>
        </div>
      )}
    </header>
  );
};
