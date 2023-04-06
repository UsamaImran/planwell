export interface IAuth {
  isLoggedIn: boolean;
  authenticateUser: (token: string) => void;
  currentUser: Record<string, unknown> | undefined;
  logout: () => void;
}
