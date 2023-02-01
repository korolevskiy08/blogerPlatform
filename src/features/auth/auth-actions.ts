import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { authApi } from './auth-api';
import { AuthType, CodeType, RequestNewPasswordType, SignUpType } from './authType';

export const signIn = createAsyncThunk(
  'auth/login',
  async (params: AuthType, { rejectWithValue, dispatch }) => {
    try {
      const res = await authApi.login(params);

      // instance.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
      localStorage.setItem('accessToken', res.data.accessToken);
      dispatch(userData());
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const userData = createAsyncThunk(
  'auth/userData',
  async (_, { rejectWithValue }) => {
    try {
      console.log('TRY');
      const res = await authApi.me();

      return { res };
    } catch (e) {
      console.log('catch', e);
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (params: SignUpType, { rejectWithValue }) => {
    try {
      await authApi.signUp(params);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message);
      }
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await authApi.logout();
    localStorage.removeItem('accessToken');
  } catch (e) {
    if (axios.isAxiosError(e)) return rejectWithValue(e.message);
  }
});

export const registrationConfirmation = createAsyncThunk(
  'auth/registrationConfirmation',
  async (code: CodeType, { rejectWithValue }) => {
    try {
      await authApi.registrationConfirmation(code);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, { rejectWithValue }) => {
    try {
      await authApi.passwordRecovery(email);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const newPassword = createAsyncThunk(
  'auth/newPassword',
  async (params: RequestNewPasswordType, { rejectWithValue }) => {
    try {
      await authApi.newPassword(params);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
