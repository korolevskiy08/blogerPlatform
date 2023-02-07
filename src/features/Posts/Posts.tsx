import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { OptionType, Select } from '../../common/Components/Select/Select';
import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { Wrapper } from '../../common/Components/Wrapper/Wrapper';
import { useActions } from '../../common/hooks/useActions';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../styles/global.module.css';

import { PostItem } from './PostItem/PostItem';
import styles from './posts.module.css';

import { postsActions } from './index';

export const Posts: FC = () => {
  const { getPosts } = useActions(postsActions);
  const posts = useAppSelector(state => state.posts);

  const num = 100;

  useEffect(() => {
    getPosts({});
  }, [getPosts]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [posts.posts.length]);

  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      num
    ) {
      getPosts({});
    }
  };

  const option: OptionType[] = [
    {
      id: 1,
      value: 'New blogs first',
      filterItems: () => getPosts({ sortDirection: 'asc', pageNumber: 0 }),
    },
    {
      id: 2,
      value: 'Old blog first',
      filterItems: () => getPosts({ sortDirection: 'desc', pageNumber: 0 }),
    },
  ];

  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <Wrapper showNavigation>
      <div className={styles.postsBlock}>
        <div className={styles.containerPosts}>
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
            {posts.posts.map(el => {
              return (
                <li key={el.id}>
                  <PostItem
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
      </div>
    </Wrapper>
  );
};
