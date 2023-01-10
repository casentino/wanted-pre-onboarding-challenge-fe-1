import React from 'react';
import { Grid } from '@mui/material';
import LoginStoreProvider from '../../components/auth/login/LoginStoreProvider';
import LoginArea from '../../components/auth/LoginArea';

function AuthPage() {
  return (
    <LoginStoreProvider>
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item>
          <LoginArea />
        </Grid>
      </Grid>
    </LoginStoreProvider>
  );
}
export default AuthPage;
