import React, { FC } from 'react';

import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { validateSignIn } from '../../../common/function/validateSignIn';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { SignUpType } from '../authType';

import styles from './signUp.module.css';

export const SignUp: FC = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    } as SignUpType,
    validate: values => validateSignIn(values),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <AuthWrapper>
      <div className={styles.signUp}>
        <form onSubmit={formik.handleSubmit}>
          <h2 className={`${style.textGlobal} ${styles.title}`}>Sign Up</h2>
          <p className={`${style.textGlobal} ${styles.text}`}>Username</p>
          <input type="text" className={style.textGlobal} />
          <p className={`${style.textGlobal} ${styles.text}`}>Email</p>
          <input type="text" className={style.textGlobal} />
          <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
          <input type="password" className={style.textGlobal} />
          <p className={`${style.textGlobal} ${styles.text}`}>
            The link has been sent by email. If you don’t receive an email, send link
            again
          </p>
          <Button styleButton={`${style.button} ${styles.button}`} onclick={() => {}}>
            Sign Up
          </Button>
          <NavLink to="#" className={`${style.textGlobal} ${styles.already}`}>
            Already a member?
          </NavLink>
          <NavLink to={Path.Register} className={`${style.textGlobal} ${styles.signIn}`}>
            Sign In
          </NavLink>
        </form>
      </div>
    </AuthWrapper>
  );
};
