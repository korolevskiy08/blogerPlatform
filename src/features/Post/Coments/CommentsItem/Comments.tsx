import React, { FC, useState } from 'react';

import { DeleteModal } from '../../../../common/Components/Modals/DeleteModal/DeleteModal';
import { Settings } from '../../../../common/Components/Settings/Settings';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import avatar from '../../../../common/images/Gull_portrait_ca_usa.jpg';
import style from '../../../../layout/global.module.css';
import { deleteComment } from '../../post-actions';

import styles from './comments.module.css';

type CommentsType = {
  userLogin: string;
  createdAt: string;
  content: string;
  id: string;
};

export const Comments: FC<CommentsType> = ({ userLogin, content, createdAt, id }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const currentUser = useAppSelector(state => state.auth.user?.login);
  const dispatch = useAppDispatch();

  const removeComment = (): void => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerComment}>
        <div className={styles.profileInfo}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <p className={`${style.textGlobal} ${styles.nameProfile}`}>{userLogin}</p>
          <p className={`${style.textGlobal} ${styles.dateComment}`}>{createdAt}</p>
        </div>
        {currentUser === userLogin ? (
          <Settings
            navigateEditMode={() => {}}
            openDeleteModal={() => setOpenDeleteModal(true)}
          />
        ) : null}
      </div>
      <p className={`${style.textGlobal} ${styles.textComment}`}>{content}</p>
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
