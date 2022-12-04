import React, { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { DeleteModal } from '../../../common/Components/Modals/DeleteModal/DeleteModal';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import imageBlog from '../../../common/images/Gull_portrait_ca_usa.jpg';
import { Path } from '../../../common/Routes';
import { deleteBlog } from '../blogs-actions';
import { Settings } from '../Settings/Settings';

import styles from './blogItem.module.css';

type BlogType = {
  name: string;
  id: string;
  websiteUrl: string;
  createdAt: string;
  description: string;
};

const BlogItem: FC<BlogType> = ({ name, id, websiteUrl, createdAt, description }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateBlogItem = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(`/Blog/${id}`);
  };

  const deleteItemHandler = (): void => {
    dispatch(deleteBlog(id));
  };

  const navigateEditBlog = (): void => {
    navigate(Path.EditBlog, {
      state: {
        id,
        name,
        websiteUrl,
        description,
      },
    });
  };

  return (
    <div className={styles.blogBlock}>
      <div className={styles.blogItem}>
        <div className={styles.avatarBlogs}>
          <img src={imageBlog} alt="avatar" />
        </div>
        <div className={styles.descriptionBlock}>
          <h3
            onClick={navigateBlogItem}
            role="presentation"
            className={`titleName ${styles.titleBlog}`}
          >
            {name}
          </h3>
          <div>
            <p>Blog creation date: {createdAt?.slice(0, 10)}</p>
          </div>
          <p className={`titleName ${styles.youTube}`}>
            Website: <a href={websiteUrl}>{websiteUrl}</a>
          </p>
          <p className="titleName">{description}</p>
        </div>
        <Settings
          navigateEditMode={navigateEditBlog}
          openDeleteModal={() => setOpenDeleteModal(true)}
        />
      </div>
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        deleteItem={deleteItemHandler}
        textModals="Are you sure you want to delete this blog?"
        title="Delete a blog"
      />
    </div>
  );
};

export default BlogItem;
