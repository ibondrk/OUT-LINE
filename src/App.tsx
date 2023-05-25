import React, { useEffect } from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Header } from './components/Header';
import { HamburgerMenu } from './components/Header/hamburger';
import { PageNavigation } from './components/PageNavigation';
import { HeadSection } from './components/HeadSection';
import { AboutUs } from './components/AboutUs';
import { WhatWeDo } from './components/WhatWeDo';
import { Partners } from './components/Partners';
import { ServiceProviders } from './components/ServiceProviders';
import { Contacts } from './components/Contacts';

import { useAppSelector, useAppDispatch } from './app/hooks';
import * as menuActions from './app/featcher/menu';
import { setScreenWidth } from './app/featcher/screenWidth';

function App() {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector((state) => state.menu);

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

  return (
    <div className={'App'}>
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Header />
      <PageNavigation />
      <HamburgerMenu />
      <HeadSection />
      <AboutUs />
      <WhatWeDo />
      <Partners />
      <ServiceProviders />
      <Contacts />
    </div>
  );
}

export default App;
