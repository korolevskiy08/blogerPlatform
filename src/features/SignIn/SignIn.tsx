import React, { FC } from 'react';

import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { Button } from '../../common/Components/Button/Button';
import { validateSignIn } from '../../common/function/validateSignIn';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import rafiki from '../../common/images/rafiki.png';
import style from '../../layout/global.module.css';

import { signIn } from './signIn-actions';
import styles from './signIn.module.css';
import { SignInType } from './signInType';

export const SignIn: FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      loginOrEmail: '',
      password: '',
    } as SignInType,
    validate: values => validateSignIn(values),
    onSubmit: values => {
      dispatch(
        signIn({
          loginOrEmail: values.loginOrEmail,
          password: values.password,
        }),
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.container}>
        <div className={styles.signIn}>
          <h2 className={`${style.textGlobal} ${styles.title}`}>Sign In</h2>
          <p className={`${style.textGlobal} ${styles.text}`}>Email or Username</p>
          <input
            {...formik.getFieldProps('loginOrEmail')}
            className={`${style.textGlobal} ${styles.userName}`}
            type="text"
          />
          {formik.touched.loginOrEmail
            ? formik.errors.loginOrEmail && (
                <div style={{ color: 'red' }}>{formik.errors.loginOrEmail}</div>
              )
            : null}
          <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
          <input
            {...formik.getFieldProps('password')}
            className={style.textGlobal}
            type="password"
          />
          {formik.touched.password
            ? formik.errors.password && (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
              )
            : null}
          <Button
            type="submit"
            styleButton={`${style.button} ${styles.button}`}
            onclick={() => {}}
          >
            Sign In
          </Button>
          <p className={`${style.textGlobal} ${styles.haveAccount}`}>
            Don’t have an account?
          </p>
          <p className={styles.signUp}>
            <NavLink to="#" className={style.textGlobal}>
              Sign In
            </NavLink>
          </p>
        </div>
        <div className={styles.rafiki}>
          <img src={rafiki} alt="rafiki" />
        </div>
      </div>
    </form>
  );
};
