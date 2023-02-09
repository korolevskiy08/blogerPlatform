import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { blogAPI } from './blog-api';

export const getBlog = createAsyncThunk(
  'blog/getBlog',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await blogAPI.getBlog(id);

      return res;
      // return {
      //   data: {
      //     createdAt: '10',
      //     id: '12',
      //     name: 'roma',
      //     websiteUrl: 'roma',
      //     description: 'dev',
      //   },
      // };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const getPostsBlog = createAsyncThunk(
  'blog,getPostsBlog',
  async (blogId: string, { rejectWithValue }) => {
    try {
      const res = await blogAPI.getPostsBlog(blogId);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const asyncActions = {
  getBlog,
  getPostsBlog,
};
