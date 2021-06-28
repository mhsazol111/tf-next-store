import { motion } from 'framer-motion';
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
    <div className="section section__latest_product">
      <div className="container">
        <div className="flex">
          <h2>Latest Products</h2>
        </div>
        <motion.div className="product_grid flex">
          {dummyProducts &&
            dummyProducts.map((product) => (
              <div key={product.id} className="w-1/5">
                <ProductItem product={product} />
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  </>
);
export default Home;
