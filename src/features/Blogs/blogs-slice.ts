import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getBlogs } from './blogs-actions';
import { BlogItemType } from './blogs-api';

const slice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle' as Status,
    blogs: [] as BlogItemType[],
    error: null as null | string,
    params: {
      searchNameTerm: '',
      pageNumber: 0,
      pageSize: 10,
      sortBy: 'createdAt',
      sortDirection: 'desc',
      pagesCount: 1,
      page: 0,
      fetching: false,
    },
  },

  reducers: {
    setIsFetchingBlogs(state, action: PayloadAction<{ isFetching: boolean }>) {
      state.params.fetching = action.payload.isFetching;
    },
    clearArray(state) {
      state.blogs = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = [...state.blogs, ...action.payload!.data.items];
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

export const blogsSlice = slice.reducer;

export const { setIsFetchingBlogs, clearArray } = slice.actions;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
export type SortByType = 'name' | 'createdAt';
export type SortDirectionType = 'asc' | 'desc';
