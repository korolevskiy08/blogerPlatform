import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import avatar from '../../common/images/images.jpg';
import imgPost from '../../common/images/pexels-photo-268533.webp';
import style from '../../layout/global.module.css';

import { getPost } from './postItem-actions';
import styles from './postItem.module.css';

export const PostItem: FC = () => {
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const post = useAppSelector(state => state.post.post);

  useEffect(() => {
    if (postId) dispatch(getPost(postId));
  }, []);

  return (
    <div className={styles.postBlock}>
      <div className={style.titleBlock}>
        <h3 className={style.titleBlog}>Post</h3>
        <img src={arrowRight} alt="arrow right" />
        <p className={style.titleName}>{post.blogName}</p>
      </div>
      <div className={styles.backPostsBlock}>
        <img src={arrowLeft} alt="arrow left" />
        <p>Back to posts</p>
      </div>
      <div className={styles.avatarBlock}>
        <img src={avatar} alt="avatar" />
        <h3 className={`${style.titleName} ${styles.blogName}`}>{post.blogName}</h3>
      </div>
      <h3 className={`${style.titleName} ${styles.postName}`}>{post.blogName}</h3>
      <h5 className={`${style.titleName} ${styles.postDate}`}>
        {/* {`${post.createdAt.slice(0, 10)}`} */}
      </h5>
      <div className={styles.postImg}>
        <img src={imgPost} alt="post img" />
      </div>
      <p className={`${style.titleName} ${styles.textPost}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
        id, modi natus perspiciatis quam saepe voluptas. Aperiam, assumenda, eum? Debitis
        ducimus minus molestias omnis quidem sint ullam veritatis!
      </p>
    </div>
  );
};
