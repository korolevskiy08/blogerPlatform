import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { Button } from '../../common/Components/Button/Button';
import { OptionType, Select } from '../../common/Components/Select/Select';
import { TitleComponent } from '../../common/Components/TitleComponent/TitleComponent';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { useDebounce } from '../../common/hooks/useDebounce';
import { ReactComponent as SearchSvg } from '../../common/icons/Search.svg';
import style from '../../layout/global.module.css';

import BlogItem from './BlogItem/BlogItem';
import { getBlogs } from './blogs-actions';
import { setFilter } from './blogs-slice';
import styles from './blogs.module.css';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blogs);
  const [searchText, setSearchText] = useState(blogs.params.searchNameTerm);
  const delay = 500;
  const debounceText = useDebounce(searchText, delay);

  const filterBlogsFirst = (): void => {
    console.log('New blogs first');
  };

  const filterBlogsOld = (): void => {
    console.log('Old blog first');
  };

  const filterAlphabetOrder = (): void => {
    dispatch(setFilter({ sortDirection: 'asc' }));
    dispatch(getBlogs());
  };

  const filterReverseAlphabetOrder = (): void => {
    dispatch(setFilter({ sortDirection: 'desc' }));
    dispatch(getBlogs());
  };

  const option: OptionType[] = [
    { id: 1, value: 'New blogs first', filterItems: filterBlogsFirst },
    { id: 2, value: 'Old blog first', filterItems: filterBlogsOld },
    { id: 3, value: 'From A to Z', filterItems: filterAlphabetOrder },
    { id: 4, value: 'From Z to A', filterItems: filterReverseAlphabetOrder },
  ];

  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value);
  };

  useEffect(() => {
    setSearchText(blogs.params.searchNameTerm);
  }, [blogs.params.searchNameTerm]);

  useEffect(() => {
    dispatch(getBlogs());
  }, [debounceText]);

  return (
    <div className={styles.blogsBlock}>
      <div className={styles.container}>
        <TitleComponent title="Blogs" />
        <SearchSvg className={styles.searchSvg} />
        <input
          value={searchText}
          onChange={inputChangeHandler}
          placeholder="Search"
          type="text"
          className={`${style.textGlobal} ${styles.inputSearch}`}
        />
        <div className={styles.selectBlock}>
          <Select
            setOpenSelect={() => setOpenSelect(!openSelect)}
            openSelect={openSelect}
            value={value}
            option={option}
            setValue={setValue}
          />
        </div>
      </div>
      {blogs.status === 'loading' ? (
        <div className={style.loader}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          {blogs.blogs.map(el => {
            return (
              <BlogItem
                name={el.name}
                key={el.id}
                id={el.id}
                websiteUrl={el.websiteUrl}
                description={el.description}
              />
            );
          })}
          <div className={style.buttonBlock}>
            <Button
              title="Show more"
              onclick={() => {}}
              styleButton={styles.buttonShowMore}
            />
          </div>
        </div>
      )}
    </div>
  );
};
