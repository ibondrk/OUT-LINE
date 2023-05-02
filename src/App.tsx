import React from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Header } from './components/Header';
import { HamburgerMenu } from './components/Header/hamburger';
import { HeadSection } from './components/HeadSection';
import { AboutUs } from './components/AboutUs';
import { WhatWeDo } from './components/WhatWeDo';
import { Partners } from './components/Partners';
import { ServiceProviders } from './components/ServiceProviders';

import { useAppSelector, useAppDispatch } from './app/hooks';
import * as menuActions from './app/featcher/menu';

function App() {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector((state) => state.menu);

  return (
    <div className={'App'}>
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Header key="header" />
      <HamburgerMenu key="hamburger" />
      <HeadSection />
      <AboutUs />
      <WhatWeDo />
      <Partners />
      <ServiceProviders />
    </div>
  );
}

export default App;
