import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { blogsAPI } from './blogs-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (
    params: { searchNameTerm?: string; sortDirection?: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await blogsAPI.getBlogs(params);

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
