import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Path } from '../../common/Routes';
import { BlogItem } from '../../features/BlogItem/BlogItem';
import { Blogs } from '../../features/Blogs/Blogs';
import { Posts } from '../../features/Posts/Posts';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={Path.Blogs} element={<Blogs />} />
      <Route path={Path.Posts} element={<Posts />} />
      <Route path={Path.Blog} element={<BlogItem />} />
    </Routes>
  );
};
