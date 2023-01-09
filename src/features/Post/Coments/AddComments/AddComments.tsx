import React, { ChangeEvent, FC, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../../../common/Components/Button/Button';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import style from '../../../../layout/global.module.css';
import { newComment } from '../../post-actions';

import styles from './addComments.module.css';

export const AddComments: FC = () => {
  const { postId } = useParams();
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const sendComment = (): void => {
    if (postId) {
      dispatch(newComment({ content: text, postId }));
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={onChangeHandler}
        type="text"
        className={styles.input}
      />
      <div className={styles.buttonGroup}>
        <Button styleButton={styles.cancelButton} onclick={() => {}}>
          Cancel
        </Button>
        <Button
          disabled={text.length === 0}
          styleButton={
            text.length === 0
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
