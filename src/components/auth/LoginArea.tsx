import React from 'react';
import { Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { Diversity1Sharp } from '@mui/icons-material';
import EmailInput from './login/features/EmailInput';
import PasswordInput from './login/features/PasswordInput';

function LoginArea() {
  return (
    <Paper
      elevation={2}
      component="form"
      sx={{
        padding: '27px 38px',
      }}
    >
      <Grid container direction="column" rowGap={2}>
        <Grid item>
          <Typography variant="h6" component="h6" color="grey">
            ACCOUNT LOGIN
          </Typography>
        </Grid>
        <Grid item container direction="column" rowGap={1}>
          <Grid item>
            <EmailInput />
          </Grid>
          <Grid item>
            <PasswordInput />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" fullWidth>
            LOG IN
          </Button>
        </Grid>
        <Grid item container justifyContent="flex-end">
          <Link href="/auth/register" underline="hover">
            register
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LoginArea;
