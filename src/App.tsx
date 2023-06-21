import React, { useEffect, useRef } from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { HamburgerMenu } from './components/Header/hamburger';
import { Contacts } from './components/Contacts';

import { useAppSelector, useAppDispatch } from './app/hooks';
import * as menuActions from './app/featcher/menu';
import { setScreenWidth } from './app/featcher/screenWidth';
import { useLocation } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector((state) => state.menu);

  const appRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    dispatch(setScreenWidth());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    if (appRef.current && location.pathname !== prevLocation.current.pathname) {
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }
    prevLocation.current = location;
  }, [appRef, location]);

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      scrollToSection(hash.substring(1)); // Scroll to the section specified by the hash
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const is404Page =
    location.pathname !== '/' && location.pathname !== '/conditions';

  return (
    <div className={'App'} ref={appRef}>
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Header />
      <HamburgerMenu />
      <Outlet />
      {!is404Page && <Contacts />}
    </div>
  );
}

export default App;
