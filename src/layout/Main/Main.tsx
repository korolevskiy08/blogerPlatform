import React, { FC } from 'react';

import { AppRoutes } from '../../app/AppRoutes/AppRoutes';
import { Navigation } from '../Navigation/Navigation';

import style from './Main.module.css';

export const Main: FC = () => {
  return (
    <div className={style.main}>
      <Navigation />
      <AppRoutes />
    </div>
  );
};
