import React, { FC } from 'react';

import { Alert, Snackbar } from '@mui/material';

type SnackBarType = {
  error: null | string;
  open: boolean;
  setOpen: () => void;
};

export const ErrorSnackBar: FC<SnackBarType> = ({ error, setOpen, open }) => {
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen();
  };

  return (
    <div>
      {error && (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
