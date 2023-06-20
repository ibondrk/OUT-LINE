import React from 'react';
import s from './navigation.module.scss';
import { NavLink } from 'react-router-dom';

import * as menuActions from '../../../app/featcher/menu';

import { useAppDispatch } from '../../../app/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className={s.nav_bar}>
      <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <NavLink
            to="/#aboutUs"
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            ABOUT US
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to="/#whatWeDo"
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            WHAT WE DO
          </NavLink>
        </li>
        {/* <li className={cn(s.nav_item, s.mobile)}>
          <NavLink
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
              scrollToSection('');
            }}
          >
            OUR PARTNERS IN AUE
          </NavLink>
        </li>
        <li className={cn(s.nav_item, s.mobile)}>
          <NavLink
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            PROVIDERS
          </NavLink>
        </li> */}
        <li className={s.nav_item}>
          <NavLink
            to="/#contacts"
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            CONTACTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
