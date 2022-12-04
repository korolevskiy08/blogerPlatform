import { createAsyncThunk } from '@reduxjs/toolkit';

import { postsAPI } from './posts-api';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await postsAPI.getPosts();

      return { posts: res.data.items };
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
