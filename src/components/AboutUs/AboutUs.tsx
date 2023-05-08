import React, { useState } from 'react';
import s from './AboutUs.module.scss';
import cn from 'classnames';

import dot1 from '../../images/dots/dot1.webp';
import dot2 from '../../images/dots/dot2.webp';
import dot3 from '../../images/dots/dot3.webp';

export const AboutUs: React.FC = () => {
  const [showMoreDescr, setShowMoreDescr] = useState(false);
  const [showMoreCorpEstablish, setShowMoreCorpEstablish] = useState(false);
  const [showMoreIntExpansion, setShowMoreIntExpansion] = useState(false);
  const [showMorePrMengm, setShowMorePrMengm] = useState(false);

  return (
    <section className={s.section} id="aboutUs">
      <div className={cn(s.sectionTitle, 'T--1-5', 'D--1-11')}>
        <div className={cn(s.dots, 'T--1-2')}>
          <img src={dot1} alt="dot" className={s.dot1} />
          <img src={dot2} alt="dot" className={s.dot2} />
          <img src={dot3} alt="dot" className={s.dot3} />
        </div>
        <div className={cn(s.text_wrapper, 'T--1-6')}>
          <span className={s.sectionTitle__main}>
            About <br />
          </span>
          <span className={s.sectionTitle__secoundary}>Us</span>
        </div>
      </div>

      <div className={cn(s.description, 'T--1-6', 'D--1-7')}>
        <div
          className={cn(s.description__text_wrapper, {
            [s.opened]: showMoreDescr,
          })}
        >
          <p>
            As a purpose-based team, we work on the opportunities and challenges
            that transform businesses, governments, and communities. We build
            confidence in what we can achieve together with our clients.
          </p>
          <br />
          <p>
            We recognize the diversity of our client&apos;s needs, are ready to
            solve challenges and bring people, ideas, and analyses together. We
            think deeply and adaptively to find the best possible answers,
            creating dynamic commercial projects and assisting businesses in
            their growth.
          </p>
        </div>
        <div
          className={s.showMoreBtn}
          onClick={() => setShowMoreDescr(!showMoreDescr)}
        >
          {!showMoreDescr ? 'Read more' : 'Hide'}
        </div>
      </div>

      <svg
        width="551"
        height="348"
        viewBox="0 0 551 348"
        className={cn(s.animation, 'T--7-12', 'D--2-7')}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.122 70H49.2V67.79H42.825V65.019H48.248V62.877H42.825V60.31H49.013V58.1H40.122V70ZM50.108 70H53.474L56.279 66.226L59.084 70H62.467L57.86 64.05L62.467 58.1H59.084L56.279 61.874L53.474 58.1H50.108L54.715 64.05L50.108 70ZM63.663 70H72.741V67.79H66.366V65.019H71.789V62.877H66.366V60.31H72.554V58.1H63.663V70ZM80.047 70.272C83.175 70.272 85.453 68.402 85.708 65.41H82.835C82.563 66.838 81.696 67.824 80.047 67.824C77.905 67.824 76.851 66.362 76.851 64.05C76.851 61.738 77.905 60.276 80.047 60.276C81.696 60.276 82.563 61.262 82.835 62.69H85.708C85.453 59.698 83.175 57.828 80.047 57.828C76.477 57.828 74.012 60.361 74.012 64.05C74.012 67.739 76.477 70.272 80.047 70.272ZM92.4839 70.272C95.2889 70.272 97.5669 68.98 97.5669 65.648V58.1H94.8639V65.342C94.8639 66.94 94.1669 67.994 92.4839 67.994C90.8009 67.994 90.1209 66.94 90.1209 65.342V58.1H87.4009V65.648C87.4009 68.98 89.6959 70.272 92.4839 70.272ZM102.833 70H105.553V60.31H109.463V58.1H98.923V60.31H102.833V70ZM110.928 70H113.648V58.1H110.928V70ZM121.604 70.272C125.225 70.272 127.758 67.739 127.758 64.05C127.758 60.361 125.225 57.828 121.604 57.828C117.983 57.828 115.45 60.361 115.45 64.05C115.45 67.739 117.983 70.272 121.604 70.272ZM118.323 64.05C118.323 61.738 119.445 60.276 121.604 60.276C123.763 60.276 124.868 61.738 124.868 64.05C124.868 66.362 123.763 67.824 121.604 67.824C119.445 67.824 118.323 66.362 118.323 64.05ZM129.555 70H132.224L132.156 62.231L137.29 70H140.044V58.1H137.375L137.443 66.022L132.309 58.1H129.555V70Z"
          fill="var(--main-text)"
        />
        <path
          d="M0.122 125H2.825V120.274H8.248V118.081H2.825V115.31H9.013V113.1H0.122V125ZM16.0772 125.272C19.6982 125.272 22.2312 122.739 22.2312 119.05C22.2312 115.361 19.6982 112.828 16.0772 112.828C12.4562 112.828 9.92316 115.361 9.92316 119.05C9.92316 122.739 12.4562 125.272 16.0772 125.272ZM12.7962 119.05C12.7962 116.738 13.9182 115.276 16.0772 115.276C18.2362 115.276 19.3412 116.738 19.3412 119.05C19.3412 121.362 18.2362 122.824 16.0772 122.824C13.9182 122.824 12.7962 121.362 12.7962 119.05ZM24.0282 125H26.7313V120.937H28.9923C30.1653 120.937 30.6243 121.294 30.7263 122.484C30.8623 124.014 31.0323 124.677 31.1683 125H33.9563C33.7693 124.524 33.6673 123.725 33.4973 122.093C33.3443 120.563 32.6303 119.662 30.9643 119.509V119.407C32.3923 119.407 33.8203 118.319 33.8203 116.585C33.8203 114.511 32.3073 113.1 29.6553 113.1H24.0282V125ZM26.7313 118.88V115.242H28.9753C30.0633 115.242 31.0833 115.735 31.0833 116.959C31.0833 118.302 30.0633 118.88 28.9753 118.88H26.7313ZM35.9316 125H38.5326L38.4646 116.534H38.5496L41.2186 125H44.0916L46.7606 116.534H46.8456L46.7776 125H49.3786V113.1H45.5026L42.6976 122.45H42.5956L39.7906 113.1H35.9316V125ZM56.601 125.272C59.406 125.272 61.684 123.98 61.684 120.648V113.1H58.981V120.342C58.981 121.94 58.284 122.994 56.601 122.994C54.918 122.994 54.238 121.94 54.238 120.342V113.1H51.518V120.648C51.518 123.98 53.813 125.272 56.601 125.272ZM63.8222 125H72.4242V122.79H66.5252V113.1H63.8222V125ZM72.9291 125H75.8191L76.8221 122.297H81.6331L82.6361 125H85.5431L80.8681 113.1H77.6041L72.9291 125ZM77.5361 120.223L79.1851 115.599H79.2871L80.9361 120.223H77.5361ZM88.8809 125H91.6009V115.31H95.5109V113.1H84.9709V115.31H88.8809V125ZM96.9755 125H99.6955V113.1H96.9755V125ZM107.651 125.272C111.272 125.272 113.805 122.739 113.805 119.05C113.805 115.361 111.272 112.828 107.651 112.828C104.03 112.828 101.497 115.361 101.497 119.05C101.497 122.739 104.03 125.272 107.651 125.272ZM104.37 119.05C104.37 116.738 105.492 115.276 107.651 115.276C109.81 115.276 110.915 116.738 110.915 119.05C110.915 121.362 109.81 122.824 107.651 122.824C105.492 122.824 104.37 121.362 104.37 119.05ZM115.602 125H118.271L118.203 117.231L123.337 125H126.091V113.1H123.422L123.49 121.022L118.356 113.1H115.602V125ZM134.969 125.238C136.499 125.238 137.655 124.728 138.59 123.793C139.508 124.813 140.001 125 141.157 125H141.463V124.048H141.225C140.494 124.048 140.103 123.895 139.287 123.011C139.967 121.991 140.409 120.648 140.511 118.88H139.44C139.355 120.24 139.049 121.413 138.539 122.28L135.36 118.999C136.958 118.166 138.318 117.265 138.318 115.497C138.318 114.12 137.179 112.862 135.241 112.862C133.422 112.862 132.062 114.069 132.062 115.718C132.062 116.925 132.912 117.877 133.847 118.863C132.47 119.628 131.263 120.512 131.263 122.161C131.263 124.133 132.708 125.238 134.969 125.238ZM132.402 122.076C132.402 120.835 133.354 120.121 134.425 119.475L137.91 123.096C137.196 123.844 136.363 124.303 135.105 124.303C133.49 124.303 132.402 123.368 132.402 122.076ZM133.15 115.684C133.15 114.596 133.983 113.746 135.224 113.746C136.482 113.746 137.264 114.46 137.264 115.667C137.264 116.942 136.142 117.673 134.782 118.37C133.813 117.35 133.15 116.585 133.15 115.684ZM0.122 151H2.825V146.937H5.086C6.259 146.937 6.718 147.294 6.82 148.484C6.956 150.014 7.126 150.677 7.262 151H10.05C9.863 150.524 9.761 149.725 9.591 148.093C9.438 146.563 8.724 145.662 7.058 145.509V145.407C8.486 145.407 9.914 144.319 9.914 142.585C9.914 140.511 8.401 139.1 5.749 139.1H0.122V151ZM2.825 144.88V141.242H5.069C6.157 141.242 7.177 141.735 7.177 142.959C7.177 144.302 6.157 144.88 5.069 144.88H2.825ZM12.0253 151H21.1033V148.79H14.7283V146.019H20.1513V143.877H14.7283V141.31H20.9163V139.1H12.0253V151ZM31.3333 150.439L32.2343 151.391H35.1583L33.0333 149.045C33.9003 148.144 34.5293 146.716 34.5293 145.05C34.5293 141.361 32.0813 138.828 28.4603 138.828C24.8393 138.828 22.3913 141.361 22.3913 145.05C22.3913 148.739 24.8393 151.272 28.4603 151.272C29.5993 151.272 30.8233 150.881 31.3333 150.439ZM25.2643 145.05C25.2643 142.738 26.3013 141.276 28.4603 141.276C30.6193 141.276 31.6393 142.738 31.6393 145.05C31.6393 145.9 31.5203 146.665 31.2483 147.243L30.1263 146.104H27.2703L29.6503 148.671C29.3103 148.773 28.8853 148.824 28.4603 148.824C26.3013 148.824 25.2643 147.362 25.2643 145.05ZM41.9419 151.272C44.7469 151.272 47.0249 149.98 47.0249 146.648V139.1H44.3219V146.342C44.3219 147.94 43.6249 148.994 41.9419 148.994C40.2589 148.994 39.5789 147.94 39.5789 146.342V139.1H36.8589V146.648C36.8589 149.98 39.1539 151.272 41.9419 151.272ZM49.163 151H51.883V139.1H49.163V151ZM54.1269 151H63.2049V148.79H56.8299V146.019H62.2529V143.877H56.8299V141.31H63.0179V139.1H54.1269V151ZM65.1669 151H67.8699V146.937H70.1309C71.3039 146.937 71.7629 147.294 71.8649 148.484C72.0009 150.014 72.1709 150.677 72.3069 151H75.0949C74.9079 150.524 74.8059 149.725 74.6359 148.093C74.4829 146.563 73.7689 145.662 72.1029 145.509V145.407C73.5309 145.407 74.9589 144.319 74.9589 142.585C74.9589 140.511 73.4459 139.1 70.7939 139.1H65.1669V151ZM67.8699 144.88V141.242H70.1139C71.2019 141.242 72.2219 141.735 72.2219 142.959C72.2219 144.302 71.2019 144.88 70.1139 144.88H67.8699ZM77.0702 151H79.6712L79.6032 142.534H79.6882L82.3572 151H85.2302L87.8992 142.534H87.9842L87.9162 151H90.5172V139.1H86.6412L83.8362 148.45H83.7342L80.9292 139.1H77.0702V151ZM92.7587 151H101.837V148.79H95.4617V146.019H100.885V143.877H95.4617V141.31H101.65V139.1H92.7587V151ZM103.799 151H106.468L106.4 143.231L111.534 151H114.288V139.1H111.619L111.687 147.022L106.553 139.1H103.799V151ZM119.66 151H122.38V141.31H126.29V139.1H115.75V141.31H119.66V151ZM131.822 151.272C134.831 151.272 136.701 149.946 136.701 147.668C136.701 142.959 130.394 144.608 130.394 142.279C130.394 141.429 131.176 140.936 132.23 140.936C133.403 140.936 134.015 141.786 134.049 142.806H136.905C136.905 140.222 135.222 138.828 132.332 138.828C129.408 138.828 127.538 140.137 127.538 142.398C127.538 147.09 133.743 145.475 133.743 147.787C133.743 148.688 132.978 149.147 131.89 149.147C130.683 149.147 130.054 148.28 130.02 147.26H127.079C127.079 149.861 128.847 151.272 131.822 151.272Z"
          fill="var(--main-text)"
        />
        <path
          d="M58.122 206H60.825V201.274H66.248V199.081H60.825V196.31H67.013V194.1H58.122V206ZM68.6142 206H71.3172V201.937H73.5782C74.7512 201.937 75.2102 202.294 75.3122 203.484C75.4482 205.014 75.6182 205.677 75.7542 206H78.5422C78.3552 205.524 78.2532 204.725 78.0832 203.093C77.9302 201.563 77.2162 200.662 75.5502 200.509V200.407C76.9782 200.407 78.4062 199.319 78.4062 197.585C78.4062 195.511 76.8932 194.1 74.2412 194.1H68.6142V206ZM71.3172 199.88V196.242H73.5612C74.6492 196.242 75.6692 196.735 75.6692 197.959C75.6692 199.302 74.6492 199.88 73.5612 199.88H71.3172ZM85.2661 206.272C88.0711 206.272 90.3491 204.98 90.3491 201.648V194.1H87.6461V201.342C87.6461 202.94 86.9491 203.994 85.2661 203.994C83.5831 203.994 82.9031 202.94 82.9031 201.342V194.1H80.1831V201.648C80.1831 204.98 82.4781 206.272 85.2661 206.272ZM92.4872 206H95.2072V194.1H92.4872V206ZM100.579 206H103.299V196.31H107.209V194.1H96.6691V196.31H100.579V206ZM108.674 206H111.394V194.1H108.674V206ZM119.35 206.272C122.971 206.272 125.504 203.739 125.504 200.05C125.504 196.361 122.971 193.828 119.35 193.828C115.729 193.828 113.196 196.361 113.196 200.05C113.196 203.739 115.729 206.272 119.35 206.272ZM116.069 200.05C116.069 197.738 117.191 196.276 119.35 196.276C121.509 196.276 122.614 197.738 122.614 200.05C122.614 202.362 121.509 203.824 119.35 203.824C117.191 203.824 116.069 202.362 116.069 200.05ZM127.301 206H129.97L129.902 198.231L135.036 206H137.79V194.1H135.121L135.189 202.022L130.055 194.1H127.301V206Z"
          fill="var(--main-text)"
        />
        <path
          d="M58.122 266H60.825V262.26H63.392C66.129 262.26 67.863 260.696 67.863 258.18C67.863 255.681 66.129 254.1 63.392 254.1H58.122V266ZM60.825 260.118V256.242H63.069C64.225 256.242 65.075 256.871 65.075 258.18C65.075 259.506 64.225 260.118 63.069 260.118H60.825ZM69.4941 266H78.0961V263.79H72.1971V254.1H69.4941V266ZM78.601 266H81.491L82.494 263.297H87.305L88.308 266H91.215L86.54 254.1H83.276L78.601 266ZM83.208 261.223L84.857 256.599H84.959L86.608 261.223H83.208ZM92.4706 266H95.1396L95.0716 258.231L100.206 266H102.96V254.1H100.291L100.359 262.022L95.2246 254.1H92.4706V266ZM105.204 266H107.873L107.805 258.231L112.939 266H115.693V254.1H113.024L113.092 262.022L107.958 254.1H105.204V266ZM117.937 266H120.657V254.1H117.937V266ZM122.901 266H125.57L125.502 258.231L130.636 266H133.39V254.1H130.721L130.789 262.022L125.655 254.1H122.901V266ZM141.194 266.272C145.104 266.272 147.263 263.739 146.906 259.71H140.701V261.818H144.033C143.999 262.94 142.928 263.824 141.33 263.824C139.188 263.824 138.032 262.362 138.032 260.05C138.032 257.738 139.086 256.276 141.228 256.276C142.877 256.276 143.761 257.16 144.016 258.282H146.889C146.651 255.596 144.356 253.828 141.228 253.828C137.658 253.828 135.193 256.361 135.193 260.05C135.193 263.739 137.437 266.272 141.194 266.272Z"
          fill="var(--main-text)"
        />
        <path
          d="M355.513 0C270.73 0 202 68.7301 202 153.513C202 217.135 240.702 271.717 295.848 295L497 93.8481C473.717 38.7024 419.135 0 355.513 0Z"
          fill="var(--logo)"
        />
        <path
          d="M496 94C504 110.5 509 134.118 509 153.5C509 238.276 440.276 307 355.5 307C334.594 307 314.164 301.569 296 294"
          stroke="var(--logo)"
          strokeWidth="2"
          fill="transparent"
        />
        <line
          x1="549.085"
          y1="41.211"
          x2="278.035"
          y2="346.915"
          stroke="var(--logo)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="158.5"
          y1="64.5"
          x2="198.5"
          y2="64.5"
          stroke="#CED2E5"
          strokeLinecap="round"
        />
        <line
          x1="153.5"
          y1="133.5"
          x2="193.5"
          y2="133.5"
          stroke="#CED2E5"
          strokeLinecap="round"
        />
        <line
          x1="153.5"
          y1="200.5"
          x2="193.5"
          y2="200.5"
          stroke="#CED2E5"
          strokeLinecap="round"
        />
        <line
          x1="167.5"
          y1="259.5"
          x2="207.5"
          y2="259.5"
          stroke="#CED2E5"
          strokeLinecap="round"
        />
      </svg>

      <div
        className={cn(
          s.enterpriseDev,
          s.corporateEstablishment,
          'T--1-4',
          'D--17-19'
        )}
      >
        <div className={s.entDevHead}>
          <p className={s.entDevHead__name}>
            <span>CORPORATE</span> ESTABLISHMENT
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreCorpEstablish })}
            onClick={() => setShowMoreCorpEstablish(!showMoreCorpEstablish)}
          >
            <div className={cn(s.arrow)}></div>
          </div>
        </div>
        <p
          className={cn(s.enterpriseDev__block_description, {
            [s.opened]: showMoreCorpEstablish,
          })}
        >
          Setting up a company in UAE / United Arab Emirates doesn’t have to be
          complicated, we are ready to guide you through every step of the
          process, from deciding the ideal business structure to obtaining the
          necessary registrations and approvals. We cover an exhaustive list of
          services to guarantee a seamless registration process from l advice on
          deciding the most suitable business structure all way to submission of
          necessary financial statements on yearly basis.
        </p>

        <div
          className={s.description_block_btn}
          onClick={() => setShowMoreCorpEstablish(!showMoreCorpEstablish)}
        >
          {!showMoreCorpEstablish ? 'Read more' : 'Hide'}
        </div>
      </div>
      <div
        className={cn(
          s.enterpriseDev,
          s.internationalExpansion,
          'T--5-8',
          'D--20-21'
        )}
      >
        <div className={s.entDevHead}>
          <p className={s.entDevHead__name}>
            <span>INTERNATIONAL</span> EXPANSION
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMoreIntExpansion })}
            onClick={() => setShowMoreIntExpansion(!showMoreIntExpansion)}
          >
            <div className={cn(s.arrow)}></div>
          </div>
        </div>
        <p
          className={cn(s.enterpriseDev__block_description, {
            [s.opened]: showMoreIntExpansion,
          })}
        >
          Global expansion service is designed to help build strong business
          foundations in a new market. Having a clear strategy and support all
          the way through. Expansion requires knowledge of local laws and new
          cultural and economic realities. We will ensure the whole process runs
          smoothly and effortlessly, meets all the local regulations, and also
          deal with HR, financial and legal issues.
        </p>
        <div
          className={s.description_block_btn}
          onClick={() => setShowMoreIntExpansion(!showMoreIntExpansion)}
        >
          {!showMoreIntExpansion ? 'Read more' : 'Hide'}
        </div>
      </div>
      <div
        className={cn(
          s.enterpriseDev,
          s.projectManagement,
          'T--9-12',
          'D--22-23'
        )}
      >
        <div className={s.entDevHead}>
          <p className={s.entDevHead__name}>
            <span>END-TO-END</span> PROJECT MANAGEMENT
          </p>
          <div
            className={cn(s.buttonArrow, { [s.active]: showMorePrMengm })}
            onClick={() => setShowMorePrMengm(!showMorePrMengm)}
          >
            <div className={cn(s.arrow)}></div>
          </div>
        </div>
        <p
          className={cn(s.enterpriseDev__block_description, {
            [s.opened]: showMorePrMengm,
          })}
        >
          With an intimate knowledge of all facets of local regulations and
          statutory requirements and long-term relationships with trusted
          service providers and partners, assuring that the project we undertake
          runs smoothly. Our Project Management services are the control center
          for a project – the central point of contact for all parties involved
          in the day-to-day activities of a project, providing a grounded and
          informed perspective on the project, that ensures all work is carried
          out efficiently and effectively and meets cost and quality
          expectations.
        </p>
        <div
          className={s.description_block_btn}
          onClick={() => setShowMorePrMengm(!showMorePrMengm)}
        >
          {!showMorePrMengm ? 'Read more' : 'Hide'}
        </div>
      </div>
    </section>
  );
};
