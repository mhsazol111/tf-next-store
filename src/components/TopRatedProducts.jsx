import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import Image from 'next/image';
import dummyProducts, { focusClasses } from '../services/dummyAPI';
import useViewport from '../hooks/useViewport';
import InView from './utilities/inView';
import StarRating from './utilities/StarRating';

import LeftArrow from '../../public/images/icons/back.svg';
import RightArrow from '../../public/images/icons/next.svg';

const TopRatedProducts = () => {
  const topRatedProducts = dummyProducts.slice(3, 10);
  const { width } = useViewport();
  const responsive = {
    desktop: {
      breakpoint: {
        max: 5000,
        min: 1024,
      },
      items: 5,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
    },
  };

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: (custom) => ({
      opacity: 1,
      transition: {
        delay: width > 1024 ? custom * 0.05 : 0,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    }),
  };

  const itemReveal = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-theme_blue p-4 rounded-xl relative">
      <Carousel
        responsive={responsive}
        // autoPlay
        showDots={false}
        arrows={false}
        customButtonGroup={<CustomArrows />}
        renderButtonGroupOutside
      >
        {topRatedProducts.map((product, item) => (
          <InView key={product.id} variants={variants} custom={item} className="p-2">
            <Link href={`/products/${product.slug}`} passHref>
              <a
                className={`bg-white block rounded-xl px-2 py-4 text-center border-2 border-solid border-transparent ${focusClasses} transition-shadow ease-in-out duration-200 hover:ring-2 hover:ring-theme_green hover:ring-opacity-75`}
              >
                <motion.div variants={itemReveal} className="pointer-events-none pb-2">
                  <Image
                    src={`/images/products/${product.imageUrl}`}
                    width={product.imageWidth / 4}
                    height={product.imageHeight / 4}
                    alt={product.title}
                  />
                </motion.div>
                <motion.h4 variants={itemReveal} className="text-sm">
                  {product.title}
                </motion.h4>
                <motion.p
                  variants={itemReveal}
                  className="text-lg font-semibold pt-1 text-theme_green"
                >
                  ${product.price}
                </motion.p>
                <motion.div
                  variants={itemReveal}
                  className="star_rating text-center flex items-center justify-center"
                >
                  <StarRating value={product.rating} />
                  <span className="text-xs ml-2">(35)</span>
                </motion.div>
              </a>
            </Link>
          </InView>
        ))}
      </Carousel>
    </div>
  );
};

const CustomArrows = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow },
  } = rest;
  const totalSlides = totalItems - slidesToShow;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8 } }}
      className="absolute left-0 top-[50%] transform translate-y-[-50%] px-1 w-full flex justify-between pointer-events-none"
    >
      <button
        type="button"
        onClick={previous}
        className={`${
          currentSlide === 0 ? 'opacity-40 bg-gray-300 pointer-events-none' : 'pointer-events-auto'
        } bg-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75`}
      >
        <span className="svg_icon w-4">
          <LeftArrow />
        </span>
      </button>
      <button
        type="button"
        onClick={next}
        className={`${
          currentSlide === totalSlides
            ? 'opacity-40 bg-gray-300 pointer-events-none'
            : 'pointer-events-auto'
        } bg-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75`}
      >
        <span className="svg_icon w-4">
          <RightArrow />
        </span>
      </button>
    </motion.div>
  );
};

export default TopRatedProducts;
