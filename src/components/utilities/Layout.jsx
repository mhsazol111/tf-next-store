import useFixedHeader from '../../hooks/useFixedHeader';
import Header from '../header/Header';

const Layout = ({ children }) => {
  const isHeaderFixed = useFixedHeader();
  return (
    <div id="page_container" className="overflow-hidden">
      <Header />
      <div className={`main_content ${isHeaderFixed ? 'mt-[60px]' : ''}`}>{children}</div>
    </div>
  );
};

export default Layout;
