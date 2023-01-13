import React, { FC, useEffect } from 'react';

import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ErrorSnackBar } from '../../../common/Components/SnackBar/SnackBar';
import { validateSignIn } from '../../../common/function/validateSignIn';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { signIn } from '../auth-actions';
import { AuthType } from '../authType';

import styles from './signIn.module.css';

export const SignIn: FC = () => {
  const [open, setOpen] = React.useState(true);
  const auth = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
  }, [auth.error]);

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
      );
    },
  });

  if (auth.user) {
    navigate(Path.Blogs);
  }

  return (
    <AuthWrapper>
      <div className={styles.signIn}>
        <form onSubmit={formik.handleSubmit}>
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
          <NavLink to={Path.Register} className={`${style.textGlobal} ${styles.signUp}`}>
            Sign Up
          </NavLink>
        </form>
        <ErrorSnackBar error={auth.error} open={open} setOpen={() => setOpen(false)} />
      </div>
    </AuthWrapper>
  );
};
