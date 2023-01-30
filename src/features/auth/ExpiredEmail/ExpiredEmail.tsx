import React, { FC } from 'react';

import { Button } from '../../../common/Components/Button/Button';
import linkExpired from '../../../common/images/linkExpired.png';
import style from '../../../styles/global.module.css';

import styles from './expired-email.module.css';

type ExpiredEmailType = {
  onclick: () => void;
};

export const ExpiredEmail: FC<ExpiredEmailType> = ({ onclick }) => {
  const onClickHandler = (): void => {
    onclick();
  };

  return (
    <div className={styles.expiredContainer}>
      <h2 className={`${style.textGlobal} ${styles.titleExpired}`}>
        Email verification link expired
      </h2>
      <p className={`${style.textGlobal} ${styles.text}`}>
        Looks like the verification link has expired. Not to worry, we can send the link
        again
      </p>
      <Button
        styleButton={`${style.button} ${styles.buttonResend}`}
        onclick={onClickHandler}
      >
        Resend verification link
      </Button>
      <img src={linkExpired} alt="linkExpired" />
    </div>
  );
};
