import { useState } from 'react';
import LoginPopup from '../widgets/LoginPopup';

import PhoneIcon from '../../../public/images/icons/telephone.svg';
import EnvelopeIcon from '../../../public/images/icons/mail.svg';
import UserIcon from '../../../public/images/icons/user.svg';
import CurrencyDropdown from './partials/CurrencyDropdown';
import LangDropdown from './partials/LangDropdown';
import { focusClasses } from '../../services/dummyAPI';

const TopHeader = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginPopupOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginPopupClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="top_header bg-theme_blue text-[#777] text-[13px] py-1 z-20 relative px-4">
      <div className="container">
        <div className="flex justify-between">
          <div className="left_col flex items-center">
            <a
              href="tel:123456"
              className="flex items-center mr-5 hover:text-theme_green focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75"
            >
              <span className="svg_icon w-[.9rem]">
                <PhoneIcon />
              </span>
              <span className="block ml-1">Call: +1234567890</span>
            </a>
            <a
              href="mailto:example@email.com"
              className="flex items-center hover:text-theme_green focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75"
            >
              <span className="svg_icon w-[1rem]">
                <EnvelopeIcon />
              </span>
              <span className="block ml-1">example@email.com</span>
            </a>
          </div>

          <div className="right_col flex items-center justify-items-end">
            <div className="relative group mr-3">
              <CurrencyDropdown />
            </div>

            <div className="relative group mr-3">
              <LangDropdown />
            </div>

            <button
              type="button"
              onClick={handleLoginPopupOpen}
              className={`group bg-theme_green-300 rounded-full flex items-center pl-[3px] pr-2 py-[3px] transition ease-in-out hover:bg-theme_green ${focusClasses}`}
            >
              <span className="bg-white rounded-full flex w-6 h-6 items-center justify-center transition ease-in-out group-hover:bg-white ">
                <span className="w-[15px] svg_icon">
                  <UserIcon />
                </span>
              </span>
              <span className="ml-2 transition-all ease-in-out group-hover:text-white">Login</span>
            </button>

            <LoginPopup
              status={isLoginOpen}
              onOpen={handleLoginPopupOpen}
              onClose={handleLoginPopupClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
