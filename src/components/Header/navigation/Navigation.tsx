import React from 'react';
import s from './navigation.module.scss';
import { useLocation } from 'react-router-dom';

import * as menuActions from '../../../app/featcher/menu';

import { useAppDispatch } from '../../../app/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  console.log('Location: ', location, 'path: ', location.pathname);
  const handleFooterLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = '/';
    } else {
      event.preventDefault();
      scrollToSection(sectionId);
    }
  };

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
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'aboutUs');
            }}
          >
            ABOUT US
          </a>
        </li>
        <li className={s.nav_item}>
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'whatWeDo');
            }}
          >
            WHAT WE DO
          </a>
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
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'contacts');
            }}
          >
            CONTACTS
          </a>
        </li>
      </ul>
    </nav>
  );
};
