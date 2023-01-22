import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import * as yup from 'yup';
import { useLoginAppDispatch, useLoginAppSelector } from '../hook';
import { LoginState } from '../LoginStore';
import { setEmail, setIsError, setMessage } from './emailInputSlice';

const emailRegex = /^[a-zA-Z0-9\-_.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

const emailValidate = yup.string().matches(emailRegex, '이메일 형식이아닙니다.');

type EmailInputProps = TextFieldProps & {
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onError?: (isError: boolean) => void;
};

function EmailInput({ onChange, onError }: EmailInputProps) {
  const { email, isError, message } = useLoginAppSelector((state: LoginState) => state.email);
  const dispatch = useLoginAppDispatch();
  const handleChangeEmailInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setEmail(value));
    [].filter;
    if (onChange instanceof Function) {
      onChange(value, e);
    }
  };
  const handleBlurInput = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
    const isValidate = emailValidate.isValidSync(email);
    if (isValidate) return;

    try {
      emailValidate.validateSync(email);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        dispatch(setMessage(err.message));
      }
    }

    dispatch(setIsError(!isValidate));
    if (onError instanceof Function) {
      onError(!isValidate);
    }
  };
  return (
    <TextField
      data-testid="emailInput"
      placeholder="이메일을 입력해주세요"
      label="Email"
      size="small"
      value={email || ''}
      error={isError}
      helperText={message}
      onBlur={handleBlurInput}
      onChange={handleChangeEmailInput}
    />
  );
}

export default EmailInput;
