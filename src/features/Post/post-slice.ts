import { createSlice } from '@reduxjs/toolkit';

import { ItemPostType } from '../Posts/posts-api';

import {
  deletePostComment,
  getPostComments,
  getPost,
  newPostComment,
} from './post-actions';
import { ItemCommentType } from './postType';

const slice = createSlice({
  name: 'post',
  initialState: {
    status: 'idle' as Status,
    post: {} as ItemPostType,
    comments: [] as ItemCommentType[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.post = action.payload.res.data;
    });
    builder.addCase(getPostComments.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.comments = action.payload!.data.items;
    });
    builder.addCase(newPostComment.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.comments.push({ ...action.payload!.data });
    });
    builder.addCase(deletePostComment.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        error: null,

        comments: state.comments.filter(el => el.id !== action.payload!.commentId),
      };
    });
    builder.addMatcher(
      action => action.type.endsWith('pending'),
      state => {
        state.status = 'loading';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('fulfilled'),
      state => {
        state.status = 'succeeded';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('rejected'),
      (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      },
    );
  },
});

export const postSlice = slice.reducer;

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';
