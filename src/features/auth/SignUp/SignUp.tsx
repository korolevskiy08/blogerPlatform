import React, { FC, useState } from 'react';

import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ConfirmModal } from '../../../common/Components/Modals/ConfirmModal/ConfirmModal';
import { validateSignUp } from '../../../common/function/validateSignUp';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { signUp } from '../auth-actions';
import { SignUpType } from '../authType';

import styles from './signUp.module.css';

export const SignUp: FC = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
    } as SignUpType,
    validate: values => validateSignUp(values),
    onSubmit: values => {
      console.log(values);
      dispatch(
        signUp({
          login: values.login,
          email: values.email,
          password: values.password,
        }),
      );
    },
  });

  return (
    <AuthWrapper>
      <div className={styles.signUp}>
        <form onSubmit={formik.handleSubmit}>
          <h2 className={`${style.textGlobal} ${styles.title}`}>Sign Up</h2>
          <p className={`${style.textGlobal} ${styles.text}`}>Username</p>
          <input
            type="text"
            className={style.textGlobal}
            {...formik.getFieldProps('login')}
          />
          <p className={`${style.textGlobal} ${styles.text}`}>Email</p>
          <input
            type="text"
            className={style.textGlobal}
            {...formik.getFieldProps('email')}
          />
          <p className={`${style.textGlobal} ${styles.text}`}>Password</p>
          <input
            type="password"
            className={style.textGlobal}
            {...formik.getFieldProps('password')}
          />
          <p className={`${style.textGlobal} ${styles.text}`}>
            The link has been sent by email. If you don’t receive an email, send link
            again
          </p>
          <Button
            type="submit"
            styleButton={`${style.button} ${styles.button}`}
            onclick={() => setOpenConfirmModal(true)}
          >
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
      <ConfirmModal
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onClickHandler={() => setOpenConfirmModal(false)}
        textModals={`We have sent a link to confirm your email to ${formik.values.email}`}
        title="Email sent"
      />
    </AuthWrapper>
  );
};
