import React, { FC } from 'react';

import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '../../../common/Components/Button/Button';
import { Wrapper } from '../../../common/Components/Wrapper/Wrapper';
import { validateSignIn } from '../../../common/function/validateSignIn';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import rafiki from '../../../common/images/rafiki.png';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { signIn } from '../auth-actions';
import { AuthType } from '../authType';

import styles from './signIn.module.css';

export const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      loginOrEmail: '',
      password: '',
    } as AuthType,
    validate: values => validateSignIn(values),
    onSubmit: values => {
      dispatch(
        signIn({
          loginOrEmail: values.loginOrEmail,
          password: values.password,
        }),
      ).then(() => {
        navigate(Path.Blogs);
      });
    },
  });

  return (
    <Wrapper showNavigation={false}>
      <div className={`${style.container} ${styles.container}`}>
        <div className={styles.signIn}>
          <form onSubmit={formik.handleSubmit}>
            <h2 className={`${style.textGlobal} ${styles.title}`}>Sign In</h2>
            <p className={`${style.textGlobal} ${styles.text}`}>Email or Username</p>
            <input
              {...formik.getFieldProps('loginOrEmail')}
              className={`${style.textGlobal} ${styles.userName}`}
              type="text"
            />
            {/* {formik.touched.loginOrEmail */}
            {/*  ? formik.errors.loginOrEmail && ( */}
            {/*      <div style={{ color: 'red' }}>{formik.errors.loginOrEmail}</div> */}
            {/*    ) */}
            {/*  : null} */}
            <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
            <input
              {...formik.getFieldProps('password')}
              className={style.textGlobal}
              type="password"
            />
            {/* {formik.touched.password */}
            {/*  ? formik.errors.password && ( */}
            {/*      <div style={{ color: 'red' }}>{formik.errors.password}</div> */}
            {/*    ) */}
            {/*  : null} */}
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
            <NavLink to="#" className={`${style.textGlobal} ${styles.signUp}`}>
              Sign Up
            </NavLink>
          </form>
        </div>
        <div className={styles.rafiki}>
          <img src={rafiki} alt="rafiki" />
        </div>
      </div>
    </Wrapper>
  );
};
