import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

interface NavigationLinkType {
  img: any;
  path: string;
  alt: string;
  text: string;
  activeLink?: any;
  notActive?: any;
}

export const NavigationLink: FC<NavigationLinkType> = ({
  img,
  alt,
  text,
  path,
  activeLink,
  notActive,
}) => {
  return (
    <NavLink className={({ isActive }) => (!isActive ? notActive : activeLink)} to={path}>
      <img src={img} alt={alt} />
      {text}
    </NavLink>
  );
};
