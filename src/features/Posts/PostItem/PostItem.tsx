import React, { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CreatePostModal } from '../../../common/Components/Modals/CreatePostModal/CreatePostModal';
import { DeleteModal } from '../../../common/Components/Modals/DeleteModal/DeleteModal';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import avatar from '../../../common/images/images.jpg';
import imagePost from '../../../common/images/pexels-photo-268533.webp';
import { Settings } from '../../Blogs/Settings/Settings';
import { deletePost, editPost } from '../posts-actions';

import styles from './postItem.module.css';

type PostType = {
  name: string;
  content: string;
  createdAt: string;
  id: string;
};

export const PostItem: FC<PostType> = ({ name, content, createdAt, id }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditPostModal, setEditPostModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigatePostItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Post/${id}`);
  };

  const removePost = (): void => {
    dispatch(deletePost(id));
  };

  const editPostHandler = (title: string, blogId: string, content: string): void => {
    dispatch(
      editPost({
        data: {
          title,
          shortDescription: 'description',
          content,
          blogId,
        },
        id,
      }),
    );
  };

  return (
    <div className={styles.postBlock}>
      <div className={styles.imgPost}>
        <img src={imagePost} alt="avatar" />
      </div>
      <div>
        <div className={styles.descriptionBlock}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <div
            className={styles.description}
            role="presentation"
            onClick={navigatePostItem}
          >
            <h3 className={styles.titlePost}>{name}</h3>
            <p className={styles.descriptionText}>{content}</p>
            <p className={styles.date}>{createdAt}</p>
          </div>
          <Settings
            openDeleteModal={() => setOpenDeleteModal(true)}
            navigateEditMode={() => setEditPostModal(true)}
          />
        </div>
      </div>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        deleteItem={removePost}
        textModals="Are you sure you want to delete this post?"
        title="Delete a post"
      />
      <CreatePostModal
        editMode
        name={name}
        content={content}
        isOpen={openEditPostModal}
        onClose={() => setEditPostModal(false)}
        createItem={editPostHandler}
        titleModal="Edit post"
      />
    </div>
  );
};
