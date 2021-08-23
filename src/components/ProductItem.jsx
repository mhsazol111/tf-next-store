import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import InView from './widgets/inView';

import StarRating from './widgets/StarRating';
import HeartIcon from '../../public/images/icons/heart.svg';
import EyeIcon from '../../public/images/icons/eye.svg';

import style from '../assets/scss/productItem.module.scss';
import useViewport from '../hooks/useViewport';
import ProductQuickView from './ProductQuickView';
import { focusClasses } from '../services/dummyAPI';

import AddToCartIcon from './widgets/AddToCartIcon';

const ProductItem = ({ product, item }) => {
  const { width } = useViewport();
  const { type } = product;
  const variations = product.variations ? product.variations : null;
  const price = type === 1 ? product.price : variations[0].price;
  const salePrice = type === 1 ? product.sale_price : variations[0].sale_price;
  const productId = type === 1 ? product.id : product.variations[0].id;

  const variants = {
    initial: { y: 30, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: width > 1024 ? custom * 0.05 : 0,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    }),
  };

  const [isQuickViewOpen, setQuickViewOpen] = useState(false);

  const handleQuickViewOpen = () => {
    setQuickViewOpen(true);
  };

  const handleQuickViewClose = () => {
    setQuickViewOpen(false);
  };

  return (
    <>
      <InView variants={variants} custom={item}>
        <Link href={`/products/${product.slug}`} passHref>
          <motion.a
            layoutId={`from-product-grid-${product.id}`}
            className={`w-full block product_gird__item bg-white px-3 py-5 rounded-xl border-2 border-solid border-transparent ${focusClasses} transition-shadow ease-in-out duration-200 hover:ring-2 hover:ring-theme_green hover:ring-opacity-75 overflow-hidden`}
          >
            <motion.div
              layoutId={`from-product-thumb-${product.id}`}
              variants={{
                initial: { y: 10, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
              }}
              className="product_image text-center relative"
            >
              {product.sale_percent && (
                <span className="block absolute -top-2 -left-1 text-xs bg-theme_green-200 px-2 py-1 rounded-full z-10">
                  {product.sale_percent}% off
                </span>
              )}
              <Image
                src={`/images/products/${product.imageUrl}`}
                width={product.imageWidth / 0.5}
                height={product.imageHeight / 0.5}
                alt={product.title}
              />
            </motion.div>

            <motion.div layoutId={`from-product-info-${product.id}`} className="product_info">
              <motion.h4
                variants={{
                  initial: { x: -10, opacity: 0 },
                  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                }}
                className="text-sm font-semibold pb-1"
              >
                {product.title}
              </motion.h4>
              <motion.div
                variants={{
                  initial: { x: -10, opacity: 0 },
                  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                }}
                className="flex items-center pb-[3px]"
              >
                {variations && (
                  <div className="flex text-xs mr-4">
                    <span
                      className={`mr-1 block px-[7px] py-[1px] rounded-xl ${variations[0].bgColor}`}
                    >
                      {variations[0].attributes[0]}
                    </span>
                    <span className={`block px-[7px] py-[1px] rounded-xl ${variations[0].bgColor}`}>
                      {variations[0].attributes[1]}
                    </span>
                  </div>
                )}
                <p className="font-semibold">
                  {salePrice && <span className="text-theme_green mr-3">${salePrice}</span>}
                  <span className={salePrice ? 'line-through text-red-400' : 'text-theme_green'}>
                    ${price}
                  </span>
                </p>
              </motion.div>
              <motion.div
                variants={{
                  initial: { x: -10, opacity: 0 },
                  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                }}
                className="star_rating"
              >
                <StarRating value={product.rating} />
              </motion.div>
              <motion.div
                variants={{
                  initial: { y: 10, opacity: 0 },
                  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
                }}
                className="product_interactive_wrap relative z-5 flex justify-between items-center bg-theme_gray py-1 mt-4 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <button
                  type="button"
                  className={`relative flex justify-center w-1/3 rounded-full group ${focusClasses}`}
                >
                  <span className="svg_icon w-[28px] h-[28px] flex items-center justify-center px-[6px] py-[6px] group-hover:text-yellow-400  rounded-full group-hover:bg-white">
                    <HeartIcon />
                  </span>
                  <span className="tooltip text-xs py-1 px-2 rounded-md min-w-max absolute bottom-6 left-[50%] transform translate-x-[-50%] opacity-0 bg-yellow-200 transition-all ease-in-out duration-200 group-hover:opacity-100 group-hover:bottom-8">
                    <span
                      className={`text-yellow-200 left-[50%] transform translate-x-[-50%] ${style.has_triangle}`}
                    />
                    Wishlist
                  </span>
                </button>
                <AddToCartIcon product={product} productId={productId} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickViewOpen();
                  }}
                  type="button"
                  className={`relative flex justify-center w-1/3 rounded-full group ${focusClasses}`}
                >
                  <span className="svg_icon w-[28px] h-[28px] flex items-center justify-center px-[4px] py-[4px] rounded-full group-hover:text-theme_pink group-hover:bg-white">
                    <EyeIcon />
                  </span>
                  <span className="tooltip text-xs py-1 px-2 rounded-md min-w-max absolute bottom-6 left-[50%] transform translate-x-[-50%] opacity-0 bg-theme_pink transition-all ease-in-out duration-200 group-hover:opacity-100 group-hover:bottom-8">
                    <span
                      className={`text-theme_pink left-[50%] transform translate-x-[-50%] ${style.has_triangle}`}
                    />
                    Quick View
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.a>
        </Link>
      </InView>
      <ProductQuickView
        product={product}
        status={isQuickViewOpen}
        onOpen={handleQuickViewOpen}
        onClose={handleQuickViewClose}
      />
    </>
  );
};
export default ProductItem;
