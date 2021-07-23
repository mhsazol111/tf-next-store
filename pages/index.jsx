import { motion } from 'framer-motion';
import { ease } from '../src/services/animation';
import Layout from '../src/components/widgets/Layout';
import InView from '../src/components/widgets/inView';
import HomeSlider from '../src/components/HomeSlider';
import FeaturedCategories from '../src/components/FeaturedCategories';
import OfferGrid from '../src/components/OfferGrid';
import InteractiveIcon from '../src/components/widgets/InterativeIcon';
import PopularCategories from '../src/components/PopularCategories';
import NewsLetter from '../src/components/NewsLetter';
import ProductGrid from '../src/components/ProductGrid';
import Brands from '../src/components/Brands';
import TopRatedProducts from '../src/components/TopRatedProducts';
import BestDeals from '../src/components/BestDeals';
import { focusClasses } from '../src/services/dummyAPI';

const Home = () => {
  const buttonClass = `text-xs uppercase font-semibold rounded-full px-4 py-2 min-w-[90px] bg-white ${focusClasses}`;

  return (
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
            className="flex justify-between items-center mb-7"
          >
            <h2 className="text-3xl overflow-hidden">
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
            <motion.div
              variants={{
                animate: {
                  transition: { when: 'beforeChildren', staggerChildren: 0.1 },
                },
              }}
              className="flex bg-white rounded-full p-1"
            >
              <motion.button
                variants={{
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0, duration: 0.5 },
                }}
                whileHover={{ backgroundColor: '#FDE68A' }}
                type="button"
                className={`${buttonClass} bg-yellow-200`}
              >
                All
              </motion.button>
              <span className="w-[1px] block bg-gray-200 mx-2" />
              <motion.button
                variants={{
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0, duration: 0.5 },
                }}
                whileHover={{ backgroundColor: '#FDE68A' }}
                type="button"
                className={buttonClass}
              >
                Top 10
              </motion.button>
              <span className="w-[1px] block bg-gray-200 mx-2" />
              <motion.button
                variants={{
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0, duration: 0.5 },
                }}
                whileHover={{ backgroundColor: '#FDE68A' }}
                type="button"
                className={buttonClass}
              >
                Best Seller
              </motion.button>
              <span className="w-[1px] block bg-gray-200 mx-2" />
              <motion.button
                variants={{
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0, duration: 0.5 },
                }}
                whileHover={{ backgroundColor: '#FDE68A' }}
                type="button"
                className={buttonClass}
              >
                Featured
              </motion.button>
            </motion.div>
          </InView>
          <ProductGrid />
        </div>
      </div>

      <div className="section section__top_rated_products py-20">
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

      <div className="section section__top_rated_products bg-theme_blue py-20">
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
                Best Deals
              </motion.span>
            </h2>
          </InView>
          <BestDeals />
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
              animate: {
                opacity: 1,
                transition: { when: 'beforeChildren', staggerChildren: 0.07 },
              },
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
              animate: {
                opacity: 1,
                transition: { when: 'beforeChildren', staggerChildren: 0.07 },
              },
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
};
export default Home;
