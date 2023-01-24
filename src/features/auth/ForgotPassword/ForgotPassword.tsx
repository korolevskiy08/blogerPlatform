import React, { FC } from 'react';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ShowPassword } from '../../../common/function/showPassword';
import { ReactComponent as Eye } from '../../../common/icons/showPassword.svg';
import style from '../../../layout/global.module.css';

import styles from './forgot-password.module.css';

export const ForgotPassword: FC = () => {
  const { show, setShowPassword } = ShowPassword();

  return (
    <AuthWrapper showImage={false}>
      <div className={styles.container}>
        <h1 className={`${style.textGlobal} ${styles.title}`}>Create New Password</h1>
        <p className={`${style.textGlobal} ${styles.text}`}>New password</p>
        <input className={styles.input} type={show ? 'password' : 'text'} />
        <Eye onClick={setShowPassword} className={styles.eye} />
        <p className={`${style.textGlobal} ${styles.text}`}>Password confirmation</p>
        <input className={styles.input} type={show ? 'password' : 'text'} />
        <Eye onClick={setShowPassword} className={styles.eye} />
        <p className={`${style.textGlobal} ${styles.text}`}>
          Your password must be between 6 and 20 characters
        </p>
        <Button className={`${style.button} ${styles.createButton}`} onclick={() => {}}>
          Create new password
        </Button>
      </div>
    </AuthWrapper>
  );
};
