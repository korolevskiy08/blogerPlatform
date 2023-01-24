import React, { FC } from 'react';

import { useFormik } from 'formik';

import { AuthWrapper } from '../../../common/Components/AuthWrapper/AuthWrapper';
import { Button } from '../../../common/Components/Button/Button';
import { ShowPassword } from '../../../common/function/showPassword';
import { validateForgotPassword } from '../../../common/function/validateForgotPassword';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReactComponent as Eye } from '../../../common/icons/showPassword.svg';
import style from '../../../layout/global.module.css';
import { ForgotPasswordType } from '../authType';

import styles from './forgot-password.module.css';

export const ForgotPassword: FC = () => {
  const { show, setShowPassword } = ShowPassword();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      recoveryCode: '',
    } as ForgotPasswordType,
    validate: values => validateForgotPassword(values),
    onSubmit: values => {
      console.log(values);
      dispatch();
    },
  });

  return (
    <AuthWrapper showImage={false}>
      <div className={styles.container}>
        <h1 className={`${style.textGlobal} ${styles.title}`}>Create New Password</h1>
        <p className={`${style.textGlobal} ${styles.text}`}>New password</p>
        <input
          className={formik.errors.newPassword ? styles.errorInput : styles.input}
          type={show ? 'password' : 'text'}
          {...formik.getFieldProps('newPassword')}
        />
        <Eye onClick={setShowPassword} className={styles.eye} />
        <p className={`${style.textGlobal} ${styles.text}`}>Password confirmation</p>
        <input
          className={formik.errors.newPassword ? styles.errorInput : styles.input}
          type={show ? 'password' : 'text'}
          {...formik.getFieldProps('recoveryCode')}
        />
        <Eye onClick={setShowPassword} className={styles.eye} />
        <p className={`${style.textGlobal} ${styles.text}`}>
          Your password must be between 6 and 20 characters
        </p>
        <Button className={`${style.button} ${styles.createButton}`} onclick={() => {}}>
          Create new password
        </Button>
      </div>
    </AuthWrapper>
  );
};
