import React, { FC } from 'react';

import blogsSvg from '../../common/icons/Blogs.svg';
import postsSvg from '../../common/icons/Posts.svg';
import { Path } from '../../common/Routes';

import style from './Navigation.module.css';
import { NavigationLink } from './NavLink/NavLink';

export const Navigation: FC = () => {
  return (
    <div className={style.navBlock}>
      <ul>
        <li>
          <NavigationLink
            img={blogsSvg}
            path={Path.Blogs}
            alt="blogs"
            text="Blogs"
            styleLinkTitle={style.link}
            styleLinkBlock={style.linkBlock}
          />
        </li>
        <li>
          <NavigationLink
            img={postsSvg}
            path={Path.Posts}
            alt="posts"
            text="Posts"
            styleLinkTitle={style.link}
            styleLinkBlock={style.linkBlock}
          />
        </li>
      </ul>
    </div>
  );
};
