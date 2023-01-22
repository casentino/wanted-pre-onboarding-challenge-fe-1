import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

type ValueType = {
  value?: string;
  isError: boolean;
  message?: string;
};

interface PasswordInputState {
  password: ValueType;
  passwordConfirm: ValueType;
}

const initialState: PasswordInputState = {
  password: {
    isError: false,
  },
  passwordConfirm: {
    isError: false,
  },
};

type ReducerType = {
  setPassword: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<ValueType['value']>>) => void;
  setPasswordConfirm: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<ValueType['value']>>) => void;
  setIsErrorPassword: (state: WritableDraft<PasswordInputState>, action: PayloadAction<ValueType['isError']>) => void;
  setIsErrorPasswordConfirm: (state: WritableDraft<PasswordInputState>, action: PayloadAction<ValueType['isError']>) => void;
  setMessagePassword: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<ValueType['message']>>) => void;
  setMessageConfirm: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<ValueType['message']>>) => void;
};

export const passwordInputSlice = createSlice<PasswordInputState, ReducerType, 'passwordInput'>({
  name: 'passwordInput',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password.value = action.payload;
    },
    setPasswordConfirm: (state, action) => {
      state.passwordConfirm.value = action.payload;
    },
    setIsErrorPassword: (state, action) => {
      state.password.isError = action.payload;
    },
    setIsErrorPasswordConfirm(state, action) {
      state.passwordConfirm.isError = action.payload;
    },
    setMessagePassword: (state, action) => {
      state.password.message = action.payload;
    },
    setMessageConfirm: (state, action) => {
      state.passwordConfirm.message = action.payload;
    },
  },
});

export const { setPassword, setPasswordConfirm, setIsErrorPassword, setIsErrorPasswordConfirm, setMessagePassword, setMessageConfirm } = passwordInputSlice.actions;

export default passwordInputSlice.reducer;
