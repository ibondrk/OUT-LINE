import React from 'react';
import s from './header.module.scss';

import { Theme } from './Theme';
import { HamburgerIcon } from './hamburger/icon';
import { Navigation } from './navigation';

import sprite from '../../images/sprite.svg';

export const Header: React.FC = () => {
  return (
    <header className={s.wrapper}>
      <svg className={s.logo}>
        <use xlinkHref={`${sprite}#logo`} />
      </svg>
      <div className={s.navigation_wrapper}>
        <Navigation />
      </div>
      <div className={s.btns_wrapper}>
        <Theme />
        <HamburgerIcon />
      </div>
    </header>
  );
};
