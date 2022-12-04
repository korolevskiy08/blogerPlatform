import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Path } from '../../common/Routes';
import { Blog } from '../../features/Blog/Blog';
import { Blogs } from '../../features/Blogs/Blogs';
import { Post } from '../../features/Post/Post';
import { Posts } from '../../features/Posts/Posts';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path={Path.Blogs} element={<Blogs />} />
      <Route path={Path.Blog} element={<Blog />} />
      <Route path={Path.Posts} element={<Posts />} />
      <Route path={Path.Post} element={<Post />} />
    </Routes>
  );
};
