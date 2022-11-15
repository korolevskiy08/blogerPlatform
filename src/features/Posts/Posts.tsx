import React, { FC, useEffect } from 'react';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';
import Select from '../Blogs/Settings/Select/Select';

import { Post } from './Post/Post';
import { getPosts } from './posts-actions';
import styles from './posts.module.css';

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);

  console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className={styles.postsBlock}>
      <TitleComponent title="Posts" />
      <div className={styles.selectBlock}>
        <Select />
      </div>
      {posts.posts.map(el => {
        return (
          <Post
            key={el.id}
            blogName={el.blogName}
            content={el.content}
            createdAt={el.createdAt}
          />
        );
      })}
    </div>
  );
};
