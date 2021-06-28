import InView from '../src/components/utilities/inView';
import HomeProductSlider from '../src/components/HomeProductSlider';
import CategoryGrid from '../src/components/CategoryGrid';
import dummyProducts from '../src/services/dummyProducts';
import ProductItem from '../src/components/ProductItem';

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

    <div className="section section__latest_product bg-theme_blue py-20">
      <div className="container">
        <div className="flex pb-5">
          <h2 className="text-3xl">Latest Products</h2>
        </div>
        <InView
          variants={{ animate: { transition: { when: 'beforeChildren', staggerChildren: 0.15 } } }}
          className="product_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {dummyProducts &&
            dummyProducts.map((product) => <ProductItem key={product.id} product={product} />)}
        </InView>
      </div>
    </div>
  </>
);
export default Home;
