import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../../common/Components/Button/Button';
import { Wrapper } from '../../../common/Components/Wrapper/Wrapper';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import bro from '../../../common/images/bro.png';
import style from '../../../layout/global.module.css';
import { registrationConfirmation } from '../auth-actions';
import { ExpiredEmail } from '../ExpiredEmail/ExpiredEmail';

import styles from './confirm-email.module.css';

export const ConfirmEmail: FC = () => {
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const params = useLocation();
  const navigate = useNavigate();
  const min = 6;

  const navigateSignIn = (): void => {
    navigate('/SignIn');
  };

  useEffect(() => {
    dispatch(registrationConfirmation({ code: params.search.slice(min) }));
  }, []);

  return (
    <Wrapper showNavigation={false}>
      <div className={styles.container}>
        {auth.status === 'loading' ? (
          <div className={style.loader}>
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div>
            {!auth.error ? (
              <div className={styles.expiredContainer}>
                <h2 className={`${style.textGlobal} ${styles.title}`}>
                  Congratulations! Your email has been confirmed
                </h2>
                <Button styleButton={style.button} onclick={navigateSignIn}>
                  Sign In
                </Button>
                <img src={bro} alt="bro" />
              </div>
            ) : (
              <ExpiredEmail onclick={() => {}} />
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};
