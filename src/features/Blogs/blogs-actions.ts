import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/AppRoutes/store';

import { blogsAPI } from './blogs-api';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue, getState }) => {
    const { params } = (getState() as AppRootStateType).blogs;
    const nextPageNumber = params.page + 1;

    if (params.fetching || nextPageNumber > params.pagesCount)
      return rejectWithValue('Already fetching');
    try {
      const res = await blogsAPI.getBlogs({ ...params, pageNumber: nextPageNumber });

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
