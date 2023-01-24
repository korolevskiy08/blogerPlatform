import React, { FC, useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ConfirmModal } from '../../../common/Components/Modals/ConfirmModal/ConfirmModal';
import { ErrorSnackBar } from '../../../common/Components/SnackBar/SnackBar';
import { ShowPassword } from '../../../common/function/showPassword';
import { validateSignUp } from '../../../common/function/validateSignUp';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import Eye from '../../../common/icons/showPassword.svg';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { signUp } from '../auth-actions';
import { SignUpType } from '../authType';

import styles from './signUp.module.css';

export const SignUp: FC = () => {
  const { show, setShowPassword } = ShowPassword();

  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [open, setOpen] = React.useState(true);
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
    } as SignUpType,
    validate: values => validateSignUp(values),
    onSubmit: values => {
      dispatch(
        signUp({
          login: values.login,
          email: values.email,
          password: values.password,
        }),
      )
        .then(() => {
          setOpenConfirmModal(true);
        })
        .catch(() => {
          setOpenConfirmModal(false);
        });
    },
  });

  useEffect(() => {
    setOpen(true);
  }, [auth.error]);

  return (
    <AuthWrapper showImage>
      <div className={styles.signUp}>
        <form onSubmit={formik.handleSubmit}>
          <h2 className={`${style.textGlobal} ${styles.title}`}>Sign Up</h2>
          <p className={`${style.textGlobal} ${styles.text}`}>Username</p>
          <input
            type="text"
            className={style.textGlobal}
            {...formik.getFieldProps('login')}
          />
          <div className={styles.error}>
            {formik.touched.login && formik.errors.login && formik.errors.login}
          </div>
          <p className={`${style.textGlobal} ${styles.text}`}>Email</p>
          <input
            type="text"
            className={style.textGlobal}
            {...formik.getFieldProps('email')}
          />
          <div className={styles.error}>
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </div>
          <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
          <div>
            <input
              type={show ? 'password' : 'text'}
              className={style.textGlobal}
              {...formik.getFieldProps('password')}
            />
            <img
              role="presentation"
              onClick={setShowPassword}
              className={styles.eye}
              src={Eye}
              alt="eye"
            />
            <div className={styles.error}>
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password}
            </div>
          </div>
          <p className={`${style.textGlobal} ${styles.textLinEmail}`}>
            The link has been sent by email. If you don’t receive an email, send link
            again
          </p>
          <Button
            type="submit"
            styleButton={`${style.button} ${styles.button}`}
            onclick={() => {}}
          >
            Sign Up
          </Button>
          <NavLink to="#" className={`${style.textGlobal} ${styles.already}`}>
            Already a member?
          </NavLink>
          <NavLink to={Path.SignIn} className={`${style.textGlobal} ${styles.signIn}`}>
            Sign In
          </NavLink>
        </form>
      </div>
      <ConfirmModal
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onClickHandler={() => setOpenConfirmModal(false)}
        textModals={
          auth.error === null
            ? `We have sent a link to confirm your email to ${formik.values.email}`
            : `${auth.error}`
        }
        title={auth.error === null ? 'Email sent' : 'Error'}
      />
      <ErrorSnackBar error={auth.error} open={open} setOpen={() => setOpen(false)} />
    </AuthWrapper>
  );
};
