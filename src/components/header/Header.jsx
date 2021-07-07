import MainHeader from './MainHeader';
import TopHeader from './TopHeader';

const Header = () => (
  <header className="header_wrapper top-0 left-0 w-full z-20 hidden lg:block">
    <TopHeader />
    <MainHeader />
  </header>
);
export default Header;
