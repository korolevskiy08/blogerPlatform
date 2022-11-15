import { createSlice } from '@reduxjs/toolkit';

import { getPosts } from './posts-actions';
import { ItemPostType } from './posts-api';

const slice = createSlice({
  name: 'posts',
  initialState: {
    status: 'idle' as Status,
    posts: [] as ItemPostType[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPosts.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.posts = action.payload.posts;
    });
    builder.addCase(getPosts.rejected, state => {
      state.status = 'failed';
      state.error = null;
    });
  },
});

export const postsSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
