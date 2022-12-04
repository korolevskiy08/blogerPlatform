import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AddPostType, postsAPI } from './posts-api';

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

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: string, { rejectWithValue }) => {
    try {
      await postsAPI.removePost(id);

      return { id };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const createPost = createAsyncThunk(
  'posts/addPost',
  async (data: AddPostType, { rejectWithValue }) => {
    try {
      const res = await postsAPI.addPost(data);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const editPost = createAsyncThunk(
  'post/editPost',
  async (param: { data: AddPostType; id: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await postsAPI.editPost({ data: param.data, id: param.id });

      dispatch(getPosts());

      return { res };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
