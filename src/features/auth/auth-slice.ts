import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status } from '../Post/post-slice';

import { logout, userData } from './auth-actions';
import { UserType } from './authType';

const slice = createSlice({
  name: 'signIn',
  initialState: {
    user: null as null | UserType,
    status: 'idle' as Status,
    error: null as null | string,
  },
  reducers: {
    setUserData(state, action: PayloadAction<{ userData: UserType }>) {
      state.user = action.payload.userData;
    },
  },
  extraReducers: builder => {
    builder.addCase(userData.fulfilled, (state, action) => {
      state.user = action.payload!.res.data;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = null;
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

export const { setUserData } = slice.actions;

export const authSlice = slice.reducer;
