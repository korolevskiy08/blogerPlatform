import React, { FC, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../../../common/Components/Button/Button';
import { DeleteModal } from '../../../../common/Components/Modals/DeleteModal/DeleteModal';
import { Settings } from '../../../../common/Components/Settings/Settings';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReactComponent as Dislike } from '../../../../common/icons/dislike.svg';
import { ReactComponent as Like } from '../../../../common/icons/like.svg';
import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import { userData } from '../../../auth/auth-actions';
import { deleteComment, editComment, getComments, likeStatus } from '../../post-actions';
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
};

export const Comments: FC<CommentsType> = ({
  userLogin,
  content,
  createdAt,
  id,
  currentLike,
  currentDislike,
  likeInfo,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentComment, setCurrentComment] = useState(content);
  const currentUser = useAppSelector(state => state.auth.user?.login);
  const { postId } = useParams();
  const dispatch = useAppDispatch();

  const removeComment = (): void => {
    dispatch(deleteComment(id));
  };

  const onChangeTextComment = (text: string): void => {
    setCurrentComment(text);
  };

  const editCommentContent = (): void => {
    if (postId) {
      dispatch(editComment({ commentId: id, content: currentComment, postId }));
      setEditMode(false);
    }
  };

  const like = (status: LikeStatusType): void => {
    dispatch(likeStatus({ commentId: id, likeStatus: status }));
    if (postId) {
      dispatch(getComments(postId));
      dispatch(userData());
    }
  };

  const disLike = (status: LikeStatusType): void => {
    dispatch(likeStatus({ commentId: id, likeStatus: status }));
    if (postId) {
      dispatch(getComments(postId));
      dispatch(userData());
    }
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
        {currentUser === userLogin ? (
          <Settings
            navigateEditMode={() => setEditMode(true)}
            openDeleteModal={() => setOpenDeleteModal(true)}
          />
        ) : null}
      </div>
      {editMode ? (
        <div className={styles.editMode}>
          <AddComments
            textComment={currentComment}
            sendComment={editCommentContent}
            changeComment={onChangeTextComment}
            cancel={() => setEditMode(false)}
          />
        </div>
      ) : (
        <p className={styles.textComment}>{content}</p>
      )}
      <div className={styles.buttons}>
        <Button
          disabled={likeInfo === 'Like'}
          className={styles.button}
          onclick={() => like('Like')}
        >
          <Like className={likeInfo === 'Like' ? styles.like : ''} />
        </Button>
        <span className={styles.likeInfoText}>{currentLike}</span>

        <Button
          disabled={likeInfo === 'Dislike'}
          className={styles.button}
          onclick={() => disLike('Dislike')}
        >
          <Dislike className={likeInfo === 'Dislike' ? styles.like : ''} />
        </Button>
        <span className={styles.likeInfoText}>{currentDislike}</span>
      </div>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        deleteItem={removeComment}
        textModals="Are you sure you want to delete comment?"
        title="Delete Comment"
      />
    </div>
  );
};
