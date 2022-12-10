import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { Button } from '../../common/Components/Button/Button';
import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../layout/global.module.css';

import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from './blogs-actions';
import styles from './blogs.module.css';
import { FilterBlock } from './FilterBlock/FilterBlock';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <div className={styles.blogsBlock}>
      <div className={styles.container}>
        <TitleComponent title="Blogs" />
        <FilterBlock />
      </div>
      {blogs.status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          {blogs.blogs.map(el => {
            return (
              <BlogItem
                name={el.name}
                key={el.id}
                id={el.id}
                websiteUrl={el.websiteUrl}
                description={el.description}
              />
            );
          })}
          <div className={style.buttonBlock}>
            <Button
              title="Show more"
              onclick={() => {}}
              styleButton={styles.buttonShowMore}
            />
          </div>
        </div>
      )}
    </div>
  );
};
