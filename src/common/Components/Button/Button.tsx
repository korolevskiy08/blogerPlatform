import React, { FC, ReactNode } from 'react';

type ButtonType = {
  onclick: () => void;
  styleButton?: any;
  children: ReactNode;
};

export const Button: FC<ButtonType> = ({
  onclick,
  children,
  styleButton,
  ...restProps
}) => {
  const onclickHandler = (): void => {
    onclick();
  };

  return (
    <button type="button" onClick={onclickHandler} className={styleButton} {...restProps}>
      {children}
    </button>
  );
};
