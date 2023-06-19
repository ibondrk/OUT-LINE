import React, { useEffect } from 'react';
import s from './navigation.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

import * as menuActions from '../../../app/featcher/menu';

import { useAppDispatch } from '../../../app/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      scrollToSection(hash.substring(1)); // Відкидаємо початковий символ '#'
    }
  }, [location]);

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
