import { motion } from 'framer-motion';
import { ease } from '../src/services/animation';
import Layout from '../src/components/utilities/Layout';
import InView from '../src/components/utilities/inView';
import HomeSlider from '../src/components/HomeSlider';
import FeaturedCategories from '../src/components/FeaturedCategories';
import OfferGrid from '../src/components/OfferGrid';
import InteractiveIcon from '../src/components/utilities/InterativeIcon';
import PopularCategories from '../src/components/PopularCategories';
import NewsLetter from '../src/components/NewsLetter';
import ProductGrid from '../src/components/ProductGrid';
import Brands from '../src/components/Brands';
import TopRatedProducts from '../src/components/TopRatedProducts';

const Home = () => (
  <Layout>
    <div className="section section__home_slider bg-white pt-4 pb-4">
      <div className="container">
        <HomeSlider />
      </div>
    </div>

    <div className="section section__home_category pb-20">
      <div className="container">
        <FeaturedCategories />
      </div>
    </div>

    <div className="section section__latest_products bg-theme_blue py-20">
      <div className="container">
        <InView
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { when: 'beforeChildren' } },
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
        </InView>
        <ProductGrid />
      </div>
    </div>

    <div
      className="section section__top_rated_products py-20"
      // style={{ backgroundImage: 'url(/images/blob-scene-pink.svg)' }}
    >
      <div className="container">
        <InView
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { when: 'beforeChildren' } },
          }}
          threshold={0.1}
        >
          <h2 className="text-3xl mb-6 overflow-hidden">
            <motion.span
              variants={{
                initial: { x: -300 },
                animate: { x: 0, transition: { ease, duration: 1 } },
              }}
              className="block"
            >
              Top Rated Products
            </motion.span>
          </h2>
        </InView>
        <TopRatedProducts />
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

    <div className="section section__brands py-20 bg-theme_blue">
      <div className="container">
        <InView
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.07 } },
          }}
          threshold={0}
        >
          <h2 className="text-3xl text-center mb-6 overflow-hidden">
            <motion.span
              variants={{
                initial: { y: -30 },
                animate: { y: 0, transition: { ease, duration: 1 } },
              }}
              className="block"
            >
              Our Partners
            </motion.span>
          </h2>
          <Brands />
        </InView>
      </div>
    </div>

    <div className="section py-20">
      <div className="container">
        <InteractiveIcon />
      </div>
    </div>
  </Layout>
);
export default Home;
