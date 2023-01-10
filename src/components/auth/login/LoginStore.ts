import { configureStore } from '@reduxjs/toolkit';
import emailInputReducer from './features/emailInputSlice';
import passwordInputReducer from './features/passwordInputSlice';

export const loginStore = configureStore({
  reducer: {
    email: emailInputReducer,
    password: passwordInputReducer,
  },
});
export type LoginState = ReturnType<typeof loginStore.getState>;
export type LoginAppDispatch = typeof loginStore.dispatch;
