import React from 'react';
import s from './columnsOfProviders.module.scss';
import cn from 'classnames';

import { ProvidersCol1 } from '../ProvidersCol1/ProvidersCol1';
import { ProvidersCol2 } from '../ProvidersCol2/ProvidersCol2';
import { ProvidersCol3 } from '../ProvidersCol3/ProvidersCol3';

export const ColumnOfProviders: React.FC = () => {
  return (
    <>
      <div className={cn(s.columb1_wrapper, 'T--9-12', 'D--13-16')}>
        <ProvidersCol1 />
      </div>
      <div className={cn(s.columb2_wrapper, 'T--1-3', 'D--17-20')}>
        <ProvidersCol2 />
      </div>
      <div className={cn(s.columb3_wrapper, 'T--4-7', 'D--21-24')}>
        <ProvidersCol3 />
      </div>
    </>
  );
};
