import React, { ChangeEvent, FC } from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../../../common/Components/Button/Button';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import style from '../../../../layout/global.module.css';
import { newComment } from '../../post-actions';

import styles from './addComments.module.css';

type AddCommentsType = {
  textComment: string;
  setTextComment: (text: string) => void;
};

export const AddComments: FC<AddCommentsType> = ({ setTextComment, textComment }) => {
  const { postId } = useParams();

  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextComment(e.currentTarget.value);
  };

  const sendComment = (): void => {
    if (postId) {
      dispatch(newComment({ content: textComment, postId }));
      setTextComment('');
    }
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
        <Button styleButton={styles.cancelButton} onclick={() => {}}>
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
