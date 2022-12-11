import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReactComponent as ArrowBottom } from '../../common/icons/arrowBottom.svg';
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
        <FilterBlock searchNameTerm={blogs.params.searchNameTerm} />
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
            <div className={styles.buttonShowMore}>
              Show more
              <ArrowBottom className={styles.arrowBottom} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
