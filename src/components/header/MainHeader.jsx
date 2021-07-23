import { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CartContext } from '../../context/CartContext';

import useFixedHeader from '../../hooks/useFixedHeader';
import CategoryDropdown from './partials/CategoryDropdown';
import Navigation from './partials/Navigation';
import SearchPopup from '../search/SearchPopup';
import CartSidebar from '../widgets/CartSidebar';

import HeartIcon from '../../../public/images/icons/heart.svg';
import CartIcon from '../../../public/images/icons/cart.svg';
import SearchIcon from '../../../public/images/icons/search.svg';

const MainHeader = () => {
  const isHeaderFixed = useFixedHeader();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [globalCart] = useContext(CartContext);

  const totalProducts = globalCart && globalCart.totalItems !== 0 ? globalCart.totalItems : null;

  const handleSearchPopupOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchPopupClose = () => {
    setIsSearchOpen(false);
  };

  const handleCartSidebarOpen = () => {
    setIsCartSidebarOpen(true);
  };

  const handleCartSidebarClose = () => {
    setIsCartSidebarOpen(false);
  };

  return (
    <div
      className={`main_header shadow text-[#777] z-[19] w-full top-0 left-0 transition py-1 bg-white ${
        isHeaderFixed ? 'fixed' : 'relative'
      }  `}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo_container w-[90px]">
            <Link href="/">
              <a className="flex items-center focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:ring-opacity-75">
                <Image
                  src="/images/next-store-logo.svg"
                  width={135}
                  height={70}
                  alt="Next Store Logo"
                />
              </a>
            </Link>
          </div>

          <Navigation />

          <div className="header_right_icons flex items-center justify-end">
            <div className="header_icon_wrap mr-3">
              <button
                onClick={handleSearchPopupOpen}
                type="button"
                className="relative bg-purple-200 text-black p-2 rounded-lg flex group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75"
              >
                <span className="svg_icon w-[1.2rem] group-hover:text-white">
                  <SearchIcon />
                </span>
              </button>
              <SearchPopup
                status={isSearchOpen}
                onOpen={handleSearchPopupOpen}
                onClose={handleSearchPopupClose}
              />
            </div>

            <div className="header_icon_wrap mr-3">
              <Link href="/wishlist">
                <a className="relative bg-pink-200 text-black p-2 rounded-lg flex group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75">
                  <span className="svg_icon w-[1.2rem] group-hover:text-white">
                    <HeartIcon />
                  </span>
                </a>
              </Link>
            </div>

            <div className="header_icon_wrap mr-3">
              <button
                type="button"
                onClick={handleCartSidebarOpen}
                className="relative bg-theme_green-300 text-black p-2 rounded-lg flex group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75"
              >
                <span className="svg_icon w-[1.2rem] group-hover:text-white">
                  <CartIcon />
                </span>
                {totalProducts && (
                  <span className="bg-theme_green text-white font-semibold text-xs h-5 w-5 rounded-full flex items-center justify-center absolute -top-2 -right-3">
                    {totalProducts}
                  </span>
                )}
              </button>
            </div>

            <CartSidebar
              status={isCartSidebarOpen}
              onOpen={handleCartSidebarOpen}
              onClose={handleCartSidebarClose}
              cart={globalCart}
              totalItems={totalProducts}
            />

            <CategoryDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
