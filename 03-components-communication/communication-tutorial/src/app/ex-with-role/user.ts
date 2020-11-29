export type UserRole = 'admin' | 'user' | 'guest';

export interface User {
  name: string;
  role: UserRole;
}
