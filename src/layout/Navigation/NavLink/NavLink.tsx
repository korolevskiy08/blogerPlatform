import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

interface NavigationLinkType {
  img: any;
  path: string;
  alt: string;
  text: string;
  styleLinkBlock: any;
  styleLinkTitle: any;
}

export const NavigationLink: FC<NavigationLinkType> = ({
  img,
  alt,
  text,
  path,
  styleLinkBlock,
  styleLinkTitle,
}) => {
  return (
    <div>
      <NavLink className={styleLinkBlock} to={path}>
        <img src={img} alt={alt} />
        <p className={styleLinkTitle}>{text}</p>
      </NavLink>
    </div>
  );
};
