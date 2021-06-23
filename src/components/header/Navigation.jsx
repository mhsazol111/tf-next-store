import CategoryDropdown from './partials/CategoryDropdown';
import PrimaryNavUI from './partials/PrimaryNavUI';

const Navigation = () => (
  <div className="header_navigation_wrapper relative z-[18] text-sm">
    <div className="container">
      <div className="flex justify-between items-end">
        <CategoryDropdown />
        {/* <PrimaryNavUI /> */}
        <PrimaryNavUI />
      </div>
    </div>
  </div>
);
export default Navigation;
