import React, { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import imageTitle from '../../common/images/blue-ocean-28668-2560x1600.jpg';
import { Path } from '../../common/Routes';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import Blog from '../Blogs/Blog/Blog';

import { getBlog } from './blogItem-actions';
import styles from './blogItem.module.css';

export const BlogItem: FC = () => {
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
          <h2 className={style.titleBlog} role="presentation" onClick={navigateBlogs}>
            Blogs
          </h2>
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
      <div className={style.container}>
        <Blog
          name={blog.name}
          id={blog.id}
          description={blog.youtubeUrl}
          date={blog.createdAt}
        />
        <div className={style.buttonBlock}>
          <Button title="Show more" onclick={() => {}} styleButton={styles.showButton} />
        </div>
      </div>
    </div>
  );
};
