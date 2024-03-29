import React, { FC } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import { logout } from '../../../features/auth/auth-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReactComponent as SignIn } from '../../icons/logIn.svg';
import { ReactComponent as LoginOut } from '../../icons/loginOut.svg';
import { Path } from '../../Routes';

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
      {userData === null || userData === undefined ? (
        <div className={styles.signIn}>
          <SignIn />
          <NavLink to={Path.SignIn} className={styles.signInText}>
            Sign In
          </NavLink>
        </div>
      ) : (
        <div className={styles.signIn}>
          <p role="presentation" onClick={navigateSettings} className={styles.signInText}>
            {userData.login ? userData.login : ''}
          </p>
          <LoginOut className={styles.iconLogOut} />
          <NavLink onClick={logOut} to="#" className={styles.signInText}>
            Login out
          </NavLink>
        </div>
      )}
    </header>
  );
};
