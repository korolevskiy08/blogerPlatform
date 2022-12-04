import { createSlice } from '@reduxjs/toolkit';

import { createPost, deletePost, getPosts } from './posts-actions';
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
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.posts = action.payload.posts;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        posts: state.posts.filter(ps => ps.id !== action.payload!.id),
      };
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        posts: [action.payload!.data, ...state.posts],
      };
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

export const postsSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
