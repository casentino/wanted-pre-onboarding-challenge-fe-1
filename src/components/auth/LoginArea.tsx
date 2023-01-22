import React from 'react';
import { Button, Grid, Link, Paper, Typography } from '@mui/material';
import { Form } from '../Form';
import { yupValidate } from '../../constants/validations';

function LoginArea() {
  return (
    <Paper
      elevation={2}
      component="form"
      sx={{
        padding: '27px 38px',
      }}
    >
      <Form
        formInitialValues={{}}
        formikProps={{}}
        validationSchema={yupValidate.loginValidationSchema}
        onFormSubmit={() => {}}
      >
        <Grid
          container
          direction="column"
          rowGap={2}
        >
          <Grid item>
            <Typography
              variant="h6"
              component="h6"
              color="grey"
            >
              ACCOUNT LOGIN
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            rowGap={1}
          >
            <Grid item>
              <Form.Input
                type="text"
                id="email"
                name="email"
              />
            </Grid>
            <Grid item>
              <Form.Input
                type="password"
                id="password"
                name="password"
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              fullWidth
            >
              LOG IN
            </Button>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
          >
            <Link
              href="/auth/register"
              underline="hover"
            >
              register
            </Link>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
}

export default LoginArea;
