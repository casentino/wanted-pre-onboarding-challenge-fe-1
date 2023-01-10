import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

export interface EmailInputState {
  email?: string;
  isError: boolean;
  message?: string;
}

const initialState: EmailInputState = {
  isError: false,
};

type ReducerType = {
  setEmail: (state: WritableDraft<EmailInputState>, action: PayloadAction<Required<EmailInputState['email']>>) => void;
  setIsError: (state: WritableDraft<EmailInputState>, action: PayloadAction<EmailInputState['isError']>) => void;
  setMessage: (state: WritableDraft<EmailInputState>, action: PayloadAction<Required<EmailInputState['message']>>) => void;
};

export const emailInputSlice = createSlice<EmailInputState, ReducerType, 'emailInput'>({
  name: 'emailInput',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setEmail, setIsError, setMessage } = emailInputSlice.actions;
const emailInputReducer = emailInputSlice.reducer;

export default emailInputReducer;
