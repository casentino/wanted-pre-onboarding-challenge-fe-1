import React from 'react';
import { Grid } from '@mui/material';
import LoginArea from '../../components/auth/LoginArea';

function LoginPage() {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <LoginArea />
      </Grid>
    </Grid>
  );
}
export default LoginPage;
