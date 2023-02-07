import React, { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Wrapper } from '../../common/Components/Wrapper/Wrapper';
import { useActions } from '../../common/hooks/useActions';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import avatar from '../../common/images/images.jpg';
import imgPost from '../../common/images/pexels-photo-268533.webp';
import { Path } from '../../common/Routes';

import { Comments } from './Coments/Comments';
import styles from './post.module.css';

import { postActions } from './index';

export const Post: FC = () => {
  const post = useAppSelector(state => state.post.post);
  const { getPost } = useActions(postActions);

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      getPost(postId);
    }
  }, [getPost, postId]);

  const navigatePosts = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(Path.Posts);
  };

  if (!postId) return null;

  return (
    <Wrapper showNavigation>
      <div className={styles.postBlock}>
        <div className="titleBlock">
          <p className={styles.title} role="presentation" onClick={navigatePosts}>
            Posts
          </p>
          <img src={arrowRight} alt="arrow right" />
          <p>{post.title}</p>
        </div>
        <div
          className={styles.backPostsBlock}
          role="presentation"
          onClick={navigatePosts}
        >
          <img src={arrowLeft} alt="arrow left" />
          <p>Back to posts</p>
        </div>
        <div className={styles.avatarBlock}>
          <img src={avatar} alt="avatar" />
          <p className={styles.blogName}>{post.title}</p>
        </div>
        <p className={styles.postName}>{post.title}</p>
        <p className={styles.postDate}>{/* {`${post.createdAt.slice(0, 10)}`} */}</p>
        <div className={styles.postImg}>
          <img src={imgPost} alt="post img" />
        </div>
        <p className={styles.textPost}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
          id, modi natus perspiciatis quam saepe voluptas. Aperiam, assumenda, eum?
          Debitis ducimus minus molestias omnis quidem sint ullam veritatis!
        </p>
        <p className={styles.commentTitle}>Comments</p>
        <Comments postId={postId} />
      </div>
    </Wrapper>
  );
};
