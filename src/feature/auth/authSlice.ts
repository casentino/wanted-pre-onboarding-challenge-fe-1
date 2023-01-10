import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { RootState } from '../../app/store';

export interface AuthResponse {
  message?: string;
  token?: string;
}

const initialState: AuthResponse = {};

type ReducerType = {
  setAuthResponse: (state: WritableDraft<AuthResponse>, action: PayloadAction<AuthResponse>) => void;
};

export const authSlice = createSlice<AuthResponse, ReducerType, 'auth'>({
  name: 'auth',
  initialState,
  reducers: {
    setAuthResponse: (state, action) => {
      const { message, token } = action.payload;
      state.message = message;
      state.token = token;
    },
  },
});

export const { setAuthResponse } = authSlice.actions;

export const authToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
