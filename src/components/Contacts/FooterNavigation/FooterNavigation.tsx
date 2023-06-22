import React from 'react';
import s from './footerNavigation.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export const FooterNavigation: React.FC = () => {
  const location = useLocation();

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
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) => handleFooterLinkClick(event, 'aboutUs')}
          >
            ABOUT US
          </a>
        </li>
        <li className={s.nav__item}>
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) => handleFooterLinkClick(event, 'whatWeDo')}
          >
            WHAT WE DO
          </a>
        </li>
        <li className={s.nav__item}>
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) => handleFooterLinkClick(event, 'partners')}
          >
            OUR PARTNERS
          </a>
        </li>
        <li className={s.nav__item}>
          <a
            href="/"
            className={s.nav_link}
            onClick={(event) =>
              handleFooterLinkClick(event, 'serviceProviders')
            }
          >
            OUR SERVICE PROVIDERS
          </a>
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
