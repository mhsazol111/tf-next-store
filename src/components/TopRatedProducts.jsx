import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import Image from 'next/image';
import dummyProducts from '../services/dummyAPI';
import InView from './utilities/inView';
import StarRating from './utilities/StarRating';

const TopRatedProducts = () => {
  const topRatedProducts = dummyProducts.slice(0, 7);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 5000,
        min: 1024,
      },
      items: 5,
      // partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      // partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      // partialVisibilityGutter: 30,
    },
  };

  const itemReveal = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-theme_blue p-4 rounded-xl">
      <Carousel
        responsive={responsive}
        // autoPlay
        infinite
        arrows
        showDots={false}
        // customButtonGroup={<CustomArrows />}
        // renderButtonGroupOutside
        className="relative"
      >
        {topRatedProducts.map((product) => (
          <InView
            key={product.id}
            variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
            className="p-2"
          >
            <Link href={`/products/${product.slug}`} passHref>
              <a className="bg-white block rounded-xl px-2 py-4 text-center border-2 border-solid border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75 transition-shadow ease-in-out duration-200 hover:ring-2 hover:ring-theme_green hover:ring-opacity-75">
                <motion.div variants={itemReveal} className="pointer-events-none pb-2">
                  <Image
                    src={`/images/products/${product.imageUrl}`}
                    width={product.imageWidth / 4}
                    height={product.imageHeight / 4}
                    alt={product.title}
                  />
                </motion.div>
                <motion.h4 variants={itemReveal} className="text-xs">
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

export default TopRatedProducts;
