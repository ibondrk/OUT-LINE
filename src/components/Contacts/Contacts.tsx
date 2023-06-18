import React from 'react';
import s from './contacts.module.scss';
import cn from 'classnames';

import { FooterNavigation } from './FooterNavigation';

import { useAppSelector } from '../../app/hooks';

import sprite from '../../images/sprite.svg';

export const Contacts: React.FC = () => {
  const { isNoteBook } = useAppSelector((state) => state.screenWidth);
  return (
    <footer className={s.section} id="contacts">
      <svg className={cn(s.logo, 'S--1-1')}>
        <use xlinkHref={`${sprite}#logo`} />
      </svg>

      <div className={cn(s.nav_wrapper, 'S--1-4', 'T--1-3', 'D--11-13')}>
        <FooterNavigation />
      </div>
      {/* Social media */}
      <div
        className={cn(
          s.social_media_wrapper,
          'S--3-4',
          isNoteBook ? 'T--8-10' : 'T--8-12',
          'D--18-21'
        )}
      >
        <p className={cn(s.block_descr, s.follow_text)}>Follow us:</p>
        <div className={cn(s.icons_wrapper)}>
          {/* Inst logo */}
          <a
            href="https://instagram.com/out_line.ae?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className={s.inst}
          >
            {/* Inst logo */}
            <svg
              className={s.instagram_logo}
              id="instagram-logo"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_inst_footer_532_480)">
                <path
                  d="M2.02212 2.15224C-0.406964 4.67485 0.0901871 7.35456 0.0901871 15.4954C0.0901871 22.2559 -1.08958 29.033 5.08488 30.6285C7.01295 31.1243 24.0964 31.1243 26.0219 30.6259C28.5926 29.9628 30.6843 27.878 30.9702 24.2428C31.0101 23.7354 31.0101 7.26442 30.9689 6.74676C30.665 2.87464 28.281 0.643049 25.1396 0.191065C24.4197 0.0867609 24.2754 0.055856 20.5816 0.0494175C7.47919 0.055856 4.60705 -0.527474 2.02212 2.15224Z"
                  fill="url(#paint0_inst_footer_linear_715_3084)"
                />
                <path
                  d="M15.5427 4.09182C10.8662 4.09182 6.42529 3.6759 4.72905 8.02833C4.02841 9.82596 4.13015 12.1606 4.13015 15.5034C4.13015 18.4368 4.03613 21.1938 4.72905 22.9773C6.42143 27.3323 10.8984 26.9151 15.5402 26.9151C20.0184 26.9151 24.6357 27.3812 26.3525 22.9773C27.0545 21.1616 26.9514 18.8618 26.9514 15.5034C26.9514 11.0454 27.1974 8.1674 25.035 6.00664C22.8454 3.81754 19.8844 4.09182 15.5376 4.09182H15.5427ZM14.5201 6.14828C24.2751 6.13283 25.5167 5.04859 24.8315 20.1108C24.588 25.4381 20.531 24.8535 15.544 24.8535C6.45105 24.8535 6.1896 24.5933 6.1896 15.4983C6.1896 6.29766 6.91085 6.15344 14.5201 6.14571V6.14828ZM21.6348 8.0425C20.8787 8.0425 20.2657 8.65544 20.2657 9.41132C20.2657 10.1672 20.8787 10.7802 21.6348 10.7802C22.3908 10.7802 23.0039 10.1672 23.0039 9.41132C23.0039 8.65544 22.3908 8.0425 21.6348 8.0425ZM15.5427 9.64311C12.3061 9.64311 9.68253 12.2674 9.68253 15.5034C9.68253 18.7394 12.3061 21.3625 15.5427 21.3625C18.7794 21.3625 21.4016 18.7394 21.4016 15.5034C21.4016 12.2674 18.7794 9.64311 15.5427 9.64311ZM15.5427 11.6996C20.5722 11.6996 20.5786 19.3073 15.5427 19.3073C10.5146 19.3073 10.5068 11.6996 15.5427 11.6996Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_inst_footer_linear_715_3084"
                  x1="-2.41006"
                  y1="28.295"
                  x2="39.42"
                  y2="2.77332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6FA0D8" />
                  <stop offset="1" stopColor="#9184E8" />
                </linearGradient>
                <clipPath id="clip0_inst_footer_532_480">
                  <rect width="41" height="41" fill="white" />
                </clipPath>
                <radialGradient
                  id="instHoverContactGrad"
                  cx="217.76"
                  cy="3290.99"
                  r="4271.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".09" stopColor="#fa8f21"></stop>
                  <stop offset=".78" stopColor="#d82d7e"></stop>
                </radialGradient>
              </defs>
            </svg>
          </a>
          {/* LinkedIn logo */}
          <a
            href="https://www.linkedin.com/company/out-line-group-fzco/"
            target="_blank"
            rel="noreferrer"
            className={s.linkedin}
          >
            <svg
              width="32"
              height="31"
              viewBox="0 0 32 31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9163 0H4.37083C2.03617 0 0.143555 1.89261 0.143555 4.22727V26.7727C0.143555 29.1074 2.03617 31 4.37083 31H26.9163C29.2509 31 31.1436 29.1074 31.1436 26.7727V4.22727C31.1436 1.89261 29.2509 0 26.9163 0Z"
                fill="url(#paint0_linked_footer_linear_715_3078)"
              />
              <path
                d="M11.3105 8.45436C11.3105 8.97691 11.1555 9.48772 10.8652 9.9222C10.5749 10.3567 10.1623 10.6953 9.67948 10.8953C9.19671 11.0953 8.66548 11.1476 8.15298 11.0456C7.64047 10.9437 7.1697 10.6921 6.80021 10.3226C6.43071 9.95307 6.17908 9.48231 6.07713 8.9698C5.97519 8.45729 6.02751 7.92607 6.22748 7.4433C6.42745 6.96053 6.76609 6.54789 7.20057 6.25758C7.63505 5.96727 8.14587 5.81232 8.66841 5.81232C9.36913 5.81232 10.0411 6.09067 10.5366 6.58615C11.0321 7.08163 11.3105 7.75365 11.3105 8.45436Z"
                fill="white"
              />
              <path
                d="M10.7126 12.8577V24.5303C10.713 24.6164 10.6965 24.7018 10.6638 24.7814C10.6312 24.8611 10.5831 24.9336 10.5224 24.9946C10.4617 25.0557 10.3895 25.1042 10.31 25.1372C10.2305 25.1703 10.1452 25.1873 10.0591 25.1873H7.27437C7.18826 25.1875 7.10295 25.1707 7.02335 25.1379C6.94375 25.105 6.87143 25.0568 6.81054 24.9959C6.74965 24.935 6.70139 24.8627 6.66855 24.7831C6.6357 24.7035 6.61891 24.6182 6.61914 24.5321V12.8577C6.61914 12.684 6.68818 12.5173 6.81106 12.3944C6.93393 12.2715 7.10059 12.2025 7.27437 12.2025H10.0591C10.2326 12.203 10.3988 12.2722 10.5213 12.395C10.6438 12.5179 10.7126 12.6843 10.7126 12.8577Z"
                fill="white"
              />
              <path
                d="M25.2674 18.9345V24.5849C25.2677 24.6641 25.2522 24.7425 25.222 24.8157C25.1919 24.8889 25.1475 24.9554 25.0915 25.0114C25.0355 25.0674 24.969 25.1117 24.8958 25.1419C24.8226 25.1721 24.7442 25.1875 24.665 25.1873H21.6707C21.5916 25.1875 21.5131 25.1721 21.4399 25.1419C21.3667 25.1117 21.3002 25.0674 21.2443 25.0114C21.1883 24.9554 21.1439 24.8889 21.1137 24.8157C21.0835 24.7425 21.0681 24.6641 21.0683 24.5849V19.1088C21.0683 18.2916 21.3079 15.5298 18.9318 15.5298C17.0912 15.5298 16.716 17.4197 16.642 18.2687V24.5849C16.642 24.7432 16.5798 24.8951 16.4687 25.0078C16.3576 25.1205 16.2067 25.185 16.0485 25.1873H13.1563C13.0773 25.1873 12.999 25.1717 12.926 25.1414C12.853 25.1111 12.7868 25.0667 12.731 25.0108C12.6752 24.9548 12.631 24.8884 12.6009 24.8153C12.5708 24.7422 12.5554 24.6639 12.5557 24.5849V12.8067C12.5554 12.7277 12.5708 12.6494 12.6009 12.5763C12.631 12.5032 12.6752 12.4368 12.731 12.3808C12.7868 12.3249 12.853 12.2805 12.926 12.2502C12.999 12.2199 13.0773 12.2043 13.1563 12.2043H16.0485C16.2082 12.2043 16.3614 12.2678 16.4744 12.3807C16.5874 12.4937 16.6508 12.6469 16.6508 12.8067V13.8248C17.3342 12.7996 18.347 12.0088 20.5082 12.0088C25.2956 12.0088 25.2674 16.4791 25.2674 18.9345Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linked_footer_linear_715_3078"
                  x1="-2.2665"
                  y1="28.295"
                  x2="39.5636"
                  y2="2.77332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6FA0D8" />
                  <stop offset="1" stopColor="#9184E8" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          {/* Facebook logo */}
          <a
            href="https://www.facebook.com/search/top?q=out%20line%20group%20fzco"
            target="_blank"
            rel="noreferrer"
            className={s.facebook}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="5" fill="white" />
              <path
                d="M25.9573 0H4.04259C1.80997 0 0 1.80989 0 4.04256V25.9573C0 28.19 1.8099 29.9999 4.04259 29.9999H14.8508L14.8693 19.2795H12.0841C11.7222 19.2795 11.4284 18.9869 11.427 18.6249L11.4136 15.1693C11.4122 14.8054 11.7069 14.5096 12.0708 14.5096H14.8509V11.1706C14.8509 7.29576 17.2175 5.18587 20.6741 5.18587H23.5106C23.8735 5.18587 24.1678 5.48008 24.1678 5.84305V8.75684C24.1678 9.11967 23.8737 9.4138 23.5109 9.41402L21.7702 9.41483C19.8904 9.41483 19.5264 10.3081 19.5264 11.619V14.5097H23.6571C24.0506 14.5097 24.356 14.8534 24.3096 15.2442L23.9 18.6998C23.8609 19.0305 23.5804 19.2797 23.2475 19.2797H19.5448L19.5264 30H25.9575C28.1901 30 30 28.1901 30 25.9575V4.04256C29.9999 1.80989 28.19 0 25.9573 0Z"
                fill="url(#paint0_foot_fb_linear_1195_21)"
              />
              <defs>
                <linearGradient
                  id="paint0_foot_fb_linear_1195_21"
                  x1="-2.33232"
                  y1="27.3823"
                  x2="38.1484"
                  y2="2.68386"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6FA0D8" />
                  <stop offset="1" stopColor="#9184E8" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      {/* Location */}
      <div className={cn(s.location_wrapper, 'S--1-4', 'T--10-12', 'D--20-24')}>
        <div>
          <p className={s.block_descr}>Look for us:</p>
          <a
            className={s.adress}
            href="https://maps.app.goo.gl/mzZJXZ4DfycC2fas8?g_st=it"
            target="_blank"
            rel="noreferrer"
          >
            Dubai Digital Park <br /> A2, Dubai, UAE
          </a>
        </div>
        <svg className={s.qr}>
          <use xlinkHref={`${sprite}#qr`} />
        </svg>
      </div>
      {/* Questions: */}
      <div
        className={cn(
          s.questions,
          'S--1-4',
          isNoteBook ? 'T--4-8' : 'T--4-11',
          'D--14-18'
        )}
      >
        <p className={s.block_descr}>Any questions:</p>

        <a className={s.question_link} href="mailto:mail@out-line.ae">
          mail@out-line.ae
        </a>
        <br />
        <a
          className={cn(s.question_link, s.we_are)}
          href="https:/out-line.ae"
          target="_blank"
          rel="noreferrer"
        >
          out-line.ae
        </a>
      </div>
      <p className={cn(s.copyright, 'S--1-4', 'T--1-12', 'D--1-24')}>
        Copyright OUT-LINE GROUP FZCO 2023 All rights reserved
      </p>
    </footer>
  );
};
