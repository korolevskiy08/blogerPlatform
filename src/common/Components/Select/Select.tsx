import React, { FC, useState } from 'react';

import { BlogType } from '../../../features/Blogs/blogs-api';
import style from '../../../layout/global.module.css';
import { ReactComponent as ArrowBottom } from '../../icons/arrowBottom.svg';
import { ReactComponent as ArrowTop } from '../../icons/arrowTop.svg';

import styles from './select.module.css';

type SelectType = {
  options: BlogType[];
  value?: BlogType;
  onChange: (value: any) => void;
};

export const Select: FC<SelectType> = ({ options, onChange, value }) => {
  const [open, setOpen] = useState(false);
  const selectOption = (option: BlogType): void => {
    onChange(option);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.initValue}
        role="presentation"
        onClick={() => setOpen(!open)}
      >
        <span className={`${style.titleName} ${styles.value}`}>{value?.name}</span>
        {open ? (
          <ArrowTop className={styles.arrow} />
        ) : (
          <ArrowBottom className={styles.arrow} />
        )}
      </div>
      {open && (
        <ul className={styles.option}>
          {options.map(option => (
            <li
              role="presentation"
              key={option.id}
              className={styles.option}
              onClick={e => {
                e.stopPropagation();
                selectOption(option);
                setOpen(false);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
