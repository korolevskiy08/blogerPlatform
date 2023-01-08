import React, { FC } from 'react';

import { Button } from '../../../../common/Components/Button/Button';
import style from '../../../../layout/global.module.css';

import styles from './addComments.module.css';

export const AddComments: FC = () => {
  return (
    <div>
      <input type="text" className={styles.input} />
      <div className={styles.buttonGroup}>
        <Button styleButton={styles.cancelButton} onclick={() => {}}>
          Cancel
        </Button>
        <Button styleButton={`${style.button} ${styles.sendButton}`} onclick={() => {}}>
          Send a comment
        </Button>
      </div>
    </div>
  );
};
