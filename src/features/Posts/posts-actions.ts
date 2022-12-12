import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRootStateType } from '../../app/store';

import { postsAPI } from './posts-api';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, getState }) => {
    const params = getState() as AppRootStateType;

    try {
      const res = await postsAPI.getPosts(params.posts.params);

      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);
