import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './pageNavigation.module.scss';

export const PageNavigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState('HeadSection');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const headerOffset =
        document.getElementById('HeadSection')?.offsetTop || 0;
      const aboutUsOffset = document.getElementById('aboutUs')?.offsetTop || 0;
      const whatWeDoOffset =
        document.getElementById('whatWeDo')?.offsetTop || 0;
      const partnersOffset =
        document.getElementById('Partners')?.offsetTop || 0;
      const serviceProvidersOffset =
        document.getElementById('ServiceProviders')?.offsetTop || 0;

      const scrollOffsets = [
        headerOffset,
        aboutUsOffset,
        whatWeDoOffset,
        partnersOffset,
        serviceProvidersOffset,
      ];

      const sectionIndex = scrollOffsets.findIndex(
        (offset) => offset > scrollY
      );

      const sectionIds = [
        'HeadSection',
        'aboutUs',
        'whatWeDo',
        'Partners',
        'ServiceProviders',
      ];

      if (sectionIndex !== -1) {
        setActiveLink(sectionIds[sectionIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className={cn(s.pageNavigation)}>
      <div
        className={cn(s.pageNavigationLink, {
          [s.active]: activeLink === 'HeadSection',
        })}
        onClick={() => scrollToSection('header')}
      ></div>
      <div
        className={cn(s.pageNavigationLink, {
          [s.active]: activeLink === 'aboutUs',
        })}
        onClick={() => scrollToSection('aboutUs')}
      ></div>
      <div
        className={cn(s.pageNavigationLink, {
          [s.active]: activeLink === 'whatWeDo',
        })}
        onClick={() => scrollToSection('whatWeDo')}
      ></div>
      <div
        className={cn(s.pageNavigationLink, {
          [s.active]: activeLink === 'Partners',
        })}
        onClick={() => scrollToSection('Partners')}
      ></div>
      <div
        className={cn(s.pageNavigationLink, {
          [s.active]: activeLink === 'ServiceProviders',
        })}
        onClick={() => scrollToSection('ServiceProviders')}
      ></div>
    </article>
  );
};
