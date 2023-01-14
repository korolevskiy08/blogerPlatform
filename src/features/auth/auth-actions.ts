import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { authApi } from './auth-api';
import { AuthType, CodeType, SignUpType } from './authType';

export const signIn = createAsyncThunk(
  'auth/login',
  async (params: AuthType, { rejectWithValue, dispatch }) => {
    try {
      const res = await authApi.login(params);

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
    const res = await authApi.me();

    try {
      return { res };
    } catch (e) {
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
      const res = await authApi.registrationConfirmation(code);

      console.log(res);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.refreshToken();
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
