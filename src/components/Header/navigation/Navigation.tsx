import React from 'react';
import s from './navigation.module.scss';

import * as menuActions from '../../../app/featcher/menu';

import { useAppDispatch } from '../../../app/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <a
            href=""
            className={s.nav_link}
            onClick={() => {
              dispatch(menuActions.toggleMenu(false));
            }}
          >
            ABOUT US
          </a>
        </li>
        <li className={s.nav_item}>
          <a
            href=""
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
            href=""
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
