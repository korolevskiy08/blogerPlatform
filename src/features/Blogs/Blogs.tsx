import React, { FC } from 'react';

import style from '../../layout/global.module.css';

import styles from './Blogs.module.css';
import { Settings } from './Settings/Settings';

export const Blogs: FC = () => {
  return (
    <div className={styles.blogsBlock}>
      <div className={style.container}>
        <div className={styles.titleBlock}>
          <h2 className={style.title}>Blogs</h2>
        </div>
        <Settings />

        <div className={styles.blogBlock}>
          <div className={styles.avatarBlogs}>
            <img alt="" />
          </div>
          <div className={styles.descriptionBlock}>
            <div>
              <h3 className={styles.titleBlog}>The best blog in our village</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in quas
                qui sint. Accusantium cum error hic, magnam nisi numquam officia quaerat
                quam quidem tempora! Cumque eum modi voluptas voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
