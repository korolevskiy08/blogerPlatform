import { createSlice } from '@reduxjs/toolkit';

import { BlogItemType } from '../Blogs/blogs-api';
import { PostItem } from '../Blogs/blogsType';

import { getBlog, getPostsBlog } from './blog-actions';

const slice = createSlice({
  name: 'blog',
  initialState: {
    status: 'idle' as Status,
    posts: [] as PostItem[],
    blog: {} as BlogItemType,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.blog = action.payload!.data;
    });
    builder.addCase(getPostsBlog.fulfilled, (state, action) => {
      state.posts = action.payload!.data.items;
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

export const blogSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
