import React, { useEffect } from 'react';
import s from './hamburgerMenu.module.scss';
import cn from 'classnames';
import { Navigation } from '../navigation';
import { SocialMedia } from '../../SocialMedia';

import sprite from '../../../images/sprite.svg';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import * as menuActions from '../../../app/featcher/menu';

export const HamburgerMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.menu);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1550) {
        dispatch(menuActions.toggleMenu(false));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={cn(s.hamburger_menu, { [s.opened]: isMenuOpen })}>
      <div className={s.content}>
        <div className={s.main_wrapper}>
          <div className={s.menu_header}>
            <div className={s.media_header}>
              <SocialMedia />
            </div>
          </div>
          <Navigation />
          <div className={s.menu_media}>
            <p className={s.follow_us}>follow us:</p>
            <SocialMedia />
          </div>
        </div>
        <div className={s.location_wrapper}>
          <p className={s.adress}>
            Dubai Digital Park A2, <br /> Dubai, UAE
          </p>
          <svg className={s.qr}>
            <use xlinkHref={`${sprite}#qr`} />
          </svg>
        </div>
      </div>
    </div>
  );
};
