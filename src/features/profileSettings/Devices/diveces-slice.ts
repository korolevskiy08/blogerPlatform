import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../Blog/blog-slice';

import { getDevices } from './devices-actions';
import { DevicesItemType } from './devices-types';

const slice = createSlice({
  name: 'devices',
  initialState: {
    status: 'idle' as Status,
    devices: [] as DevicesItemType[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDevices.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.devices = action.payload!.data;
    });
    builder.addMatcher(
      action => action.type.endsWith('pending'),
      state => {
        state.status = 'loading';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('fulfilled'),
      state => {
        state.status = 'succeeded';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('rejected'),
      (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      },
    );
  },
});

export const devicesSlice = slice.reducer;
