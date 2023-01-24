import React, { FC, useEffect } from 'react';

import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ErrorSnackBar } from '../../../common/Components/SnackBar/SnackBar';
import { ShowPassword } from '../../../common/function/showPassword';
import { validateSignIn } from '../../../common/function/validateSignIn';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import Eye from '../../../common/icons/showPassword.svg';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { signIn } from '../auth-actions';
import { AuthType } from '../authType';

import styles from './signIn.module.css';

export const SignIn: FC = () => {
  const [open, setOpen] = React.useState(true);
  const { show, setShowPassword } = ShowPassword();

  const auth = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateForgot = (): void => {
    navigate(Path.ForgotPassword);
  };

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
    <AuthWrapper showImage>
      <div className={styles.signIn}>
        <form onSubmit={formik.handleSubmit}>
          <h2 className={`${style.textGlobal} ${styles.title}`}>Sign In</h2>
          <p className={`${style.textGlobal} ${styles.text}`}>Email or Username</p>
          <input
            {...formik.getFieldProps('loginOrEmail')}
            className={`${style.textGlobal} ${styles.userName}`}
            type="text"
          />
          <div className={styles.error}>
            {formik.touched.loginOrEmail &&
              formik.errors.loginOrEmail &&
              formik.errors.loginOrEmail}
          </div>
          <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
          <div>
            <input
              {...formik.getFieldProps('password')}
              className={style.textGlobal}
              type={show ? 'password' : 'text'}
            />
            <img
              role="presentation"
              onClick={setShowPassword}
              className={styles.eye}
              src={Eye}
              alt="eye"
            />
          </div>
          <div className={styles.error}>
            {formik.touched.password && formik.errors.password && formik.errors.password}
          </div>
          <p
            role="presentation"
            onClick={navigateForgot}
            className={`${style.textGlobal} ${styles.forgot}`}
          >
            Forgot Password
          </p>
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
