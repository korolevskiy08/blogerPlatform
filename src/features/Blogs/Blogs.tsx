import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { Wrapper } from '../../common/Components/Wrapper/Wrapper';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../styles/global.module.css';

import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from './blogs-actions';
import styles from './Blogs.module.css';
import { FilterBlock } from './FilterBlock/FilterBlock';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);

  const num = 100;

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [blogs.blogs.length, dispatch]);

  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      num
    ) {
      dispatch(getBlogs());
    }
  };

  return (
    <Wrapper showNavigation>
      <div className={styles.blogsBlock}>
        <div className={styles.container}>
          <TitleComponent title="Blogs" />
          <FilterBlock searchNameTerm={blogs.params.searchNameTerm} />
          <ul>
            {blogs.blogs.map(el => {
              return (
                <li key={el.id}>
                  <BlogItem
                    name={el.name}
                    key={el.id}
                    id={el.id}
                    websiteUrl={el.websiteUrl}
                    description={el.description}
                  />
                </li>
              );
            })}
            {blogs.status === 'loading' && (
              <div className={style.loader}>
                <CircularProgress color="inherit" />
              </div>
            )}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
