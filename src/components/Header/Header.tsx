import React from 'react';
import s from './header.module.scss';
import cn from 'classnames';

import { Theme } from './Theme';
import { HamburgerIcon } from './hamburger/icon';
import { Navigation } from './navigation';
import { NavLink, useLocation } from 'react-router-dom';

import sprite from '../../images/sprite.svg';

export const Header: React.FC = () => {
  const location = useLocation();

  console.log('location data: ', location);

  return (
    <header className={s.wrapper} id="header">
      <NavLink to={'/'}>
        <svg className={s.logo}>
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
      </NavLink>
      <div className={s.navigation_wrapper}>
        <div
          className={cn(s.themeWrapper, {
            [s.shown]: location.pathname !== '/',
          })}
        >
          <Theme />
        </div>
        <Navigation />
      </div>
      <div className={s.btns_wrapper}>
        <Theme />
        <HamburgerIcon />
      </div>
    </header>
  );
};
