import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { devicesAPI } from './devices-api';

export const getDevices = createAsyncThunk(
  'devices/getDevices',
  async (_, { rejectWithValue }) => {
    try {
      const res = await devicesAPI.getDevices();

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const terminateSessions = createAsyncThunk(
  'devices/terminateSessions',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await devicesAPI.terminateSessions();

      dispatch(getDevices());
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const loginOutDevice = createAsyncThunk(
  'devices/loginOutDevice',
  async (deviceId: string, { rejectWithValue, dispatch }) => {
    try {
      await devicesAPI.loginOutDevice(deviceId);
      dispatch(getDevices());
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
