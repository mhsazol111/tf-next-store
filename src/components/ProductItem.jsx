import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StarRating from './utilities/StarRating';

import CartIcon from '../../public/images/icons/cart.svg';
import HeartIcon from '../../public/images/icons/heart.svg';
import EyeIcon from '../../public/images/icons/eye.svg';

const ProductItem = ({ product }) => {
  console.log(product);

  return (
    <Link href={`/products/${product.slug}`} passHref>
      <motion.a
        variants={{
          initial: { y: 30, opacity: 0 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.1, when: 'beforeChildren' },
          },
        }}
        whileHover={{ borderColor: 'rgba(28, 226, 216, .75)' }}
        className="w-full block product_gird__item bg-white px-3 py-5 rounded-xl border-2 border-solid border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
      >
        <motion.div
          variants={{
            initial: { y: 10, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
          }}
          layout
          className="product_image text-center"
        >
          <Image
            src={`/images/products/${product.imageUrl}`}
            width={product.imageWidth / 0.5}
            height={product.imageHeight / 0.5}
            alt={product.title}
          />
        </motion.div>

        <div className="product_info">
          <motion.h4
            variants={{
              initial: { x: -10, opacity: 0 },
              animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
            }}
            className="text-sm font-semibold pb-1"
          >
            {product.title}
          </motion.h4>
          <motion.p
            variants={{
              initial: { x: -10, opacity: 0 },
              animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
            }}
            className="font-semibold"
          >
            {product.sale_price && <span className="text-theme_green mr-3">${product.price}</span>}
            <span className={product.sale_price ? 'line-through text-red-400' : 'text-theme_green'}>
              ${product.price}
            </span>
          </motion.p>
          <motion.div
            variants={{
              initial: { x: -10, opacity: 0 },
              animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
            }}
            className="star_rating"
          >
            <StarRating value={product.rating} />
          </motion.div>
          <motion.div
            variants={{
              initial: { y: 10, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
            }}
            className="product_interactive_wrap relative z-40 flex justify-between items-center bg-theme_gray py-1 mt-4 rounded-full"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                alert('clicked');
              }}
              type="button"
              className="relative flex justify-center w-1/3 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
            >
              <span className="svg_icon w-[28px] h-[28px] flex items-center justify-center px-[6px] py-[6px] group-hover:text-yellow-400  rounded-full group-hover:bg-white">
                <HeartIcon />
              </span>
              <span className="tooltip text-xs py-1 px-2 rounded-md min-w-max absolute bottom-6 -left-3 opacity-0 bg-yellow-200 transition-all ease-in-out duration-200 group-hover:opacity-100 group-hover:bottom-8">
                Add to Wishlist
              </span>
            </button>
            <button
              type="button"
              className="relative flex justify-center w-1/3 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
            >
              <span className="svg_icon w-[28px] h-[28px] flex items-center justify-center px-[6px] py-[6px] rounded-full group-hover:text-theme_green group-hover:bg-white">
                <CartIcon />
              </span>
              <span className="tooltip text-xs py-1 px-2 rounded-md min-w-max absolute bottom-6 -left-2 opacity-0 bg-theme_green-300 transition-all ease-in-out duration-200 group-hover:opacity-100 group-hover:bottom-8">
                Add to Cart
              </span>
            </button>
            <button
              type="button"
              className="relative flex justify-center w-1/3 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
            >
              <span className="svg_icon w-[28px] h-[28px] flex items-center justify-center px-[4px] py-[4px] rounded-full group-hover:text-theme_pink group-hover:bg-white">
                <EyeIcon />
              </span>
              <span className="tooltip text-xs py-1 px-2 rounded-md min-w-max absolute bottom-6 -left-2 opacity-0 bg-theme_pink transition-all ease-in-out duration-200 group-hover:opacity-100 group-hover:bottom-8">
                Quick View
              </span>
            </button>
          </motion.div>
        </div>
      </motion.a>
    </Link>
  );
};

export default ProductItem;
