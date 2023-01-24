import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Path } from '../../common/Routes';
import { ConfirmEmail } from '../../features/auth/ConfirmEmail/ConfirmEmail';
import { ForgotPassword } from '../../features/auth/ForgotPassword/ForgotPassword';
import { SignIn } from '../../features/auth/SignIn/SignIn';
import { SignUp } from '../../features/auth/SignUp/SignUp';
import { Blog } from '../../features/Blog/Blog';
import { Blogs } from '../../features/Blogs/Blogs';
import { Post } from '../../features/Post/Post';
import { Posts } from '../../features/Posts/Posts';
import { Devices } from '../../features/profileSettings/Devices/Devices';
import { ProfileSettings } from '../../features/profileSettings/ProfileSettings';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path={Path.Blogs} element={<Blogs />} />
      <Route path={Path.Blog} element={<Blog />} />
      <Route path={Path.Posts} element={<Posts />} />
      <Route path={Path.Post} element={<Post />} />
      <Route path={Path.SignIn} element={<SignIn />} />
      <Route path={Path.Register} element={<SignUp />} />
      <Route path={Path.ConfirmEmail} element={<ConfirmEmail />} />
      <Route path={Path.ProfileSettings} element={<ProfileSettings />} />
      <Route path={Path.ProfileSettings} element={<Devices />} />
      <Route path={Path.ForgotPassword} element={<ForgotPassword />} />
    </Routes>
  );
};
