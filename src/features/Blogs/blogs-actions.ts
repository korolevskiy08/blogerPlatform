import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/AppRoutes/store';

import { blogsAPI } from './blogs-api';
import { setBlogs, setFetching } from './blogs-slice';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const params = getState() as AppRootStateType;

    console.log(params.blogs.params);
    if (params.blogs.params.fetching) {
      return;
    }
    dispatch(setFetching({ isFetching: true }));
    try {
      const res = await blogsAPI.getBlogs(params.blogs.params);

      console.log(res.data.items);
      dispatch(setBlogs(res.data));

      return res;
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
