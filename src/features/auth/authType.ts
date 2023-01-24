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

export type NewPasswordType = {
  recoveryCode: string;
  newPassword: string;
};

export type NewPasswordFormType = {
  recoveryCode?: string;
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
