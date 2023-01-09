import React, { FC } from 'react';

import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import style from '../../../../layout/global.module.css';

import styles from './comments.module.css';

type CommentsType = {
  userLogin: string;
  createdAt: string;
  content: string;
};

export const Comments: FC<CommentsType> = ({ userLogin, content, createdAt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <div className={styles.avatarBlock}>
          <img src={avatar} alt="avatar" />
        </div>
        <p className={`${style.textGlobal} ${styles.nameProfile}`}>{userLogin}</p>
        <p className={`${style.textGlobal} ${styles.dateComment}`}>{createdAt}</p>
      </div>
      <p className={`${style.textGlobal} ${styles.textComment}`}>{content}</p>
    </div>
  );
};
