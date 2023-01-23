import React, { FC, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Wrapper } from '../../common/Components/Wrapper/Wrapper';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import arrowLeft from '../../common/icons/arrow-left.svg';
import arrowRight from '../../common/icons/arrow_right.svg';
import imageTitle from '../../common/images/blue-ocean-28668-2560x1600.jpg';
import avatar from '../../common/images/Gull_portrait_ca_usa.jpg';
import { Path } from '../../common/Routes';
import style from '../../layout/global.module.css';
import { PostItem } from '../Posts/PostItem/PostItem';

import { getBlog, getPostsBlog } from './blog-actions';
import styles from './blog.module.css';

export const Blog: FC = () => {
  const { blogId } = useParams();
  const blog = useAppSelector(state => state.blog);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(blog.posts);
  useEffect(() => {
    if (blogId) {
      dispatch(getBlog(blogId));
      dispatch(getPostsBlog(blogId));
    }
  }, []);

  const navigateBlogs = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    navigate(Path.Blogs);
  };

  return (
    <Wrapper showNavigation>
      <div className={styles.blogBlock}>
        <div className={styles.containerBlog}>
          <div className={styles.titleBlock}>
            <p className={style.textGlobal} role="presentation" onClick={navigateBlogs}>
              Blogs
            </p>
            <img src={arrowRight} alt="arrowRight" />
            <h3 className={style.textGlobal}>{blog.blog.name}</h3>
          </div>
          <div className={styles.backBlogs} role="presentation" onClick={navigateBlogs}>
            <img src={arrowLeft} alt="arrowLeft" />
            <p className={`textGlobal ${styles.backBlogsText}`}>Back to blogs</p>
          </div>
          <img className={styles.avatarBlog} src={imageTitle} alt="imageTitle" />
          <div className={styles.blog}>
            <div className={styles.avatarBlock}>
              <img src={avatar} alt="avatar" />
            </div>
            <div>
              <h3 className={`${style.textGlobal} ${styles.titleBlog}`}>
                {blog.blog.name}
              </h3>
              <div className={styles.dateBlock}>
                <span className={`textGlobal ${styles.creationDataText}`}>
                  creation date blog:
                </span>
                <span className={`textGlobal ${styles.creationData}`}>
                  {blog.blog.createdAt}
                </span>
              </div>
              <span className={`textGlobal ${styles.websiteText}`}>website: </span>
              <span className="textGlobal">
                <a href={blog.blog.websiteUrl}>{blog.blog.websiteUrl}</a>
              </span>
              <p className={`${style.textGlobal} ${styles.description}`}>
                {blog.blog.description}
              </p>
            </div>
          </div>
          {blog.posts.map(el => {
            return (
              <PostItem
                key={el.id}
                name={el.title}
                content={el.content}
                createdAt={el.createdAt}
                id={el.id}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
