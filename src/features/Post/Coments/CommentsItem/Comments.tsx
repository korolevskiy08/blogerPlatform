import React, { FC, useState } from 'react';

import { useParams } from 'react-router-dom';

import { DeleteModal } from '../../../../common/Components/Modals/DeleteModal/DeleteModal';
import { Settings } from '../../../../common/Components/Settings/Settings';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReactComponent as Dislike } from '../../../../common/icons/dislike.svg';
import { ReactComponent as Like } from '../../../../common/icons/like.svg';
import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import style from '../../../../styles/global.module.css';
import { deleteComment, editComment, likeStatus } from '../../post-actions';
import { AddComments } from '../AddComments/AddComments';

import styles from './comments.module.css';

type CommentsType = {
  userLogin: string;
  createdAt: string;
  content: string;
  id: string;
};

export const Comments: FC<CommentsType> = ({ userLogin, content, createdAt, id }) => {
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

  const like = (): void => {
    dispatch(likeStatus({ commentId: id, likeStatus: 'Like' }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerComment}>
        <div className={styles.profileInfo}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <p className={`${style.textGlobal} ${styles.nameProfile}`}>{userLogin}</p>
          <p className={`${style.textGlobal} ${styles.dateComment}`}>
            {createdAt.slice(0, 10)}
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
        <p className={`${style.textGlobal} ${styles.textComment}`}>{content}</p>
      )}
      <div className={styles.buttons}>
        <Like onClick={like} className={styles.like} />
        <Dislike className={styles.dislike} />
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
