import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { OptionType, Select } from '../../../common/Components/Select/Select';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { useDebounce } from '../../../common/hooks/useDebounce';
import { ReactComponent as SearchSvg } from '../../../common/icons/Search.svg';
import style from '../../../layout/global.module.css';
import { getBlogs } from '../blogs-actions';
import { setFilterBlogs } from '../blogs-slice';

import styles from './filter.module.css';

export const FilterBlock: FC = () => {
  const blogs = useAppSelector(state => state.blogs);
  const [searchText, setSearchText] = useState(blogs.params.searchNameTerm);
  const delay = 500;
  const debounceText = useDebounce(searchText, delay);
  const dispatch = useAppDispatch();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value);
  };

  const filterBlogsFirst = (): void => {
    dispatch(setFilterBlogs({ sortDirection: 'desc', sortBy: 'createdAt' }));
    dispatch(getBlogs());
  };

  const filterBlogsOld = (): void => {
    dispatch(setFilterBlogs({ sortDirection: 'asc', sortBy: 'createdAt' }));
    dispatch(getBlogs());
  };

  const filterAlphabetOrder = (): void => {
    dispatch(setFilterBlogs({ sortDirection: 'asc' }));
    dispatch(getBlogs());
  };

  const filterReverseAlphabetOrder = (): void => {
    dispatch(setFilterBlogs({ sortDirection: 'desc' }));
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

  useEffect(() => {
    setSearchText(blogs.params.searchNameTerm);
  }, [blogs.params.searchNameTerm]);

  useEffect(() => {
    dispatch(setFilterBlogs({ searchNameTerm: debounceText }));
    dispatch(getBlogs());
  }, [debounceText]);

  return (
    <div>
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
  );
};
