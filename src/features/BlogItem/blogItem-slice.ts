import { createSlice } from '@reduxjs/toolkit';

import { BlogType } from '../Blogs/blog-api';

import { getBlog } from './blogItem-actions';

const slice = createSlice({
  name: 'blog',
  initialState: {
    status: 'idle' as Status,
    blog: {} as BlogType,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBlog.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.blog = action.payload.data;
    });
    builder.addCase(getBlog.rejected, state => {
      state.status = 'failed';
      state.error = null;
    });
  },
});

export const blogSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
