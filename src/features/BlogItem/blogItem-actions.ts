import { createAsyncThunk } from '@reduxjs/toolkit';

import { blogAPI } from './blogItem-api';

export const getBlog = createAsyncThunk(
  'blogs/getBlog',
  async (id: string, { rejectWithValue }) => {
    const res = await blogAPI.getBlog(id);

    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
