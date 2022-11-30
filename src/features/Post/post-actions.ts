import { createAsyncThunk } from '@reduxjs/toolkit';

import { postAPI } from './post-api';

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id: string, { rejectWithValue }) => {
    const res = await postAPI.getPost(id);

    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
