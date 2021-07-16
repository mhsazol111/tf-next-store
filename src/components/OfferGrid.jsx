import { motion } from 'framer-motion';
import Link from 'next/link';
import { focusClasses } from '../services/dummyAPI';
import InView from './utilities/inView';

const OfferGrid = () => (
  <InView
    variants={{
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
    }}
    className="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[550px]"
  >
    <motion.div
      variants={{
        initial: { opacity: 0, x: -30 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.15 },
        },
      }}
      className="row-span-4 rounded-3xl flex items-center min-h-[280px] lg:min-h-0 px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-4 bg-[#fce7ad]"
      style={{ backgroundImage: 'url(../../../images/sale_bg-1.jpg)' }}
    >
      <div>
        <motion.h3
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-3xl pb-3 leading-snug"
        >
          50% Off on Crazy
          <br /> Summer Sale!
        </motion.h3>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-sm"
        >
          Grab you things while in the stock
        </motion.p>
        <Link href="/products" passHref>
          <motion.a
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className={`inline-block mt-10 lg:mt-24 px-2 py-1 rounded-lg font-semibold underline hover:text-gray-500 ${focusClasses}`}
          >
            Shop Now
          </motion.a>
        </Link>
      </div>
    </motion.div>

    <motion.div
      variants={{
        initial: { opacity: 0, x: 30 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.15 },
        },
      }}
      className="row-span-2 rounded-3xl flex items-center min-h-[280px] lg:min-h-0 px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-4 bg-theme_green-200 bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: 'url(../../../images/sale_bg-6.png)' }}
    >
      <div>
        <motion.h3
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-3xl pb-2 leading-snug"
        >
          Free Shipping <br /> Worldwide
        </motion.h3>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-sm"
        >
          During this period of time
        </motion.p>
      </div>
    </motion.div>

    <motion.div
      variants={{
        initial: { opacity: 0, x: 30 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.15 },
        },
      }}
      className="row-span-2 rounded-3xl flex items-center min-h-[280px] lg:min-h-0 px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-4 bg-pink-300 bg-contain bg-right bg-no-repeat"
      style={{ backgroundImage: 'url(../../../images/sale_bg-4.png)' }}
    >
      <div>
        <motion.h3
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-3xl pb-2 leading-snug"
        >
          Money Back <br /> Guarantee
        </motion.h3>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          className="text-sm"
        >
          Money back within 24 hours
        </motion.p>
        <Link href="/products" passHref>
          <motion.a
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className={`inline-block mt-10 font-semibold underline px-2 py-1 rounded-lg hover:text-gray-500 ${focusClasses}`}
          >
            Shop Now
          </motion.a>
        </Link>
      </div>
    </motion.div>
  </InView>
);

export default OfferGrid;
