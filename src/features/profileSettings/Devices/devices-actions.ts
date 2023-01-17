import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { devicesAPI } from './devices-api';

export const getDevices = createAsyncThunk(
  'devices/getDevices',
  async (_, { rejectWithValue }) => {
    try {
      const res = await devicesAPI.getDevices();

      console.log(res);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const terminateSessions = createAsyncThunk(
  'auth/terminateSessions',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await devicesAPI.terminateSessions();

      dispatch(getDevices());
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
