import React, { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import avatar from '../../common/images/images.jpg';
import imgPost from '../../common/images/pexels-photo-268533.webp';
import { Path } from '../../common/Routes';
import style from '../../layout/global.module.css';

import { getPost } from './post-actions';
import styles from './post.module.css';

export const Post: FC = () => {
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const post = useAppSelector(state => state.post.post);
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) dispatch(getPost(postId));
  }, []);

  const navigatePosts = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(Path.Posts);
  };

  return (
    <div className={styles.postBlock}>
      <div className={style.titleBlock}>
        <p className={style.titleBlog} role="presentation" onClick={navigatePosts}>
          Posts
        </p>
        <img src={arrowRight} alt="arrow right" />
        <p className={style.titleName}>{post.blogName}</p>
      </div>
      <div className={styles.backPostsBlock} role="presentation" onClick={navigatePosts}>
        <img src={arrowLeft} alt="arrow left" />
        <p>Back to posts</p>
      </div>
      <div className={styles.avatarBlock}>
        <img src={avatar} alt="avatar" />
        <p className={`${style.titleName} ${styles.blogName}`}>{post.blogName}</p>
      </div>
      <p className={`titleName ${styles.postName}`}>{post.blogName}</p>
      <p className={`${style.titleName} ${styles.postDate}`}>
        {/* {`${post.createdAt.slice(0, 10)}`} */}
      </p>
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
