import React from 'react';
import s from './swiperComponent.module.scss';
import cn from 'classnames';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/swiper-bundle.css';

type SwiperComponentProps = {
  slides: React.ReactNode[];
} & SwiperProps;

export const SwiperComponent: React.FC<SwiperComponentProps> = ({
  slides,
  ...swiperProps
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = slides.length;

  const swiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1.2,
    spaceBetween: 0,
    centeredSlides: true,
    observer: true,
    loop: false,
    direction: 'horizontal' as const,
    pagination: {
      clickable: true,
      el: '.swiper_pagination',
      type: 'custom' as const,
    },
    navigation: {
      prevEl: `.${s.swiperPrev}`,
      nextEl: `.${s.swiperNext}`,
    },
    onSlideChange: (swiper: any) => {
      setCurrentSlide(swiper.realIndex + 1);
      console.log(typeof swiper);
    },
    ...swiperProps,
  };

  return (
    <div className="swiper-container">
      <Swiper {...swiperOptions}>
        {slides.map((slide: React.ReactNode, index: number) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div className={s.swiper_navigation}>
        <div
          className={cn(s.swiperPrev, {
            [s.disabled]: currentSlide === 1,
          })}
        ></div>
        <div className={s.swiper_pagination}>
          <span className={s.current_slide}>{currentSlide}</span>
          <span className={s.total_slides}> / {totalSlides}</span>
        </div>
        <div
          className={cn(s.swiperNext, {
            [s.disabled]: totalSlides === currentSlide,
          })}
        ></div>
      </div>
    </div>
  );
};
