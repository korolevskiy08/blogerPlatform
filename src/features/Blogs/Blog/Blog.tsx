import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import imageBlog from '../../../common/images/Gull_portrait_ca_usa.jpg';

import styles from './Blog.module.css';

type BlogType = {
  name: string;
  id: string;
  description: string;
  date?: string;
};

const Blog: FC<BlogType> = ({ name, id, description, date }) => {
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
          <h3 onClick={navigateBlogItem} role="presentation" className={styles.titleBlog}>
            {name}
          </h3>
          {date ? (
            <div>
              <p>Blog creation date: {date?.slice(0, 10)}</p>
            </div>
          ) : (
            ''
          )}
          <div className={styles.youTubeBlock}>
            <p className={styles.youTube}>YouTube:</p> {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
