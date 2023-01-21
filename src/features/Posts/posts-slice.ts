import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SortByType, SortDirectionType } from '../Blogs/blogs-slice';

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
      pageNumber: 1,
      sortBy: 'createdAt' as SortByType,
      sortDirection: 'desc' as SortDirectionType,
      pagesCount: 1,
      page: 0,
      fetching: false,
    },
  },
  reducers: {
    setFilterPosts(
      state,
      action: PayloadAction<{
        pageNumber?: number;
        pageSize?: number;
        sortBy?: SortByType;
        sortDirection?: SortDirectionType;
      }>,
    ) {
      state.params.pageSize = action.payload.pageSize || state.params.pageSize;
      state.params.sortBy = action.payload.sortBy || state.params.sortBy;
      state.params.sortDirection =
        action.payload.sortDirection || state.params.sortDirection;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload!.data.items];
      state.params.pagesCount = action.payload!.data.pagesCount;
      state.params.page = action.payload!.data.page;
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

export const { setFilterPosts } = slice.actions;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
