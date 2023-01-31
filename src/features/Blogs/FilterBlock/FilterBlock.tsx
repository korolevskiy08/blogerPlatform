import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { OptionType, Select } from '../../../common/Components/Select/Select';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useDebounce } from '../../../common/hooks/useDebounce';
import { ReactComponent as SearchSvg } from '../../../common/icons/Search.svg';
import style from '../../../styles/global.module.css';
import { getBlogs } from '../blogs-actions';

import styles from './filter.module.css';

type FilterBlockType = {
  searchNameTerm: string;
};

export const FilterBlock: FC<FilterBlockType> = ({ searchNameTerm }) => {
  const [searchText, setSearchText] = useState(searchNameTerm);
  const delay = 500;
  const debounceText = useDebounce(searchText, delay);
  const dispatch = useAppDispatch();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(getBlogs({}));
  }, [dispatch]);

  const option: OptionType[] = [
    {
      id: 1,
      value: 'New blogs first',
      filterItems: () => {
        dispatch(getBlogs({ sortDirection: 'desc', sortBy: 'createdAt', pageNumber: 0 }));
      },
    },
    {
      id: 2,
      value: 'Old blog first',
      filterItems: () => {
        dispatch(getBlogs({ sortDirection: 'asc', sortBy: 'createdAt', pageNumber: 0 }));
      },
    },
    {
      id: 3,
      value: 'From A to Z',
      filterItems: () => dispatch(getBlogs({ sortDirection: 'asc', pageNumber: 0 })),
    },
    {
      id: 4,
      value: 'From Z to A',
      filterItems: () => dispatch(getBlogs({ sortDirection: 'desc', pageNumber: 0 })),
    },
  ];

  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    setSearchText(searchNameTerm);
  }, [searchNameTerm]);

  useEffect(() => {
    dispatch(getBlogs({ searchNameTerm: searchText }));
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
