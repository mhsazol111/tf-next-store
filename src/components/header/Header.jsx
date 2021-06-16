import MainHeader from './MainHeader';
import TopHeader from './TopHeader';

import styles from '../../assets/scss/header.module.scss';

const Header = () => (
  <header className={`${styles.header_area} pb-2 bg-white shadow-md`}>
    <TopHeader />
    <MainHeader />
  </header>
);
export default Header;
