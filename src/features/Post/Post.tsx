import React, { FC, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Wrapper } from '../../common/Components/Wrapper/Wrapper';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import avatar from '../../common/images/images.jpg';
import imgPost from '../../common/images/pexels-photo-268533.webp';
import { Path } from '../../common/Routes';
import style from '../../layout/global.module.css';

import { AddComments } from './Coments/AddComments/AddComments';
import { Comments } from './Coments/CommentsItem/Comments';
import { getComments, getPost, newComment } from './post-actions';
import styles from './post.module.css';

export const Post: FC = () => {
  const post = useAppSelector(state => state.post.post);
  const comments = useAppSelector(state => state.post.comments);
  const login = useAppSelector(state => state.auth.user);
  const [textComment, setTextComment] = useState('');
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      dispatch(getPost(postId));
      dispatch(getComments(postId));
    }
  }, []);

  const navigatePosts = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(Path.Posts);
  };

  const changeComment = (text: string): void => {
    setTextComment(text);
  };

  const sendComment = (): void => {
    if (postId) {
      dispatch(newComment({ content: textComment, postId }));
      setTextComment('');
    }
  };

  return (
    <Wrapper showNavigation>
      <div className={styles.postBlock}>
        <div className={style.titleBlock}>
          <p
            className={`${style.textGlobal} ${styles.title}`}
            role="presentation"
            onClick={navigatePosts}
          >
            Posts
          </p>
          <img src={arrowRight} alt="arrow right" />
          <p className={style.textGlobal}>{post.title}</p>
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
          <p className={`${style.textGlobal} ${styles.blogName}`}>{post.title}</p>
        </div>
        <p className={`textGlobal ${styles.postName}`}>{post.title}</p>
        <p className={`${style.textGlobal} ${styles.postDate}`}>
          {/* {`${post.createdAt.slice(0, 10)}`} */}
        </p>
        <div className={styles.postImg}>
          <img src={imgPost} alt="post img" />
        </div>
        <p className={`${style.textGlobal} ${styles.textPost}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
          id, modi natus perspiciatis quam saepe voluptas. Aperiam, assumenda, eum?
          Debitis ducimus minus molestias omnis quidem sint ullam veritatis!
        </p>
        <p className={`${style.textGlobal} ${styles.commentTitle}`}>Comments</p>
        {login && (
          <AddComments
            sendComment={sendComment}
            changeComment={changeComment}
            textComment={textComment}
            cancel={() => {}}
          />
        )}
        {comments.map(c => {
          return (
            <Comments
              key={c.id}
              userLogin={c.userLogin}
              createdAt={c.createdAt}
              content={c.content}
              id={c.id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
