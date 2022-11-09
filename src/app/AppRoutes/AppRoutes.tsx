import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Blogs } from '../../features/Blogs/Blogs';
import { Posts } from '../../features/Posts/Posts';

export const AppRoutes: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
