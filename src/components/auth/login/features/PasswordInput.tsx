import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import * as yup from 'yup';
import { useLoginAppDispatch, useLoginAppSelector } from '../hook';
import { setIsErrorPassword, setIsErrorPasswordConfirm, setMessageConfirm, setMessagePassword, setPassword, setPasswordConfirm } from './passwordInputSlice';

type PasswordInputProps = TextFieldProps & {
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

function PasswordInput({ onChange }: PasswordInputProps) {
  const { password, passwordConfirm } = useLoginAppSelector((state) => state.password);
  const dispatch = useLoginAppDispatch();
  const handleChangePassowrdInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(setPassword(value));

    if (onChange instanceof Function) {
      onChange(value, e);
    }
  };

  return (
    <TextField
      label="Password"
      value={password.value || ''}
      size="small"
      onChange={handleChangePassowrdInput}
    />
  );
}

export default PasswordInput;
