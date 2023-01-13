import React, { FC, useEffect } from 'react';

import '../App.css';

import { useLocation } from 'react-router-dom';

import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { userData } from '../features/auth/auth-actions';

import { AppRoutes } from './AppRoutes/AppRoutes';

const App: FC = () => {
  const location = useLocation();

  console.log(location);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userData());
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
