import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteBlog, getBlogs } from './blogs-actions';
import { BlogType } from './blogs-api';

const slice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle' as Status,
    blogs: [] as BlogType[],
    error: null as null | string,
    params: {
      searchNameTerm: '',
      pageNumber: 1,
      pageSize: 10,
      sortBy: 'name',
      sortDirection: 'desc',
    },
  },

  reducers: {
    setFilterBlogs(
      state,
      action: PayloadAction<{
        searchNameTerm?: string;
        pageNumber?: number;
        pageSize?: number;
        sortBy?: string;
        sortDirection?: string;
      }>,
    ) {
      state.params.searchNameTerm =
        action.payload.searchNameTerm || state.params.searchNameTerm;
      state.params.pageNumber = action.payload.pageNumber || state.params.pageNumber;
      state.params.pageSize = action.payload.pageSize || state.params.pageSize;
      state.params.sortBy = action.payload.sortBy || state.params.sortBy;
      state.params.sortDirection =
        action.payload.sortDirection || state.params.sortDirection;
    },
  },
  extraReducers: builder => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload!.data.items;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        blogs: state.blogs.filter(bl => bl.id !== action.payload!.id),
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

export const blogsSlice = slice.reducer;

export const { setFilterBlogs } = slice.actions;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
