import React, { FC } from 'react';

import imageSvg from '../../../common/icons/Image.svg';

import styles from './Blog.module.css';

type BlogType = {
  name: string;
};

const Blog: FC<BlogType> = ({ name }) => {
  return (
    <div className={styles.blogBlock}>
      <div className={styles.avatarBlogs}>
        <div>
          <img src={imageSvg} alt="avatar" className={styles.avatar} />
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.titleBlock}>
          <h3 className={styles.titleBlog}>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
