import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { signInApi } from './signIn-api';
import { SignInType } from './signInType';

export const signIn = createAsyncThunk(
  'signIn/login',
  async (params: SignInType, { rejectWithValue }) => {
    console.log(params);
    try {
      const res = signInApi.login(params);

      console.log(res);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
