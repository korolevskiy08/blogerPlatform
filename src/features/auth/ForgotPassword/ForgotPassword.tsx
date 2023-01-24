import React, { FC } from 'react';

import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { validateForgotPass } from '../../../common/function/validateForgotPass';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { ForgotPasswordType } from '../authType';

import styles from './forgot-password.module.css';

export const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    } as ForgotPasswordType,
    validate: values => validateForgotPass(values),
    onSubmit: values => {
      console.log(values);
      dispatch();
    },
  });

  return (
    <AuthWrapper showImage={false}>
      <div className={styles.container}>
        <h1 className={`${style.textGlobal} ${styles.title}`}>Forgot Password</h1>
        <p className={`${style.textGlobal} ${styles.text}`}>Email</p>
        <input
          className={formik.errors.email ? styles.errorInput : styles.input}
          type="text"
          {...formik.getFieldProps('email')}
        />
        <p className={`${style.textGlobal} ${styles.text}`}>
          Enter your email address and we will send you further instructions{' '}
        </p>
        <Button className={`${style.button} ${styles.buttonSend}`} onclick={() => {}}>
          Send Instructions
        </Button>
        <NavLink className={`${style.textGlobal} ${styles.backSignIn}`} to={Path.SignIn}>
          Back to Sign In
        </NavLink>
      </div>
    </AuthWrapper>
  );
};
