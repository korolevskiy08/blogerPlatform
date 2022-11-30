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
    builder.addCase(getPost.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.post = action.payload.data;
    });
    builder.addCase(getPost.rejected, state => {
      state.status = 'failed';
      state.error = null;
    });
  },
});

export const postSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
