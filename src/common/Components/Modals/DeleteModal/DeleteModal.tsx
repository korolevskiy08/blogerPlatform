import React, { FC } from 'react';

import style from '../../../../layout/global.module.css';
import { Button } from '../../Button/Button';
import { BasicModal } from '../BasicModal/BasicModal';

import styles from './deleteModals.module.css';

type DeleteBlogsType = {
  isOpen: boolean;
  onClose: () => void;
  deleteItem: () => void;
  textModals: string;
  title: string;
};

export const DeleteModal: FC<DeleteBlogsType> = ({
  isOpen,
  deleteItem,
  title,
  textModals,
  onClose,
}) => {
  return (
    <BasicModal open={isOpen} onClose={onClose} title={title} className={styles.content}>
      <div className={styles.deleteModalBlock}>
        <p className={`${style.text} ${styles.text}`}>{textModals}</p>
        <div className={styles.buttonBlock}>
          <Button onclick={deleteItem} styleButton={`${style.button} ${styles.button}`}>
            Yes
          </Button>
          <Button onclick={onClose} styleButton={`${style.button} ${styles.button}`}>
            No
          </Button>
        </div>
      </div>
    </BasicModal>
  );
};
