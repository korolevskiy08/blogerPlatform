import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/AppRoutes/store';

import { blogsAPI, BlogsParamType } from './blogs-api';
import { clearArray, setIsFetchingBlogs } from './blogs-slice';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (param: Partial<BlogsParamType>, { rejectWithValue, getState, dispatch }) => {
    if (param.pageNumber === 0) dispatch(clearArray());
    const params = { ...(getState() as AppRootStateType).blogs.params, ...param };

    const nextPageNumber = params.pageNumber + 1;

    if (params.fetching || nextPageNumber > params.pagesCount)
      return rejectWithValue('Already fetching');
    dispatch(setIsFetchingBlogs({ isFetching: true }));
    try {
      const res = await blogsAPI.getBlogs({
        ...params,
        pageNumber: nextPageNumber,
      });

      return { ...res, params: { ...params, pageNumber: nextPageNumber } };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
