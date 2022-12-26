import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/AppRoutes/store';

import { blogsAPI } from './blogs-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue, getState }) => {
    const params = getState() as AppRootStateType;

    try {
      const res = await blogsAPI.getBlogs(params.blogs.params);

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
