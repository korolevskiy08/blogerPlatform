import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReactComponent as ArrowBottom } from '../../common/icons/arrowBottom.svg';
import style from '../../layout/global.module.css';

import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from './blogs-actions';
import { setFilterBlogs } from './blogs-slice';
import styles from './blogs.module.css';
import { FilterBlock } from './FilterBlock/FilterBlock';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);
  const [fetching, setFetching] = useState(false);
  const a = 100;

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(setFilterBlogs({ pageNumber: blogs.params.pageNumber + 1 }));
    setFetching(false);
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', showMoreHandler);

    return () => {
      document.removeEventListener('scroll', showMoreHandler);
    };
  }, []);

  const showMoreHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      a
    ) {
      setFetching(true);
    }
  };

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
