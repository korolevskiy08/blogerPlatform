export type AuthType = {
  loginOrEmail: string;
  password: string;
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
  username: string;
  email: string;
  password: string;
};
