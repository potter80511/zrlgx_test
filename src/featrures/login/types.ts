export type NetLoginResponse = {
  token: string;
  user: UserInfo;
}

export type UserInfo = {
  name: string;
  username: string;
  email: string;
}
