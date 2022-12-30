import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { authApi } from './auth-api';
import { setIsLoggedIn } from './auth-slice';
import { AuthType } from './authType';

export const signIn = createAsyncThunk(
  'auth/login',
  async (params: AuthType, { rejectWithValue, dispatch }) => {
    const res = await authApi.login(params);

    try {
      dispatch(setIsLoggedIn({ isLoggedIn: true }));
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
    const res = authApi.getUserData();

    try {
      console.log(res);

      return { res };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
