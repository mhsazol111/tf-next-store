import Image from 'next/image';

import ArrowDown from '../../../public/images/icons/down-arrow.svg';
import PhoneIcon from '../../../public/images/icons/telephone.svg';
import EnvelopeIcon from '../../../public/images/icons/mail.svg';
import UserIcon from '../../../public/images/icons/user.svg';

import styles from '../../assets/scss/header.module.scss';

const TopHeader = () => (
  <div className={`${styles.top_header} bg-theme_gray text-[#777] text-sm py-1 z-20 relative`}>
    <div className="container">
      <div className="flex justify-between">
        <div className="left_col flex items-center">
          <a href="tel:123456" className="flex items-center mr-5 hover:text-theme_green">
            <span className="svg_icon w-[.9rem]">
              <PhoneIcon />
            </span>
            <span className="block ml-1">Call: +1234567890</span>
          </a>
          <a href="mailto:example@email.com" className="flex items-center hover:text-theme_green">
            <span className="svg_icon w-[1rem]">
              <EnvelopeIcon />
            </span>
            <span className="block ml-1">example@email.com</span>
          </a>
        </div>

        <div className="right_col flex items-center justify-items-end">
          <div className="top_header_dropdown relative group mr-3">
            <a href="/" className="flex items-center w-full px-2 py-1 hover:bg-theme_gray">
              <span className="mr-2">USD</span>
              <span className="svg_icon w-[.6rem]">
                <ArrowDown />
              </span>
            </a>
            <div className="top_header_menu absolute w-full top-[33px] bg-white transition-all ease-in duration-150 transform origin-top scale-y-0 opacity-0 rounded-md pt-2 pb-1 shadow-md group-hover:scale-y-100 group-hover:opacity-100">
              <a href="/" className="block w-full px-2 py-1 hover:bg-theme_gray">
                USD
              </a>
              <a href="/" className="block w-full px-2 py-1 hover:bg-theme_gray">
                EUR
              </a>
            </div>
          </div>

          <div className="top_header_dropdown relative group mr-4 w-[106px]">
            <a href="/" className="flex flex-wrap items-center w-full">
              <Image src="/images/icons/us-flag.svg" width={30} height={20} alt="English" />
              <span className="ml-1 mr-2">English</span>
              <span className="svg_icon w-[.6rem]">
                <ArrowDown />
              </span>
            </a>
            <div className="top_header_menu absolute w-full top-[27px] bg-white transition-all ease-in duration-150 transform origin-top scale-y-0 opacity-0 rounded-md py-2 shadow-md group-hover:scale-y-100 group-hover:opacity-100">
              <a
                href="/"
                className="flex flex-wrap items-center w-full px-2 py-1 hover:bg-theme_gray"
              >
                <Image src="/images/icons/us-flag.svg" width={30} height={20} alt="English" />
                <span className="ml-1">English</span>
              </a>
              <a
                href="/"
                className="flex flex-wrap items-center w-full px-2 py-1 hover:bg-theme_gray"
              >
                <Image src="/images/icons/fr-flag.svg" width={30} height={20} alt="French" />
                <span className="ml-1">French</span>
              </a>
              <a
                href="/"
                className="flex flex-wrap items-center w-full px-2 py-1 hover:bg-theme_gray"
              >
                <Image src="/images/icons/es-flag.svg" width={30} height={20} alt="Spanish" />
                <span className="ml-1">Spanish</span>
              </a>
            </div>
          </div>

          <button
            type="button"
            className="group bg-white rounded-full flex items-center pl-[3px] pr-2 py-[3px] transition-all ease-in-out hover:bg-theme_green"
          >
            <span className="bg-theme_gray rounded-full flex w-6 h-6 items-center justify-center transition-all ease-in-out group-hover:bg-white ">
              <span className="w-[15px] svg_icon">
                <UserIcon />
              </span>
            </span>
            <span className="ml-2 transition-all ease-in-out group-hover:text-white">Login</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TopHeader;
