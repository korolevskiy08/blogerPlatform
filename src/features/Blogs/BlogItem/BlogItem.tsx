import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import imageBlog from '../../../common/images/Gull_portrait_ca_usa.jpg';
import style from '../../../layout/global.module.css';

import styles from './blogItem.module.css';

type BlogType = {
  name: string;
  id: string;
  websiteUrl: string;
  description: string;
};

const BlogItem: FC<BlogType> = ({ name, id, websiteUrl, description }) => {
  const navigate = useNavigate();

  const navigateBlogItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Blog/${id}`);
  };

  return (
    <div className={styles.blogBlock}>
      <div className={styles.blogItem}>
        <div className={styles.avatarBlogs}>
          <img src={imageBlog} alt="avatar" />
        </div>
        <div className={styles.descriptionBlock}>
          <h3
            onClick={navigateBlogItem}
            role="presentation"
            className={`${style.textGlobal} ${styles.titleBlog}`}
          >
            {name}
          </h3>
          <p className={`${style.textGlobal} ${styles.webSite}`}>
            Website: <a href={websiteUrl}>{websiteUrl}</a>
          </p>
          <p className={style.textGlobal}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
