import { createAsyncThunk } from '@reduxjs/toolkit';

import { postAPI } from './postItem-api';

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id: string, { rejectWithValue }) => {
    const res = await postAPI.getPost(id);

    console.log(res.data);
    try {
      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
