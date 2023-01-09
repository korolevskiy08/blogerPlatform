import React, { ChangeEvent, FC, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../../../common/Components/Button/Button';
import { DeleteModal } from '../../../../common/Components/Modals/DeleteModal/DeleteModal';
import { Settings } from '../../../../common/Components/Settings/Settings';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import style from '../../../../layout/global.module.css';
import { deleteComment, editComment } from '../../post-actions';

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

  const onChangeTextComment = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentComment(e.currentTarget.value);
  };

  const editCommentContent = (): void => {
    if (postId) {
      dispatch(editComment({ commentId: id, content: currentComment, postId }));
      setEditMode(false);
    }
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
        <div>
          <input
            type="text"
            value={currentComment}
            onChange={onChangeTextComment}
            className={styles.input}
          />
          <div className={styles.buttonGroup}>
            <Button styleButton={styles.cancelButton} onclick={() => setEditMode(false)}>
              Cancel
            </Button>
            <Button
              disabled={currentComment.length === 0}
              styleButton={
                currentComment.length === 0
                  ? `${style.button} ${styles.disabledButton}`
                  : `${style.button} ${styles.sendButton}`
              }
              onclick={editCommentContent}
            >
              Edit comment
            </Button>
          </div>
        </div>
      ) : (
        <p className={`${style.textGlobal} ${styles.textComment}`}>{content}</p>
      )}
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
