import React, { FC } from 'react';

import { TitleComponent } from '../../layout/TitleComponent/TitleComponent';
import Select from '../Blogs/Settings/Select/Select';

import { Post } from './Post/Post';
import styles from './posts.module.css';

export const Posts: FC = () => {
  return (
    <div className={styles.postsBlock}>
      <TitleComponent title="Posts" />
      <div className={styles.selectBlock}>
        <Select />
      </div>
      <Post />
    </div>
  );
};
