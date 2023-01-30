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
      pageSize: 10,
      pageNumber: 0,
      sortBy: 'createdAt',
      sortDirection: 'desc',
      pagesCount: 1,
      fetching: false,
    },
  },
  reducers: {
    setIsFetching(state, action: PayloadAction<{ isFetching: boolean }>) {
      state.params.fetching = action.payload.isFetching;
    },
    clearPostsArray(state) {
      state.posts = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload!.data.items];
      state.params = { ...state.params, ...action.payload!.params };
      state.params.pagesCount = action.payload!.data.pagesCount;
      state.params.fetching = false;
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

export const { setIsFetching, clearPostsArray } = slice.actions;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
