import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { LoginAppDispatch, LoginState } from './LoginStore';

export const useLoginAppDispatch: () => LoginAppDispatch = useDispatch;
export const useLoginAppSelector: TypedUseSelectorHook<LoginState> = useSelector;
