import React, { FC, useState } from 'react';

import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ConfirmModal } from '../../../common/Components/Modals/ConfirmModal/ConfirmModal';
import { ErrorSnackBar } from '../../../common/Components/SnackBar/SnackBar';
import { validateForgotPass } from '../../../common/function/validateForgotPass';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { forgotPassword } from '../auth-actions';
import { ForgotPasswordType } from '../authType';

import styles from './forgot-password.module.css';

export const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const auth = useAppSelector(state => state.auth);
  const [open, setOpen] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
    } as ForgotPasswordType,
    validate: values => validateForgotPass(values),
    onSubmit: values => {
      console.log(values.email);
      dispatch(forgotPassword(values.email))
        .then(() => {
          setOpenConfirmModal(true);
        })
        .catch(() => {
          setOpenConfirmModal(false);
        });
    },
  });

  return (
    <AuthWrapper showImage={false}>
      <div className={styles.container}>
        <form onSubmit={formik.handleSubmit}>
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
          <Button
            type="submit"
            className={`${style.button} ${styles.buttonSend}`}
            onclick={() => {}}
          >
            Send Instructions
          </Button>
        </form>
        <NavLink className={`${style.textGlobal} ${styles.backSignIn}`} to={Path.SignIn}>
          Back to Sign In
        </NavLink>
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
