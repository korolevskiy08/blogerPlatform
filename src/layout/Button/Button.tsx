import React, { FC } from 'react';

type ButtonType = {
  title: string;
  onclick: () => void;
  styleButton?: any;
};

export const Button: FC<ButtonType> = ({ onclick, title, styleButton, ...restProps }) => {
  const onclickHandler = (): void => {
    onclick();
  };

  return (
    <button type="button" onClick={onclickHandler} className={styleButton} {...restProps}>
      {title}
    </button>
  );
};
