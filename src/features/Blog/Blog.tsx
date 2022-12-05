import React, { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../common/Components/Button/Button';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import imageTitle from '../../common/images/blue-ocean-28668-2560x1600.jpg';
import avatar from '../../common/images/Gull_portrait_ca_usa.jpg';
import { Path } from '../../common/Routes';
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
          <p className={style.textGlobal} role="presentation" onClick={navigateBlogs}>
            Blogs
          </p>
          <img src={arrowRight} alt="arrowRight" />
          <h3 className={style.textGlobal}>{blog.name}</h3>
        </div>
        <div className={styles.backBlogs} role="presentation" onClick={navigateBlogs}>
          <img src={arrowLeft} alt="arrowLeft" />
          <p className={`textGlobal ${styles.backBlogsText}`}>Back to blogs</p>
        </div>
        <div className={styles.titleImage}>
          <img src={imageTitle} alt="imageTitle" />
        </div>
        <div className={styles.blog}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt="avatar" />
          </div>
          <div>
            <h3>{blog.name}</h3>
            <div className={styles.dateBlock}>
              <span className={`textGlobal ${styles.creationDataText}`}>
                creation date blog:
              </span>
              <span className={`textGlobal ${styles.creationData}`}>
                {blog.createdAt}
              </span>
            </div>
            <span className={`textGlobal ${styles.websiteText}`}>website: </span>
            <span className="textGlobal">
              <a href={blog.websiteUrl}>{blog.websiteUrl}</a>
            </span>
            <p className="textGlobal">{blog.description}</p>
          </div>
        </div>
        <div className={style.buttonBlock}>
          <Button title="Show more" onclick={() => {}} styleButton={styles.showButton} />
        </div>
      </div>
    </div>
  );
};
