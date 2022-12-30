import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { Wrapper } from '../../common/Components/Wrapper/Wrapper';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../layout/global.module.css';

import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from './blogs-actions';
import { BlogType } from './blogs-api';
import { setFilterBlogs } from './blogs-slice';
import styles from './blogs.module.css';
import { FilterBlock } from './FilterBlock/FilterBlock';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);

  const [currentBlogs, setCurrentBlogs] = useState<BlogType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const num = 100;

  useEffect(() => {
    if (fetching) {
      dispatch(setFilterBlogs({ pageNumber: currentPage }));
      dispatch(getBlogs())
        .then((res: any) => {
          setCurrentBlogs([...currentBlogs, ...res.payload.data.items]);
          setCurrentPage(prevState => prevState + 1);
          setTotalCount(res.payload.data.totalCount);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [totalCount]);

  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        num &&
      currentBlogs.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <Wrapper>
      <div className={styles.blogsBlock}>
        <div className={styles.container}>
          <TitleComponent title="Blogs" />
          <FilterBlock searchNameTerm={blogs.params.searchNameTerm} />
          <div>
            {currentBlogs.map(el => {
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
            {blogs.status === 'loading' && (
              <div className={style.loader}>
                <CircularProgress color="inherit" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
