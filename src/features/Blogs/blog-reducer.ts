import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { blogsAPI, BlogType } from './blog-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlog',
  async (params, { rejectWithValue }) => {
    const res = await blogsAPI.getBlogs();

    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

const slice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle' as Status,
    blogs: [] as BlogType[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBlogs.pending, state => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.blogs = action.payload.data.items;
    });
    builder.addCase(getBlogs.rejected, state => {
      state.status = 'failed';
      state.error = null;
    });
  },
});

export const blogsReducer = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
