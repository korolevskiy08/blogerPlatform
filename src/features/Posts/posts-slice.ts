import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPosts } from './posts-actions';
import { ItemPostType } from './posts-api';

const slice = createSlice({
  name: 'posts',
  initialState: {
    status: 'idle' as Status,
    posts: [] as ItemPostType[],
    error: null as null | string,
    params: {
      pageNumber: 1,
      pageSize: 10,
      sortBy: 'name',
      sortDirection: 'desc',
    },
  },
  reducers: {
    setFilterPosts(
      state,
      action: PayloadAction<{
        pageNumber?: number;
        pageSize?: number;
        sortBy?: string;
        sortDirection?: string;
      }>,
    ) {
      state.params.pageNumber = action.payload.pageNumber || state.params.pageNumber;
      state.params.pageSize = action.payload.pageSize || state.params.pageSize;
      state.params.sortBy = action.payload.sortBy || state.params.sortBy;
      state.params.sortDirection =
        action.payload.sortDirection || state.params.sortDirection;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.posts = action.payload.posts;
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

export const { setFilterPosts } = slice.actions;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
