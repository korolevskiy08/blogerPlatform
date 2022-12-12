import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { OptionType, Select } from '../../common/Components/Select/Select';
import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../layout/global.module.css';

import { PostItem } from './PostItem/PostItem';
import { getPosts } from './posts-actions';
import { ItemPostType } from './posts-api';
import { setFilterPosts } from './posts-slice';
import styles from './posts.module.css';

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);

  const [currentPosts, setCurrentPosts] = useState<ItemPostType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const num = 100;

  useEffect(() => {
    if (fetching) {
      dispatch(setFilterPosts({ pageNumber: currentPage }));
      dispatch(getPosts())
        .then((res: any) => {
          setCurrentPosts([...currentPosts, ...res.payload.data.items]);
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
      currentPosts.length < totalCount
    ) {
      setFetching(true);
    }
  };

  const option: OptionType[] = [
    { id: 1, value: 'New blogs first', filterItems: filterAlphabetOrder },
    { id: 2, value: 'Old blog first', filterItems: filterReverseAlphabetOrder },
  ];

  function filterAlphabetOrder(): void {
    dispatch(setFilterPosts({ sortDirection: 'asc' }));
    dispatch(getPosts());
  }

  function filterReverseAlphabetOrder(): void {
    dispatch(setFilterPosts({ sortDirection: 'desc' }));
    dispatch(getPosts());
  }

  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <div className={styles.postsBlock}>
      <TitleComponent title="Posts" />
      <div className={styles.selectBlock}>
        <Select
          setOpenSelect={() => setOpenSelect(!openSelect)}
          setValue={setValue}
          value={value}
          openSelect={openSelect}
          option={option}
        />
      </div>
      <ul className={styles.postContainer}>
        {currentPosts.map(el => {
          return (
            <li key={el.id}>
              <PostItem
                key={el.id}
                id={el.id}
                name={el.title}
                content={el.content}
                createdAt={el.createdAt}
              />
            </li>
          );
        })}
      </ul>
      {posts.status === 'loading' && (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  );
};
