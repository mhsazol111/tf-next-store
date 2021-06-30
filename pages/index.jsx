import { motion } from 'framer-motion';
import { ease } from '../src/services/animation';

import InView from '../src/components/utilities/inView';
import HomeSlider from '../src/components/HomeSlider';
import FeaturedCategories from '../src/components/FeaturedCategories';
import dummyProducts from '../src/services/dummyProducts';
import ProductItem from '../src/components/ProductItem';
import OfferGrid from '../src/components/OfferGrid';
import InteractiveIcon from '../src/components/utilities/InterativeIcon';
import PopularCategories from '../src/components/PopularCategories';
import NewsLetter from '../src/components/NewsLetter';

const Home = () => (
  <>
    <div className="section section__home_slider bg-white pt-6 pb-10">
      <div className="container">
        <HomeSlider />
      </div>
    </div>

    <div className="section section__home_category pb-20">
      <div className="container">
        <FeaturedCategories />
      </div>
    </div>

    <div className="section section__latest_product bg-theme_blue py-20">
      <div className="container">
        <InView
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.15 } },
          }}
          threshold={0.1}
        >
          <h2 className="text-3xl mb-6 overflow-hidden">
            <motion.span
              variants={{
                initial: { x: -240 },
                animate: { x: 0, transition: { ease, duration: 1 } },
              }}
              className="block"
            >
              Latest Products
            </motion.span>
          </h2>
          <div className="product_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {dummyProducts &&
              dummyProducts.map((product) => <ProductItem key={product.id} product={product} />)}
          </div>
        </InView>
      </div>
    </div>

    <div className="section section__offer_grids py-20">
      <div className="container">
        <OfferGrid />
      </div>
    </div>

    <div className="section section__new_categories bg-theme_green-100 py-20">
      <div className="container">
        <InView
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.07 } },
          }}
          threshold={0}
        >
          <h2 className="text-3xl mb-6 overflow-hidden">
            <motion.span
              variants={{
                initial: { x: -300 },
                animate: { x: 0, transition: { ease, duration: 1 } },
              }}
              className="block"
            >
              Popular Categories
            </motion.span>
          </h2>
          <PopularCategories />
        </InView>
      </div>
    </div>

    <div className="section section__newsletter py-20">
      <div className="container">
        <NewsLetter />
      </div>
    </div>

    <div className="section py-20">
      <div className="container">
        <InteractiveIcon />
      </div>
    </div>
  </>
);
export default Home;
