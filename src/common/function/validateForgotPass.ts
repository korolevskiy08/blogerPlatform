import { ForgotPasswordFormType } from '../../features/auth/authType';

export const validateForgotPass = (values: any): ForgotPasswordFormType => {
  const errors: ForgotPasswordFormType = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
