import { createSlice } from '@reduxjs/toolkit';

import { ItemPostType } from '../Posts/posts-api';

import { getPost } from './post-actions';

const slice = createSlice({
  name: 'post',
  initialState: {
    status: 'idle' as Status,
    post: {} as ItemPostType,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.post = action.payload.data;
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

export const postSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
