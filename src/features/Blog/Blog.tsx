import React, { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import imageTitle from '../../common/images/blue-ocean-28668-2560x1600.jpg';
import avatar from '../../common/images/Gull_portrait_ca_usa.jpg';
import { Path } from '../../common/Routes';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';

import { getBlog } from './blog-actions';
import styles from './blog.module.css';

export const Blog: FC = () => {
  const { blogId } = useParams();
  const blog = useAppSelector(state => state.blog.blog);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (blogId) dispatch(getBlog(blogId));
  }, []);

  const navigateBlogs = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(Path.Blogs);
  };

  return (
    <div className={styles.blogBlock}>
      <div className={styles.containerBlog}>
        <div className={style.titleBlock}>
          <p className={style.titleBlog} role="presentation" onClick={navigateBlogs}>
            Blogs
          </p>
          <img src={arrowRight} alt="arrowRight" />
          <h3 className={style.titleName}>{blog.name}</h3>
        </div>
        <div className={styles.backBlogs} role="presentation" onClick={navigateBlogs}>
          <img src={arrowLeft} alt="arrowLeft" />
          <p className={styles.backBlogsText}>Back to blogs</p>
        </div>
      </div>
      <div className={styles.titleImage}>
        <img src={imageTitle} alt="imageTitle" />
      </div>
      <div className={styles.blogItemBlock}>
        <div className={styles.avatarBlock}>
          <img src={avatar} alt="avatar" />
        </div>
        <div>
          <p>{blog.name}</p>
          <span> creation date blog: </span>
          <span>{blog.createdAt}</span>
          <p>Website</p> {blog.websiteUrl}
          <p>{blog.description}</p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.buttonBlock}>
          <Button title="Show more" onclick={() => {}} styleButton={styles.showButton} />
        </div>
      </div>
    </div>
  );
};
