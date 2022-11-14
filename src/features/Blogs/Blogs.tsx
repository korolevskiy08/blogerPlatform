import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';

import Blog from './Blog/Blog';
import { getBlogs } from './blogs-actions';
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
        {blogs.status === 'loading' ? (
          <div className={styles.loader}>
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <div>
            {blogs.blogs.map(el => {
              return (
                <Blog
                  name={el.name}
                  key={el.id}
                  id={el.id}
                  description={el.youtubeUrl}
                  buttonComponent={<Button onclick={() => {}} title="Show more" />}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
