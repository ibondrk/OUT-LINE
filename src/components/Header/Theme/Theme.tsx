import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import cn from 'classnames';
import s from './theme.module.scss';
import * as themeActions from '../../../app/featcher/theme';

import sprite from '../../../images/sprite.svg';

export const Theme: React.FC = () => {
  const dispatch = useAppDispatch();
  const { themeName } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = themeName;
  }, [themeName]);

  const handleThemeChange = () => {
    const next = themeName === 'dark' ? 'light' : 'dark';
    dispatch(themeActions.setTheme(next));
  };

  return (
    <>
      <div
        className={cn(s.buttonSwitcher, { [s.active]: themeName === 'dark' })}
        onClick={handleThemeChange}
      />
    </>
  );
};
