import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import blogsSvg from '../../common/icons/Blogs.svg';
import postsSvg from '../../common/icons/Posts.svg';
import { Path } from '../../common/Routes';

import style from './Navigation.module.css';

export const Navigation: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={style.linkBlock} to={Path.Blogs}>
            <img src={blogsSvg} alt="img" />
            <p className={style.link}>Blogs</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.linkBlock} to={Path.Posts}>
            <img src={postsSvg} alt="img" />
            <p className={style.link}>Posts</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
