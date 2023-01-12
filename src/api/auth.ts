import { AxiosResponse } from 'axios';
import { AuthRequest, AuthResponse } from '../types/auth';
import { axiosInstance } from './axiosInstance';
/**
 * 계정 로그인 요청
 * @param authRequest - 로그인 요청 정보
 */
export const login = async (authRequest: AuthRequest) => {
  const url = '/users/login';
  return await axiosInstance.post<AxiosResponse<AuthResponse>>(url, authRequest);
};
/**
 * 회원가입 요청
 * @param authRequest - 회원가입 정보
 */
export const signUp = async (authRequest: AuthRequest) => {
  const url = '/users/create';
  return await axiosInstance.post<AxiosResponse<AuthRequest>>(url, authRequest);
};
