import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../Post/post-slice';

import { userData } from './auth-actions';
import { UserType } from './authType';

const slice = createSlice({
  name: 'signIn',
  initialState: {
    user: null as null | {} as UserType,
    isLoggedIn: false,
    status: 'idle' as Status,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userData.fulfilled, (state, action) => {
      state.user = action.payload!.res.data;
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

export const authSlice = slice.reducer;
