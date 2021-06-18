import CategoryDropdown from './partials/CategoryDropdown';
import PrimaryNav from './partials/PrimaryNav';

const Navigation = () => (
  <div className="header_navigation_wrapper relative z-[18] text-sm">
    <div className="container">
      <div className="flex justify-between items-center">
        <CategoryDropdown />
        <PrimaryNav />
      </div>
    </div>
  </div>
);
export default Navigation;
