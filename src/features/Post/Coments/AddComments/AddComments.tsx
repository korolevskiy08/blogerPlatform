import React, { ChangeEvent, FC, useState } from 'react';

import { Button } from '../../../../common/Components/Button/Button';
import style from '../../../../layout/global.module.css';

import styles from './addComments.module.css';

export const AddComments: FC = () => {
  const [text, setText] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
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
              ? `${style.button} ${styles.sendButton}`
              : `${style.button} ${styles.disabledButton}`
          }
          onclick={() => {}}
        >
          Send a comment
        </Button>
      </div>
    </div>
  );
};
