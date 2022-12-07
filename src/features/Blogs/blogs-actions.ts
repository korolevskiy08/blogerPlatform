import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { blogsAPI } from './blogs-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue }) => {
    // const {
    //   blogs: { searchNameTerm },
    // } = getState() as AppRootStateType;

    try {
      const res = await blogsAPI.getBlogs();

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id: string, { rejectWithValue }) => {
    try {
      await blogsAPI.removeBlog(id);

      return { id };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
