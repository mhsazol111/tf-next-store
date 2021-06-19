import MainHeader from './MainHeader';
import TopHeader from './TopHeader';
import Navigation from './Navigation';

import styles from '../../assets/scss/header.module.scss';

const Header = () => (
  <header className={`${styles.header_area} bg-white shadow-md`}>
    <TopHeader />
    <MainHeader />
    <Navigation />
  </header>
);
export default Header;
