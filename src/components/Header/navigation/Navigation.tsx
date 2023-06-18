import React from 'react';
import s from './navigation.module.scss';
// import cn from 'classnames';

import * as menuActions from '../../../app/featcher/menu';

import { useAppDispatch } from '../../../app/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={s.nav_bar}>
      <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <div
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
              scrollToSection('aboutUs');
            }}
          >
            ABOUT US
          </div>
        </li>
        <li className={s.nav_item}>
          <div
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
              scrollToSection('whatWeDo');
            }}
          >
            WHAT WE DO
          </div>
        </li>
        {/* <li className={cn(s.nav_item, s.mobile)}>
          <div
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
              scrollToSection('');
            }}
          >
            OUR PARTNERS IN AUE
          </div>
        </li>
        <li className={cn(s.nav_item, s.mobile)}>
          <div
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            PROVIDERS
          </div>
        </li> */}
        <li className={s.nav_item}>
          <div
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
              scrollToSection('contacts');
            }}
          >
            CONTACTS
          </div>
        </li>
      </ul>
    </nav>
  );
};
