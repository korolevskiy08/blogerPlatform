import React, { FC, ReactNode } from 'react';

import style from '../../../../styles/global.module.css';
import { ReactComponent as Close } from '../../../icons/close.svg';

import styles from './basicModal.module.css';

type BasicModalType = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  className: any;
};

export const BasicModal: FC<BasicModalType> = ({
  className,
  open,
  onClose,
  children,
  title,
}) => {
  return (
    <div className={open ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={className}>
        <div className={styles.titleBlock}>
          <h2 className={`${style.text} ${styles.title}`}>{title}</h2>
          <Close onClick={onClose} className={styles.close} />
        </div>
        {children}
      </div>
    </div>
  );
};
