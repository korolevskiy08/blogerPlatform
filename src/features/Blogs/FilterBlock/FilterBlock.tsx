import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { OptionType, Select } from '../../../common/Components/Select/Select';
import { useActions } from '../../../common/hooks/useActions';
import { useDebounce } from '../../../common/hooks/useDebounce';
import { ReactComponent as SearchSvg } from '../../../common/icons/Search.svg';
import { blogsActions } from '../index';

import styles from './filter.module.css';

type FilterBlockType = {
  searchNameTerm: string;
};

export const FilterBlock: FC<FilterBlockType> = ({ searchNameTerm }) => {
  const [searchText, setSearchText] = useState(searchNameTerm);
  const delay = 500;
  const debounceText = useDebounce(searchText, delay);

  const { getBlogs } = useActions(blogsActions);
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value);
  };

  useEffect(() => {
    getBlogs({});
  }, [getBlogs]);

  const option: OptionType[] = [
    {
      id: 1,
      value: 'New blogs first',
      filterItems: () => {
        getBlogs({ sortDirection: 'desc', sortBy: 'createdAt', pageNumber: 0 });
      },
    },
    {
      id: 2,
      value: 'Old blog first',
      filterItems: () => {
        getBlogs({ sortDirection: 'asc', sortBy: 'createdAt', pageNumber: 0 });
      },
    },
    {
      id: 3,
      value: 'From A to Z',
      filterItems: () => getBlogs({ sortDirection: 'asc', pageNumber: 0 }),
    },
    {
      id: 4,
      value: 'From Z to A',
      filterItems: () => getBlogs({ sortDirection: 'desc', pageNumber: 0 }),
    },
  ];

  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    setSearchText(searchNameTerm);
  }, [searchNameTerm]);

  useEffect(() => {
    getBlogs({ searchNameTerm: searchText });
  }, [debounceText, searchText, getBlogs]);

  return (
    <div>
      <SearchSvg className={styles.searchSvg} />
      <input
        value={searchText}
        onChange={inputChangeHandler}
        placeholder="Search"
        type="text"
        className={styles.inputSearch}
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
