import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import imageBlog from '../../../common/images/Gull_portrait_ca_usa.jpg';

import styles from './blogItem.module.css';

type BlogType = {
  name: string;
  id: string;
  websiteUrl: string;
  createdAt: string;
  description: string;
};

const BlogItem: FC<BlogType> = ({ name, id, websiteUrl, createdAt, description }) => {
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
            className={`titleName ${styles.titleBlog}`}
          >
            {name}
          </h3>
          <div>
            <p>Blog creation date: {createdAt?.slice(0, 10)}</p>
          </div>
          <p className={`titleName ${styles.youTube}`}>
            Website: <a href={websiteUrl}>{websiteUrl}</a>
          </p>
          <p className="titleName">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
