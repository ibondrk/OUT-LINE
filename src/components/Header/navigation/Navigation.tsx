import React, { useEffect } from 'react';
import s from './navigation.module.scss';

import * as menuActions from '../../../app/featcher/menu';

import { useAppDispatch } from '../../../app/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const link = document.querySelector(
            `.nav_list a[href*=${sectionId}]`
          );
          link && link.classList.add('active');
        } else {
          const link = document.querySelector(
            `.nav_list a[href*=${sectionId}]`
          );
          link && link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    const element = target
      ? (document.querySelector(target) as HTMLElement)
      : null;

    if (element) {
      const navHeight = (document.querySelector('.nav_bar')! as HTMLDivElement)
        .offsetHeight;
      const position = element.offsetTop - navHeight;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }

    dispatch(menuActions.toggleMenu(false));
  };

  return (
    <nav className={s.nav_bar}>
      <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <a
            href="#AboutUs"
            className={s.nav_link}
            onClick={handleNavClick}
            // onClick={() => {
            //   dispatch(menuActions.toggleMenu(false));
            // }}
          >
            ABOUT US
          </a>
        </li>
        <li className={s.nav_item}>
          <a
            href="#WhatWeDo"
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            WHAT WE DO
          </a>
        </li>
        {/* <li className={cn(s.nav_item, s.mobile)}>
          <a
            href=""
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            OUR PARTNERS IN AUE
          </a>
        </li>
        <li className={cn(s.nav_item, s.mobile)}>
          <a
            href=""
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            PROVIDERS
          </a>
        </li> */}
        <li className={s.nav_item}>
          <a
            href="#Contacts"
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            CONTACTS
          </a>
        </li>
      </ul>
    </nav>
  );
};
