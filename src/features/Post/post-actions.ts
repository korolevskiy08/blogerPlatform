import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { postAPI } from './post-api';
import { DataNewComment, ResponseLikeStatusType } from './postType';

export const getPost = createAsyncThunk(
  'post/getPost',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await postAPI.getPost(id);

      return { res };
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

export const getPostComments = createAsyncThunk(
  'post/getComments',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await postAPI.getPostComments(id);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const newPostComment = createAsyncThunk(
  'post/newPost',
  async (data: DataNewComment, { rejectWithValue }) => {
    try {
      const res = await postAPI.newComment(data);

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const deletePostComment = createAsyncThunk(
  'post/deleteComment',
  async (commentId: string, { rejectWithValue }) => {
    try {
      await postAPI.deleteComment(commentId);

      return { commentId };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const editComment = createAsyncThunk(
  'post/editComment',
  async (
    param: { commentId: string; content: string; postId: string },
    { rejectWithValue, dispatch },
  ) => {
    try {
      await postAPI.updateComment({
        commentId: param.commentId,
        content: param.content,
      });

      dispatch(getPostComments(param.postId));
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);

export const likeStatus = createAsyncThunk(
  'post/likeStatus',
  async (data: ResponseLikeStatusType, { rejectWithValue }) => {
    try {
      await postAPI.like(data);
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
