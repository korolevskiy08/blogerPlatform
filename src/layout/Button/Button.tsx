import React, { FC } from 'react';

type ButtonType = {
  title: string;
  onclick: () => void;
  styleButton?: any;
};

export const Button: FC<ButtonType> = ({ onclick, title, styleButton }) => {
  const onclickHandler = (): void => {
    onclick();
  };

  return (
    <div>
      <button type="button" onClick={onclickHandler} className={styleButton}>
        {title}
      </button>
    </div>
  );
};
