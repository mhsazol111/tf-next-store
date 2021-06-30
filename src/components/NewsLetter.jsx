import { motion } from 'framer-motion';
import InView from './utilities/inView';

const NewsLetter = () => (
  <InView
    variants={{
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
    }}
    className="grid lg:h-[300px] grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4"
  >
    <motion.div
      variants={{
        initial: { opacity: 0, x: -30 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, staggerChildren: 0.1, when: 'beforeChildren' },
        },
      }}
      className="w-full h-[300px] lg:min-h-0 flex items-center justify-center rounded-3xl overflow-hidden bg-pink-300 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(../../../images/sale_bg-9.jpg)' }}
    >
      <div className="text-center">
        <motion.h4
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="pb-3"
        >
          Certified Seller Worldwide
        </motion.h4>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-sm"
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.p>
      </div>
    </motion.div>
    <motion.div
      variants={{
        initial: { opacity: 0, x: 30 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, staggerChildren: 0.1, when: 'beforeChildren' },
        },
      }}
      className="w-full h-[300px] lg:min-h-0 flex items-center justify-center rounded-3xl overflow-hidden bg-yellow-200 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url(../../../images/sale_bg-10.jpg)' }}
    >
      <div className="text-center w-full">
        <motion.h4
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="pb-3"
        >
          Subscribe to our newsletter
        </motion.h4>
        <motion.div
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex relative px-5 max-w-md w-full mx-auto mt-2"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-12 rounded-full pl-6 pr-32 bg-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
          />
          <button
            type="submit"
            className="absolute right-[1.4rem] top-[3px] bg-yellow-200 text-sm font-semibold px-5 py-[11px] rounded-full hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
          >
            Subscribe
          </button>
        </motion.div>
      </div>
    </motion.div>
  </InView>
);

export default NewsLetter;
