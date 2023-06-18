import React from 'react';
import s from './footerNavigation.module.scss';

export const FooterNavigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li
          className={s.nav__item}
          onClick={() => {
            scrollToSection('aboutUs');
          }}
        >
          ABOUT US
        </li>
        <li
          className={s.nav__item}
          onClick={() => {
            scrollToSection('whatWeDo');
          }}
        >
          WHAT WE DO
        </li>
        <li
          className={s.nav__item}
          onClick={() => {
            scrollToSection('Partners');
          }}
        >
          OUR PARTNERS IN AUE
        </li>
        <li
          className={s.nav__item}
          onClick={() => {
            scrollToSection('ServiceProviders');
          }}
        >
          OUR SERVICE PROVIDERS
        </li>
        <li
          className={s.nav__item}
          onClick={() => {
            scrollToSection('');
          }}
        >
          TERMS & CONDITIONS
        </li>
      </ul>
    </nav>
  );
};
