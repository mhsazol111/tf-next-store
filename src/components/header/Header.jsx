import MainHeader from './MainHeader';
import TopHeader from './TopHeader';

import styles from '../../assets/scss/header.module.scss';

const Header = () => {
  console.log('header');
  return (
    <header className={styles.header_area}>
      <TopHeader />
      <MainHeader />
    </header>
  );
};
export default Header;
