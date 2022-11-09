import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { Path } from '../../common/Routes';

export const Navigation: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={Path.Blogs}> Blogs </NavLink>
        </li>
        <li>
          <NavLink to={Path.Posts}> Posts </NavLink>
        </li>
      </ul>
    </div>
  );
};
