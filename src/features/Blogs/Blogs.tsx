import React, { FC, useEffect } from 'react';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../layout/global.module.css';

import { getBlogs } from './blog-reducer';
import Blog from './Blog/Blog';
import styles from './Blogs.module.css';
import { Settings } from './Settings/Settings';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <div className={styles.blogsBlock}>
      <div className={style.container}>
        <div className={styles.titleBlogs}>
          <h2 className={style.title}>Blogs</h2>
        </div>
        <Settings />
        {blogs.blogs.map(el => {
          return <Blog name={el.name} key={el.id} />;
        })}
      </div>
    </div>
  );
};
