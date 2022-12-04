import { createAsyncThunk } from '@reduxjs/toolkit';

import { blogAPI } from './blog-api';

export const getBlog = createAsyncThunk(
  'blog/getBlog',
  async (id: string, { rejectWithValue }) => {
    const res = await blogAPI.getBlog(id);

    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
