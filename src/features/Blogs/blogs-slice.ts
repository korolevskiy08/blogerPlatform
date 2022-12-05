import { createSlice } from '@reduxjs/toolkit';

import { deleteBlog, getBlogs } from './blogs-actions';
import { BlogType } from './blogs-api';

const slice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle' as Status,
    blogs: [] as BlogType[],
    error: null as null | string,
    searchNameTerm: '',
    pageNumber: 0,
    pageSize: 0,
    sortBy: '',
    sortDirection: '',
  },
  reducers: {},
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

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
