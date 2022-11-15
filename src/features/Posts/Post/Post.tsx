import React, { FC } from 'react';

import avatar from '../../../common/images/images.jpg';
import imagePost from '../../../common/images/pexels-photo-268533.webp';

import styles from './post.module.css';

type PostType = {
  blogName: string;
  content: string;
  createdAt: string;
};

export const Post: FC<PostType> = ({ blogName, content, createdAt }) => {
  return (
    <div className={styles.postBlock}>
      <div className={styles.imgPost}>
        <img src={imagePost} alt="avatar" />
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.avatarBlock}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.description}>
          <h3 className={styles.titlePost}>{blogName}</h3>
          <p className={styles.descriptionText}>{content}</p>
          <p className={styles.date}>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};
