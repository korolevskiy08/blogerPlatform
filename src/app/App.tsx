import React, { FC, useEffect } from 'react';

import '../App.css';

import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { userData } from '../features/auth/auth-actions';

import { AppRoutes } from './AppRoutes/AppRoutes';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
