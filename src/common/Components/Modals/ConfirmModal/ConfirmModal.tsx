import React, { FC } from 'react';

import style from '../../../../layout/global.module.css';
import { Button } from '../../Button/Button';
import { BasicModal } from '../BasicModal/BasicModal';

import styles from './confirmModal.module.css';

type ConfirmEmailType = {
  isOpen: boolean;
  onClose: () => void;
  onClickHandler: () => void;
  textModals: string;
  title: string;
};

export const ConfirmModal: FC<ConfirmEmailType> = ({
  isOpen,
  onClickHandler,
  title,
  textModals,
  onClose,
}) => {
  return (
    <BasicModal open={isOpen} onClose={onClose} title={title} className={styles.content}>
      <div className={styles.deleteModalBlock}>
        <p className={`${style.text} ${styles.text}`}>{textModals}</p>
        <div className={styles.buttonBlock}>
          <Button
            onclick={onClickHandler}
            styleButton={`${style.button} ${styles.button}`}
          >
            OK
          </Button>
        </div>
      </div>
    </BasicModal>
  );
};
