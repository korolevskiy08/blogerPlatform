import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/AppRoutes/store';

import { postsAPI } from './posts-api';
import { filterPosts } from './posts-slice';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { params } = (getState() as AppRootStateType).posts;
    const nextPageNumber = params.page + 1;

    if (params.fetching || nextPageNumber > params.pagesCount)
      return rejectWithValue('Already fetching');
    try {
      const res = await postsAPI.getPosts({ ...params, pageNumber: nextPageNumber });

      dispatch(filterPosts({ items: res.data.items }));

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
