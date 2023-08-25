type User = {
  fullName: string;
  isAdmin: boolean;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PageContextCustom = {
  urlOriginal: string;
  user: User;
  userFullName: string;
};
