import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type PasswordInputProps = TextFieldProps & {
  onChange?: () => void;
  isConfirm?: boolean;
};

function PasswordInput({ onChange, isConfirm }: PasswordInputProps) {
  return (
    <TextField
      label={isConfirm !== undefined && isConfirm ? 'Password Confirm' : 'Password'}
      size="small"
      onChange={onChange}
    />
  );
}

export default PasswordInput;
