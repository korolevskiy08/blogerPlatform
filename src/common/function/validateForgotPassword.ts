import { ForgotPasswordFormType } from '../../features/auth/authType';

export const validateForgotPassword = (values: any): ForgotPasswordFormType => {
  const minPass = 2;
  const maxPass = 8;
  const errors: ForgotPasswordFormType = {};

  if (!values.newPassword) {
    errors.newPassword = 'Required';
  } else if (values.newPassword.length < minPass || values.newPassword.length > maxPass) {
    errors.newPassword = 'Password must be between 2 and 6 characters';
  }

  if (!values.password) {
    errors.recoveryCode = 'Required';
  } else if (values.newPassword.length !== values.newPassword) {
    errors.newPassword = 'Passwords do not match';
  }

  return errors;
};
