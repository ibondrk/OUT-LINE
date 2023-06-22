import React from 'react';
import s from './page404.module.scss';

import { NavLink } from 'react-router-dom';

export const Page404: React.FC = () => {
  return (
    <section className={s.page}>
      <svg
        width="504"
        height="184"
        viewBox="0 0 504 184"
        className={s.img404}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M229.737 4.27883C245.794 -1.21979 263.586 -1.42471 279.814 3.69823C292.299 7.59166 303.797 14.6613 313.016 23.9851C320.161 31.1572 325.842 39.7296 329.924 48.985C338.633 39.0124 347.444 29.108 356.221 19.1695C356.901 18.1108 358.772 18.4181 358.943 19.7159C359.147 20.3307 358.772 20.9454 358.364 21.3894C349.281 31.6695 340.232 41.9495 331.149 52.2295C336.082 65.2076 337.578 79.4836 335.537 93.213C333.768 105.235 329.176 116.847 322.338 126.888C315.33 137.168 305.94 145.774 295.122 151.854C277.466 161.895 255.932 164.729 236.269 159.777C229.295 167.666 222.321 175.59 215.347 183.445C214.667 184.367 213 184.094 212.728 182.967C212.455 182.352 212.762 181.669 213.204 181.259C219.804 173.814 226.369 166.334 232.969 158.889C221.164 155.406 210.176 149.156 201.127 140.788C192.418 132.762 185.478 122.824 181.022 111.826C177.041 102.127 175 91.6762 175 81.1912C174.966 67.7008 178.334 54.2445 184.764 42.3935C194.289 24.5998 210.686 10.6996 229.737 4.27883ZM224.804 154.381C227.696 155.815 230.826 156.737 233.888 157.694C265.253 122.141 296.653 86.6215 327.985 51.0342C293.591 85.4603 259.198 119.955 224.804 154.381ZM237.256 158.582C255.558 162.987 275.391 160.631 292.095 151.888C302.539 146.457 311.758 138.671 318.902 129.279C325.774 120.228 330.673 109.709 333.122 98.6092C336.49 83.6502 335.435 67.7008 330.128 53.3224C299.171 88.3975 268.179 123.473 237.256 158.582Z"
          fill="var(--main-text)"
        />
        <path
          d="M83.5 184V139.75H0V124.75L76.75 9H107V119.25H138V139.75H107V184H83.5ZM29.25 119.25H83.5V36.5H82.5C80.75 40.25 74.25 50.25 69.75 57.25L29.25 119.25Z"
          fill="url(#paint0_linear_0_1)"
        />
        <path
          d="M448.734 184V139.75H365.234V124.75L441.984 9H472.234V119.25H503.234V139.75H472.234V184H448.734ZM394.484 119.25H448.734V36.5H447.734C445.984 40.25 439.484 50.25 434.984 57.25L394.484 119.25Z"
          fill="url(#paint1_linear_0_1)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-39.1234"
            y1="168.73"
            x2="189.361"
            y2="-232.146"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6FA0D8" />
            <stop offset="1" stopColor="#9184E8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="-39.1234"
            y1="168.73"
            x2="189.361"
            y2="-232.146"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6FA0D8" />
            <stop offset="1" stopColor="#9184E8" />
          </linearGradient>
        </defs>
      </svg>

      <p className={s.description}>
        Something went wrong. Please, return to the{' '}
        <NavLink to="/" className={s.nav_link}>
          Home page
        </NavLink>{' '}
        and try again.
      </p>
    </section>
  );
};
