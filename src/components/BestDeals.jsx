import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import Image from 'next/image';
import dummyProducts, { focusClasses } from '../services/dummyAPI';
import useViewport from '../hooks/useViewport';
import InView from './utilities/inView';

import LeftArrow from '../../public/images/icons/back.svg';
import RightArrow from '../../public/images/icons/next.svg';

const BestDeals = () => {
  const topRatedProducts = dummyProducts.slice(6, 14);
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
    <div className="relative">
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={false}
        customButtonGroup={<CustomArrows />}
        renderButtonGroupOutside
      >
        {topRatedProducts.map((product, item) => (
          <InView key={product.id} variants={variants} custom={item} className="p-2">
            <Link href={`/products/${product.slug}`} passHref>
              <a
                className={`group bg-white block rounded-xl px-2 pt-2 pb-4 text-center border-2 border-solid border-transparent ${focusClasses} transition-shadow ease-in-out duration-200 hover:ring-2 hover:ring-theme_green hover:ring-opacity-75`}
              >
                <motion.div
                  variants={itemReveal}
                  className="pointer-events-none pt-4 pb-1 mb-4 rounded-xl bg-theme_blue group-hover:bg-blue-100 relative"
                >
                  {product.sale_percent && (
                    <span className="absolute right-[5px] top-[5px] block z-10 text-[9px] bg-yellow-300 px-2 py-1 rounded-full">
                      {product.sale_percent}% off
                    </span>
                  )}
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
                  className="text-lg font-semibold pt-1 text-theme_green flex items-center justify-center"
                >
                  {product.sale_price && (
                    <span className="text-theme_green mr-3">${product.price}</span>
                  )}
                  <span
                    className={
                      product.sale_price ? 'line-through text-red-400 text-xs' : 'text-theme_green'
                    }
                  >
                    ${product.price}
                  </span>
                </motion.p>
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
      className="absolute -left-4 top-[50%] transform translate-y-[-50%] px-1 w-[102.5%] flex justify-between pointer-events-none"
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

export default BestDeals;
