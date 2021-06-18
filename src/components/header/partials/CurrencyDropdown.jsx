import Link from 'next/link';
import ArrowDown from '../../../../public/images/icons/down-arrow.svg';

const CurrencyDropdown = () => (
  <div className="top_header_dropdown">
    <Link href="/">
      <a className="flex items-center w-full px-2 py-1 hover:bg-theme_gray">
        <span className="mr-2">USD</span>
        <span className="svg_icon w-[.6rem]">
          <ArrowDown />
        </span>
      </a>
    </Link>
    <div className="top_header_menu absolute w-full top-[33px] bg-white transition-all ease-in duration-150 transform origin-top scale-y-0 opacity-0 rounded-md pt-2 pb-1 shadow-md group-hover:scale-y-100 group-hover:opacity-100">
      <Link href="/">
        <a className="block w-full px-2 py-1 hover:bg-theme_gray">USD</a>
      </Link>
      <Link href="/">
        <a className="block w-full px-2 py-1 hover:bg-theme_gray">EUR</a>
      </Link>
    </div>
  </div>
);

export default CurrencyDropdown;
