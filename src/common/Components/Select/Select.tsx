import React, { FC } from 'react';

import { ReactComponent as ArrowBottom } from '../../icons/arrowBottom.svg';
import { ReactComponent as ArrowTop } from '../../icons/arrowTop.svg';

import styles from './select.module.css';

export type OptionType = {
  id: number;
  value: string;
  filterItems: Function;
};

type SelectType = {
  setOpenSelect: () => void;
  setValue: (value: OptionType) => void;
  value: OptionType;
  openSelect: boolean;
  option: OptionType[];
};

export const Select: FC<SelectType> = ({
  setOpenSelect,
  setValue,
  value,
  openSelect,
  option,
}) => {
  return (
    <div className={styles.container}>
      <div role="presentation" onClick={() => setOpenSelect()} className={styles.value}>
        <span>{value.value}</span>
        {openSelect ? <ArrowTop /> : <ArrowBottom />}
      </div>
      {openSelect && (
        <ul className={styles.optionList}>
          {option.map(option => (
            <li
              key={option.id}
              role="presentation"
              onClick={e => {
                e.stopPropagation();
                setValue(option);
                setOpenSelect();
                option.filterItems();
              }}
              className={styles.option}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
