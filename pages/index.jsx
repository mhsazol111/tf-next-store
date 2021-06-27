import HomeProductSlider from '../src/components/HomeProductSlider';
import CategoryGrid from '../src/components/CategoryGrid';

const Home = () => (
  <>
    <div className="section section__home_slider bg-white pt-6 pb-10">
      <div className="container">
        <HomeProductSlider />
      </div>
    </div>
    <div className="section section__home_category pb-20">
      <div className="container">
        <CategoryGrid />
      </div>
    </div>
  </>
);
export default Home;
