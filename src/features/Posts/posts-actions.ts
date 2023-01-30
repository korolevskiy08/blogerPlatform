import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppRootStateType } from '../../app/AppRoutes/store';

import { postsAPI, PostsParamType } from './posts-api';
import { clearPostsArray, setIsFetching } from './posts-slice';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (param: Partial<PostsParamType>, { rejectWithValue, getState, dispatch }) => {
    if (param.pageNumber === 0) dispatch(clearPostsArray());
    const params = { ...(getState() as AppRootStateType).posts.params, ...param };

    console.log('fetching', params.fetching);

    // param || (getState() as AppRootStateType).posts.params;
    const nextPageNumber = params.pageNumber + 1;

    if (params.fetching || nextPageNumber > params.pagesCount)
      return rejectWithValue('Already fetching');
    dispatch(setIsFetching({ isFetching: true }));
    try {
      console.log('try');
      const res = await postsAPI.getPosts({ ...params, pageNumber: nextPageNumber });

      // dispatch(filterPosts({ items: res.data.items }));

      return { ...res, params: { ...params, pageNumber: nextPageNumber } };
    } catch (e) {
      if (axios.isAxiosError(e)) return rejectWithValue(e.message);
    }
  },
);
