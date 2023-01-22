import { User } from './user';

export interface AuthResponse {
  message: string;
  token: string;
}

export type AuthRequest = Pick<User, 'email' | 'password'>;
