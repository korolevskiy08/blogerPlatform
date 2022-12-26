import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { authApi } from './auth-api';
import { setIsLoggedIn } from './auth-slice';
import { AuthType } from './authType';

export const signIn = createAsyncThunk(
  'signIn/login',
  async (params: AuthType, { rejectWithValue, dispatch }) => {
    console.log(params);
    try {
      const res = authApi.login(params);

      dispatch(setIsLoggedIn({ isLoggedIn: true }));
      console.log(res);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
