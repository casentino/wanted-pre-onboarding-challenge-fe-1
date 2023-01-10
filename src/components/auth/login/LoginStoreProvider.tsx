import React from 'react';
import { Provider } from 'react-redux';
import { loginStore } from './LoginStore';

function LoginStoreProvider({ children }: React.PropsWithChildren) {
  return <Provider store={loginStore}>{children}</Provider>;
}
export default LoginStoreProvider;
