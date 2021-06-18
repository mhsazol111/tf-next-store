import Image from 'next/image';
import Link from 'next/link';
import ArrowDown from '../../../../public/images/icons/down-arrow.svg';

const LangDropdown = () => (
  <div className="top_header_dropdown w-[106px]">
    <Link href="/">
      <a className="flex flex-wrap items-center w-full">
        <Image src="/images/icons/us-flag.svg" width={30} height={20} alt="English" />
        <span className="ml-1 mr-2">English</span>
        <span className="svg_icon w-[.6rem]">
          <ArrowDown />
        </span>
      </a>
    </Link>
    <div className="top_header_menu absolute w-full top-[27px] bg-white transition-all ease-in duration-150 transform origin-top scale-y-0 opacity-0 rounded-md py-2 shadow-md group-hover:scale-y-100 group-hover:opacity-100">
      <Link href="/">
        <a className="flex flex-wrap items-center w-full px-2 py-1 hover:bg-theme_gray">
          <Image src="/images/icons/us-flag.svg" width={30} height={20} alt="English" />
          <span className="ml-1">English</span>
        </a>
      </Link>
      <Link href="/">
        <a className="flex flex-wrap items-center w-full px-2 py-1 hover:bg-theme_gray">
          <Image src="/images/icons/fr-flag.svg" width={30} height={20} alt="French" />
          <span className="ml-1">French</span>
        </a>
      </Link>
      <Link href="/">
        <a className="flex flex-wrap items-center w-full px-2 py-1 hover:bg-theme_gray">
          <Image src="/images/icons/es-flag.svg" width={30} height={20} alt="Spanish" />
          <span className="ml-1">Spanish</span>
        </a>
      </Link>
    </div>
  </div>
);

export default LangDropdown;
