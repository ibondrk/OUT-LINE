import React from 'react';

import { HeadSection } from './HeadSection';
import { AboutUs } from './AboutUs';
import { WhatWeDo } from './WhatWeDo';
import { Partners } from './Partners';
import { ServiceProviders } from './ServiceProviders';

export const PageHome: React.FC = () => {
  return (
    <>
      <HeadSection />
      <AboutUs />
      <WhatWeDo />
      <Partners />
      <ServiceProviders />
    </>
  );
};
