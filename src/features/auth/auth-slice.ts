import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status } from '../Post/post-slice';

import { UserType } from './authType';

const slice = createSlice({
  name: 'signIn',
  initialState: {
    user: {} as UserType,
    isLoggedIn: false,
    status: 'idle' as Status,
    error: null as null | string,
  },
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: builder => {
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

export const { setIsLoggedIn } = slice.actions;
