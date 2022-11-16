import React, { FC } from 'react';

import blogsSvg from '../../common/icons/Blogs.svg';
import postsSvg from '../../common/icons/Posts.svg';
import { Path } from '../../common/Routes';

import style from './Navigation.module.css';
import styles from './Navigation.module.css';
import { NavigationLink } from './NavLink/NavLink';

export const Navigation: FC = () => {
  return (
    <div className={style.navBlock}>
      <ul>
        <li className={styles.activeList}>
          <NavigationLink
            img={blogsSvg}
            path={Path.Blogs}
            alt="blogs"
            text="Blogs"
            notActive={style.link}
            activeLink={style.activeLink}
          />
        </li>
        <li>
          <NavigationLink
            img={postsSvg}
            path={Path.Posts}
            alt="posts"
            text="Posts"
            notActive={style.linkBlock}
            activeLink={style.activeLink}
          />
        </li>
      </ul>
    </div>
  );
};
