import React, { FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { Button } from '../../common/Components/Button/Button';
import { OptionType, Select } from '../../common/Components/Select/Select';
import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import style from '../../layout/global.module.css';

import { PostItem } from './PostItem/PostItem';
import { getPosts } from './posts-actions';
import styles from './posts.module.css';

export const Posts: FC = () => {
  const filterAlphabetOrder = (): void => {
    console.log('From A to Z');
  };

  const filterReverseAlphabetOrder = (): void => {
    console.log('From Z to A');
  };

  const option: OptionType[] = [
    { id: 1, value: 'New blogs first', filterItems: filterAlphabetOrder },
    { id: 2, value: 'Old blog first', filterItems: filterReverseAlphabetOrder },
  ];

  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

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
      {posts.status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <ul className={styles.postContainer}>
          {posts.posts.map(el => {
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
      )}
      <div className={style.buttonBlock}>
        <Button
          title="Show more"
          onclick={() => {}}
          styleButton={styles.buttonShowMore}
        />
      </div>
    </div>
  );
};
