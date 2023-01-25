import React, { FC, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ConfirmModal } from '../../../common/Components/Modals/ConfirmModal/ConfirmModal';
import { ErrorSnackBar } from '../../../common/Components/SnackBar/SnackBar';
import { ShowPassword } from '../../../common/function/showPassword';
import { validateNewPassword } from '../../../common/function/validateNewPassword';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReactComponent as Eye } from '../../../common/icons/showPassword.svg';
import { Path } from '../../../common/Routes';
import style from '../../../layout/global.module.css';
import { newPassword } from '../auth-actions';
import { NewPasswordType } from '../authType';
import { ExpiredEmail } from '../ExpiredEmail/ExpiredEmail';

import styles from './new-password.module.css';

export const NewPassword: FC = () => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [open, setOpen] = React.useState(true);
  const { show, setShowPassword } = ShowPassword();
  const navigate = useNavigate();
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const code = useLocation();
  const codeNum = 13;

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      passwordConfirmation: '',
    } as NewPasswordType,
    validate: values => validateNewPassword(values),
    onSubmit: values => {
      dispatch(
        newPassword({
          newPassword: values.newPassword,
          recoveryCode: code.search.slice(codeNum),
        }),
      ).then(() => {
        setOpenConfirmModal(true);
      });
    },
  });

  const navigateSignIn = (): void => {
    if (auth.status === 'succeeded') {
      navigate(Path.SignIn);
    } else {
      setOpenConfirmModal(false);
    }
  };

  return (
    <AuthWrapper showImage={false}>
      {auth.status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          {!auth.error ? (
            <div className={styles.container}>
              <form onSubmit={formik.handleSubmit}>
                <h1 className={`${style.textGlobal} ${styles.title}`}>
                  Create New Password
                </h1>
                <p className={`${style.textGlobal} ${styles.text}`}>New password</p>
                <input
                  className={formik.errors.newPassword ? styles.errorInput : styles.input}
                  type={show ? 'password' : 'text'}
                  {...formik.getFieldProps('newPassword')}
                />
                <Eye onClick={setShowPassword} className={styles.eye} />
                <p className={`${style.textGlobal} ${styles.text}`}>
                  Password confirmation
                </p>
                <input
                  className={formik.errors.newPassword ? styles.errorInput : styles.input}
                  type={show ? 'password' : 'text'}
                  {...formik.getFieldProps('passwordConfirmation')}
                />
                <Eye onClick={setShowPassword} className={styles.eye} />
                <p className={`${style.textGlobal} ${styles.text}`}>
                  Your password must be between 6 and 20 characters
                </p>
                <Button
                  type="submit"
                  className={`${style.button} ${styles.createButton}`}
                  onclick={() => {}}
                >
                  Create new password
                </Button>
              </form>
            </div>
          ) : (
            <ExpiredEmail onclick={() => {}} />
          )}
        </div>
      )}
      <ConfirmModal
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        onClickHandler={navigateSignIn}
        textModals={
          auth.error === null
            ? 'Your new password has been saved successfully'
            : `${auth.error}`
        }
        title={auth.error === null ? 'New Password' : 'Error'}
      />
      <ErrorSnackBar error={auth.error} open={open} setOpen={() => setOpen(false)} />
    </AuthWrapper>
  );
};
