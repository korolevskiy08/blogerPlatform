import React, { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';

import { PostItem } from './PostItem/PostItem';
import { getPosts } from './posts-actions';
import styles from './posts.module.css';

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className={styles.postsBlock}>
      <TitleComponent title="Posts" />
      <div className={styles.selectBlock} />
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
