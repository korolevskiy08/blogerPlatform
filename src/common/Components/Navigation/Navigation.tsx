import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from '../../../styles/global.module.css';
import { ReactComponent as Blog } from '../../icons/Blogs.svg';
import { ReactComponent as Post } from '../../icons/Posts.svg';
import { Path } from '../../Routes';

import styles from './Navigation.module.css';

export const Navigation: FC = () => {
  return (
    <div className={styles.navBlock}>
      {/* <ul className={styles.nav}> */}
      {/*  <li className={`${styles.activeList} ${styles.activeLink}`}> */}
      <NavLink className={styles.left} to={Path.Blogs}>
        <Blog className={styles.navSvg} />
        <span className={`${style.textGlobal} ${styles.link}`}>Blogs</span>
      </NavLink>
      {/* </li> */}
      {/* <li className={`${styles.activeList} ${styles.activeLink}`}> */}
      <NavLink className={styles.left} to={Path.Posts}>
        <Post />
        <span className={`${style.textGlobal} ${styles.link}`}>Posts</span>
      </NavLink>
      {/* </li> */}
      {/* </ul> */}
    </div>
  );
};
