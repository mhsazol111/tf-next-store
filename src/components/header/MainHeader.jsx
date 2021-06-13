import Link from 'next/link';
import Image from 'next/image';
import styles from '../../assets/scss/header.module.scss';

const MainHeader = () => {
  console.log('');
  return (
    <div className={`${styles.main_header} text-[#777] py-5`}>
      <div className="container">
        <div className="flex justify-between">
          <div className="logo_container">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/images/next-store-logo.svg"
                  width={135}
                  height={70}
                  alt="Next Store Logo"
                />
              </a>
            </Link>
          </div>
          <div className="search_wrapper flex flex-1 items-center mx-10">
            <div className="search_wrapper_inner relative flex flex-1 max-w-[800px] items-center mx-auto">
              <div className="search_category_wrapper relative group left-0">
                <div className="bg-theme_gray flex items-center w-full pl-5 pr-2 h-12 rounded-l-full border-t-2 border-b-2 border-solid border-theme_gray">
                  <span className="mr-2">All Categories</span>
                  <i className="ri-arrow-down-s-line" />
                </div>
                <div className="absolute w-full top-full bg-white transition-all ease-in duration-150 transform origin-top scale-y-0 opacity-0 rounded-md py-2 shadow-md group-hover:scale-y-100 group-hover:opacity-100">
                  <div className="block w-full px-3 py-2 hover:bg-theme_gray">Man Clothes</div>
                  <div className="block w-full px-3 py-2 hover:bg-theme_gray">Accessories</div>
                  <div className="block w-full px-3 py-2 hover:bg-theme_gray">Woman Clothes</div>
                  <div className="block w-full px-3 py-2 hover:bg-theme_gray">Shoes</div>
                  <div className="block w-full px-3 py-2 hover:bg-theme_gray">Gifts</div>
                </div>
              </div>

              <div className="search_input_wrap flex flex-1">
                <input
                  type="text"
                  className="w-full h-12 border-t-2 border-b-2 border-solid border-theme_gray px-5 focus:outline-none"
                  placeholder="Search Product..."
                />
              </div>

              <button
                type="button"
                className="search_icon bg-theme_gray relative flex items-center justify-center h-12 w-16 border-t-2 border-b-2 border-solid border-theme_gray rounded-r-full"
              >
                <i className="text-lg ri-search-line" />
              </button>
            </div>
          </div>
          <div className="header_right_icons flex items-center justify-end">
            <div className="header_icon_wrap">
              <Link href="/wishlist">
                <a className="relative flex group">
                  <i className="ri-heart-line text-4xl group-hover:text-theme_green" />
                  <span className="bg-theme_green text-white h-5 w-5 rounded-full flex items-center justify-center absolute -top-1 -right-3">
                    0
                  </span>
                </a>
              </Link>
            </div>
            <div className="header_icon_wrap ml-6">
              <Link href="/cart">
                <a className="relative flex group">
                  <i className="ri-shopping-bag-line text-4xl group-hover:text-theme_green" />
                  <span className="bg-theme_green text-white h-5 w-5 rounded-full flex items-center justify-center absolute -top-1 -right-3">
                    3
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
