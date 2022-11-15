import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import imageTitle from '../../common/icons/Image.svg';
import { Button } from '../../layout/Button/Button';
import style from '../../layout/global.module.css';
import Blog from '../Blogs/Blog/Blog';

import { getBlog } from './blogItem-actions';
import styles from './blogItem.module.css';

export const BlogItem: FC = () => {
  const { blogId } = useParams();
  const blog = useAppSelector(state => state.blog.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (blogId) dispatch(getBlog(blogId));
  }, []);

  return (
    <div className={styles.blogBlock}>
      <div className={styles.containerBlog}>
        <div className={style.titleBlock}>
          <h2 className={style.titleBlog}>Blogs</h2>
          <img src={arrowRight} alt="arrowRight" />
          <h3 className={style.titleName}>{blog.name}</h3>
        </div>
        <div className={styles.backBlogs}>
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
