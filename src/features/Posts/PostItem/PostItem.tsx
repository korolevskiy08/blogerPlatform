import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import avatar from '../../../common/images/images.jpg';
import imagePost from '../../../common/images/pexels-photo-268533.webp';
import style from '../../../layout/global.module.css';

import styles from './postItem.module.css';

type PostType = {
  name: string;
  content: string;
  createdAt: string;
  id: string;
};

export const PostItem: FC<PostType> = ({ name, content, createdAt, id }) => {
  const navigate = useNavigate();

  const navigatePostItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Post/${id}`);
  };

  return (
    <div className={styles.postBlock}>
      <div className={styles.imgPost}>
        <img src={imagePost} alt="avatar" />
      </div>
      <div>
        <div className={styles.descriptionBlock}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <div
            className={styles.description}
            role="presentation"
            onClick={navigatePostItem}
          >
            <h3 className={`${style.textGlobal} ${styles.titlePost}`}>{name}</h3>
            <p className={`${style.textGlobal} ${styles.descriptionText}`}>{content}</p>
            <p className={`${style.textGlobal} ${styles.date}`}>
              {createdAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
