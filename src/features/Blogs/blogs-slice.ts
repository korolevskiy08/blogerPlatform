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
      pageNumber: 1,
      pageSize: 10,
      sortBy: 'createdAt' as SortByType,
      sortDirection: 'desc' as SortDirectionType,
      pagesCount: 1,
      page: 0,
      fetching: false,
    },
  },

  reducers: {
    setFilterBlogs(
      state,
      action: PayloadAction<{
        searchNameTerm?: string;
        pageNumber?: number;
        pageSize?: number;
        sortBy?: SortByType;
        sortDirection?: SortDirectionType;
      }>,
    ) {
      state.params.searchNameTerm =
        action.payload.searchNameTerm || state.params.searchNameTerm;
      state.params.pageSize = action.payload.pageSize || state.params.pageSize;
      state.params.sortBy = action.payload.sortBy || state.params.sortBy;
      state.params.sortDirection =
        action.payload.sortDirection || state.params.sortDirection;
    },
    clearArray(state) {
      state.blogs = [];
    },
    filterBlogs(state, action: PayloadAction<{ items: BlogItemType[] }>) {
      state.blogs = action.payload.items;
    },
  },
  extraReducers: builder => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = [...state.blogs, ...action.payload!.data.items];
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

export const blogsSlice = slice.reducer;

export const { setFilterBlogs, filterBlogs, clearArray } = slice.actions;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
export type SortByType = 'name' | 'createdAt';
export type SortDirectionType = 'asc' | 'desc';
