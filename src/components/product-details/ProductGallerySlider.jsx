import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';

import { focusClasses } from '../../services/dummyAPI';

import LeftArrow from '../../../public/images/icons/back.svg';
import RightArrow from '../../../public/images/icons/next.svg';

import 'react-multi-carousel/lib/styles.css';
import styles from '../../assets/scss/productDetails.module.scss';

const ProductGallerySlider = ({ product }) => (
  <Carousel
    responsive={{
      all: {
        breakpoint: {
          max: 5000,
          min: 0,
        },
        items: 1,
      },
    }}
    showDots
    customDot={<DotsWithThumbnail items={product.gallery} />}
    renderDotsOutside
    dotListClass={styles.dots_with_thumbnail}
    arrows={false}
    customButtonGroup={<CustomArrows />}
    renderButtonGroupOutside
  >
    {product.gallery.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-3xl flex items-center justify-center min-h-[600px]"
      >
        <Image src={`/images/products/${item.url}`} width={400} height={400} alt={product.title} />
      </div>
    ))}
  </Carousel>
);

const CustomArrows = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow },
  } = rest;
  const totalSlides = totalItems - slidesToShow;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8 } }}
      className="absolute left-0 bottom-9 px-1 w-full flex justify-between pointer-events-none"
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

const DotsWithThumbnail = ({ onClick, items, ...rest }) => {
  const { index, active } = rest;

  return (
    <button
      type="button"
      className={`${
        active ? 'active ring-2 ring-theme_green ring-opacity-75' : ''
      } ${focusClasses} hover:ring-2 hover:ring-theme_green hover:ring-opacity-75 rounded-lg flex items-center justify-center p-2 bg-white mr-2`}
      onClick={() => onClick()}
    >
      <Image src={`/images/products/${items[index].url}`} width={50} height={50} alt="thumbnail" />
    </button>
  );
};

export default ProductGallerySlider;
