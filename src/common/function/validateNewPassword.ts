import { NewPasswordFormType } from '../../features/auth/authType';

export const validateNewPassword = (values: any): NewPasswordFormType => {
  const minPass = 2;
  const maxPass = 8;
  const errors: NewPasswordFormType = {};

  if (!values.newPassword) {
    errors.newPassword = 'Required';
  } else if (values.newPassword.length < minPass || values.newPassword.length > maxPass) {
    errors.newPassword = 'Password must be between 2 and 6 characters';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Required';
  } else if (values.passwordConfirmation !== values.newPassword) {
    errors.passwordConfirmation = 'Passwords do not match';
  }

  return errors;
};
