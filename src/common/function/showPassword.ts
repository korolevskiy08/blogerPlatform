import { useState } from 'react';

export const ShowPassword = (): any => {
  const [show, setShow] = useState<boolean>(true);
  const [showConfirm, setShowConfirm] = useState(true);

  const setShowPassword = (): void => {
    setShow(!show);
  };

  const setShowConfirmPassword = (): void => {
    setShowConfirm(!showConfirm);
  };

  return {
    show,
    setShowPassword,
    showConfirm,
    setShowConfirmPassword,
  };
};
