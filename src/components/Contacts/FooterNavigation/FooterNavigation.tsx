import React, { useEffect } from 'react';
import s from './footerNavigation.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export const FooterNavigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      scrollToSection(hash.substring(1)); // Відкидаємо початковий символ '#'
    }
  }, [location]);

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
          <NavLink to="/#Partners" className={s.nav_link}>
            OUR PARTNERS IN AUE
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/#ServiceProviders" className={s.nav_link}>
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
