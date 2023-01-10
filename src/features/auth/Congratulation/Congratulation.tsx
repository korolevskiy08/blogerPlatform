import React, { FC } from 'react';

import { Button } from '../../../common/Components/Button/Button';
import { Wrapper } from '../../../common/Components/Wrapper/Wrapper';
import bro from '../../../common/images/bro.png';
import style from '../../../layout/global.module.css';

import styles from './congratulation.module.css';

export const Congratulation: FC = () => {
  return (
    <Wrapper showNavigation={false}>
      <div className={styles.container}>
        <h2 className={`${style.textGlobal} ${styles.title}`}>
          Congratulations! Your email has been confirmed
        </h2>
        <Button styleButton={style.button} onclick={() => {}}>
          Sign In
        </Button>
        <img src={bro} alt="bro" />
      </div>
    </Wrapper>
  );
};
