import { configureStore } from '@reduxjs/toolkit';
import { AnyAction, combineReducers } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { authSlice } from '../../features/auth/auth-slice';
import { blogSlice } from '../../features/Blog/blog-slice';
import { blogsSlice } from '../../features/Blogs/blogs-slice';
import { postSlice } from '../../features/Post/post-slice';
import { postsSlice } from '../../features/Posts/posts-slice';
import { devicesSlice } from '../../features/profileSettings/Devices/diveces-slice';

const rootReducer = combineReducers({
  blogs: blogsSlice,
  blog: blogSlice,
  posts: postsSlice,
  post: postSlice,
  auth: authSlice,
  devices: devicesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(thunkMiddleware),
});

// types
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
