export type AuthType = {
  loginOrEmail: string;
  password: string;
};

export type ForgotPasswordType = {
  email: string;
};

export type ForgotPasswordFormType = {
  email?: string;
};

export type RequestNewPasswordType = {
  newPassword: string;
  recoveryCode: string;
};

export type NewPasswordType = {
  passwordConfirmation: string;
  newPassword: string;
};

export type NewPasswordFormType = {
  passwordConfirmation?: string;
  newPassword?: string;
};

export type SignInFormType = {
  loginOrEmail?: string;
  password?: string;
};

export type UserType = {
  email: string;
  login: string;
  userId: string;
};

export type SignUpType = {
  login: string;
  email: string;
  password: string;
};

export type SignUpErrorType = {
  login?: string;
  email?: string;
  password?: string;
};

export type CodeType = {
  code: string;
};
