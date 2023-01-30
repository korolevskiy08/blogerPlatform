import React, { ChangeEvent, FC } from 'react';

import { Button } from '../../../../common/Components/Button/Button';
import style from '../../../../styles/global.module.css';

import styles from './addComments.module.css';

type AddCommentsType = {
  textComment: string;
  sendComment: () => void;
  changeComment: (text: string) => void;
  cancel: () => void;
};

export const AddComments: FC<AddCommentsType> = ({
  textComment,
  sendComment,
  changeComment,
  cancel,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    changeComment(e.currentTarget.value);
  };

  const onClickHandler = (): void => {
    cancel();
  };

  return (
    <div>
      <input
        value={textComment}
        onChange={onChangeHandler}
        type="text"
        className={styles.input}
      />
      <div className={styles.buttonGroup}>
        <Button styleButton={styles.cancelButton} onclick={onClickHandler}>
          Cancel
        </Button>
        <Button
          disabled={textComment.length === 0}
          styleButton={
            textComment.length === 0
              ? `${style.button} ${styles.disabledButton}`
              : `${style.button} ${styles.sendButton}`
          }
          onclick={sendComment}
        >
          Send a comment
        </Button>
      </div>
    </div>
  );
};
