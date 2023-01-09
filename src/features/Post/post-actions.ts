import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { postAPI } from './post-api';
import { DataNewComment } from './postType';

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await postAPI.getPost(id);

      return res;
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

export const getComments = createAsyncThunk(
  'post/getComments',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await postAPI.getComments(id);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const newComment = createAsyncThunk(
  'post, newPost',
  async (data: DataNewComment, { rejectWithValue }) => {
    try {
      const res = await postAPI.newComment(data);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
