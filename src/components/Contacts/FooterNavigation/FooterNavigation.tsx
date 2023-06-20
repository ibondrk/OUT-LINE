import React from 'react';
import s from './footerNavigation.module.scss';
import { NavLink } from 'react-router-dom';

export const FooterNavigation: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/#aboutUs" className={s.nav_link}>
            ABOUT US
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/#whatWeDo" className={s.nav_link}>
            WHAT WE DO
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/#partners" className={s.nav_link}>
            OUR PARTNERS IN AUE
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/#serviceProviders" className={s.nav_link}>
            OUR SERVICE PROVIDERS
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/conditions" className={s.nav_link}>
            TERMS & CONDITIONS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
