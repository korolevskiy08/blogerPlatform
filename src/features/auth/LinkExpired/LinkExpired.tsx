import React, { FC } from 'react';

import { Button } from '../../../common/Components/Button/Button';
import { Wrapper } from '../../../common/Components/Wrapper/Wrapper';
import linkExpired from '../../../common/images/linkExpired.png';
import style from '../../../layout/global.module.css';

import styles from './linkExpired.module.css';

export const LinkExpired: FC = () => {
  return (
    <Wrapper showNavigation={false}>
      <div className={styles.container}>
        <h2 className={`${style.textGlobal} ${styles.title}`}>
          Email verification link expired
        </h2>
        <p className={`${style.textGlobal} ${styles.text}`}>
          Looks like the verification link has expired. Not to worry, we can send the link
          again
        </p>
        <Button styleButton={`${style.button} ${styles.button}`} onclick={() => {}}>
          Resend verification link
        </Button>
        <img src={linkExpired} alt="linkExpired" />
      </div>
    </Wrapper>
  );
};
