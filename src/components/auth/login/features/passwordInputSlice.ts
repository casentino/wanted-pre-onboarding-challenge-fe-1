import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

interface PasswordInputState {
  password?: string;
  passwordConfirm?: string;
  isError: boolean;
}

const initialState: PasswordInputState = {
  isError: false,
};

type ReducerType = {
  setPassword: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<PasswordInputState['password']>>) => void;
  setPasswordConfirm: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<PasswordInputState['passwordConfirm']>>) => void;
  setIsError: (state: WritableDraft<PasswordInputState>, action: PayloadAction<Required<Pick<PasswordInputState, 'isError'>>>) => void;
};

export const passwordInputSlice = createSlice<PasswordInputState, ReducerType, 'passwordInput'>({
  name: 'passwordInput',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordConfirm: (state, action) => {
      state.passwordConfirm = action.payload;
    },
    setIsError: (state, action) => {
      const { isError } = action.payload;
      state.isError = isError;
    },
  },
});

export const { setPassword, setPasswordConfirm, setIsError } = passwordInputSlice.actions;

export default passwordInputSlice.reducer;
