import React, { FC, useState } from 'react';

import { Button } from '../../../../common/Components/Button/Button';
import { ReactComponent as Dislike } from '../../../../common/icons/dislike.svg';
import { ReactComponent as Like } from '../../../../common/icons/like.svg';
import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import { LikeStatusType } from '../../postType';
import { AddComments } from '../AddComments/AddComments';

import styles from './comments.module.css';

type CommentsType = {
  userLogin: string;
  createdAt: string;
  content: string;
  id: string;
  currentLike: number;
  currentDislike: number;
  likeInfo: string;
  editCommentContent: (id: string, commentText: string) => void;
  editMode: boolean;
  closedEditComment: () => void;
  like: (status: LikeStatusType, id: string) => void;
  dislike: (status: LikeStatusType, id: string) => void;
};

export const CommentsItem: FC<CommentsType> = ({
  userLogin,
  content,
  createdAt,
  id,
  currentLike,
  currentDislike,
  likeInfo,
  editCommentContent,
  editMode,
  closedEditComment,
  like,
  dislike,
}) => {
  const [commentText, setCurrentComment] = useState(content);

  const onChangeTextComment = (text: string): void => {
    setCurrentComment(text);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerComment}>
        <div className={styles.profileInfo}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <p className={styles.nameProfile}>{userLogin}</p>
          <p className={styles.dateComment}>
            {/* {createdAt.slice(0, 10)} */}
            {createdAt}
          </p>
        </div>
      </div>
      {editMode ? (
        <div className={styles.editMode}>
          <AddComments
            textComment={commentText}
            sendComment={() => editCommentContent(id, commentText)}
            changeComment={onChangeTextComment}
            cancel={closedEditComment}
          />
        </div>
      ) : (
        <p className={styles.textComment}>{content}</p>
      )}
      <div className={styles.buttons}>
        <Button
          disabled={likeInfo === 'Like'}
          className={styles.button}
          onclick={() => like('Like', id)}
        >
          <Like className={likeInfo === 'Like' ? styles.like : ''} />
        </Button>
        <span className={styles.likeInfoText}>{currentLike}</span>

        <Button
          disabled={likeInfo === 'Dislike'}
          className={styles.button}
          onclick={() => dislike('Dislike', id)}
        >
          <Dislike className={likeInfo === 'Dislike' ? styles.like : ''} />
        </Button>
        <span className={styles.likeInfoText}>{currentDislike}</span>
      </div>
    </div>
  );
};
