import React, { FC, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import imageSvg from '../../../common/icons/Image.svg';

import styles from './Blog.module.css';

type BlogType = {
  name: string;
  id: string;
  description: string;
  date?: string;
  buttonComponent?: ReactNode;
};

const Blog: FC<BlogType> = ({ name, id, description, date, buttonComponent }) => {
  const navigate = useNavigate();

  const navigateBlogItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Blog/${id}`);
  };

  return (
    <div className={styles.blogBlock}>
      <div className={styles.blogItem}>
        <div className={styles.avatarBlogs}>
          <div>
            <img src={imageSvg} alt="avatar" className={styles.avatar} />
          </div>
        </div>
        <div className={styles.descriptionBlock}>
          <div className={styles.titleBlock}>
            <h3
              onClick={navigateBlogItem}
              role="presentation"
              className={styles.titleBlog}
            >
              {name}
            </h3>
          </div>
          <div>
            {date ? (
              <div>
                <p>Blog creation date: {date?.slice(0, 10)}</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className={styles.youTubeBlock}>
            <p className={styles.youTube}>YouTube:</p> {description}
          </div>
        </div>
      </div>
      <div className={styles.showButton}>{buttonComponent}</div>
    </div>
  );
};

export default Blog;
