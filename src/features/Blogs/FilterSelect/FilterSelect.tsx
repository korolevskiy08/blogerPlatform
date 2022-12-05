import React, { FC, useState } from 'react';

import { ReactComponent as ArrowBottom } from '../../../common/icons/arrowBottom.svg';
import { ReactComponent as ArrowTop } from '../../../common/icons/arrowTop.svg';
import style from '../../../layout/global.module.css';

import styles from './filterSelect.module.css';

type OptionType = {
  id: number;
  value: string;
};

export const FilterSelect: FC = () => {
  const option: OptionType[] = [
    { id: 1, value: 'New blogs first' },
    { id: 2, value: 'Old blog first' },
    { id: 3, value: 'From A to Z' },
    { id: 4, value: 'From Z to A' },
  ];
  const [value, setValue] = useState(option[0]);
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <div className={styles.container}>
      <div
        role="presentation"
        onClick={() => setOpenSelect(!openSelect)}
        className={styles.value}
      >
        <span className={style.textGlobal}>{value.value}</span>
        {openSelect ? <ArrowTop /> : <ArrowBottom />}
      </div>
      {openSelect && (
        <ul>
          {option.map(option => (
            <li
              key={option.id}
              role="presentation"
              onClick={e => {
                e.stopPropagation();
                setValue(option);
                setOpenSelect(false);
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
