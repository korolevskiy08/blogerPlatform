import { SignInFormType } from '../../features/SignIn/signInType';

export const validateSignIn = (values: any): SignInFormType => {
  const emailLength = 2;
  const passwordLength = 8;
  const errors: SignInFormType = {};

  if (!values.loginOrEmail) {
    errors.loginOrEmail = 'Required';
  } else if (values.loginOrEmail.length < emailLength) {
    errors.loginOrEmail = 'Must be 2 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < passwordLength) {
    errors.password = 'Must be 8 characters or less';
  }

  return errors;
};
