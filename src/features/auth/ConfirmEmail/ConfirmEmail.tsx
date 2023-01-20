import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../../common/Components/Button/Button';
import { Wrapper } from '../../../common/Components/Wrapper/Wrapper';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import bro from '../../../common/images/bro.png';
import linkExpired from '../../../common/images/linkExpired.png';
import style from '../../../layout/global.module.css';
import { registrationConfirmation } from '../auth-actions';

import styles from './confirmEmail.module.css';

export const ConfirmEmail: FC = () => {
  const [status, setStatus] = useState<boolean>();
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const params = useLocation();
  const navigate = useNavigate();
  const min = 6;

  const navigateSignIn = (): void => {
    navigate('/SignIn');
  };

  useEffect(() => {
    dispatch(registrationConfirmation({ code: params.search.slice(min) })).then(
      (res: any) => {
        const status = 400;

        if (res.status !== status) {
          setStatus(false);
        } else {
          setStatus(true);
        }
      },
    );
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
            {status ? (
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
              <div className={styles.expiredContainer}>
                <h2 className={`${style.textGlobal} ${styles.titleExpired}`}>
                  Email verification link expired
                </h2>
                <p className={`${style.textGlobal} ${styles.text}`}>
                  Looks like the verification link has expired. Not to worry, we can send
                  the link again
                </p>
                <Button
                  styleButton={`${style.button} ${styles.buttonResend}`}
                  onclick={() => {}}
                >
                  Resend verification link
                </Button>
                <img src={linkExpired} alt="linkExpired" />
              </div>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};
