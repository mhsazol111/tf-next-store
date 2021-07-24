import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import {
  overlayAnimation,
  overlayWrapperReveal,
  quickViewItemRevealAnimation,
} from '../services/animation';

import StarRating from './widgets/StarRating';
import CloseIcon from '../../public/images/icons/close.svg';
import { focusClasses } from '../services/dummyAPI';
import AddToCartIcon from './widgets/AddToCartIcon';

const ProductQuickView = ({ status, onClose, product }) => {
  const responsive = {
    mobile: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
    },
  };

  return (
    <AnimatePresence>
      {status && (
        <Dialog
          static
          as={motion.div}
          variants={overlayAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          open={status}
          onClose={onClose}
          className="fixed inset-0 z-20 flex items-center justify-center"
        >
          <Dialog.Overlay className="bg-black w-full h-full top-0 left-0 absolute opacity-40" />

          <motion.div
            variants={overlayWrapperReveal}
            className="quick_view_wrapper max-w-[700px] w-[90%] bg-white rounded-xl shadow-lg overflow-hidden relative"
          >
            <div className="grid grid-cols-2 grid-rows-1 gap-4">
              <motion.div className="row-span-1 product_gallery_wrapper bg-theme_gray p-4">
                <Carousel
                  responsive={responsive}
                  infinite
                  showDots
                  dotListClass="quick_view_dots"
                  arrows={false}
                  className="relative"
                >
                  {product.gallery.map((item) => (
                    <div key={item.id} className="px-4 py-4 pointer-events-none">
                      <Image
                        src={`/images/products/${item.url}`}
                        width={300}
                        height={300}
                        alt={product.title}
                      />
                    </div>
                  ))}
                </Carousel>
              </motion.div>

              <div className="row-span-1 flex items-center p-4 relative">
                <div>
                  <motion.button
                    variants={quickViewItemRevealAnimation}
                    type="button"
                    onClick={onClose}
                    className={`absolute right-1 top-1 px-2 py-2 flex items-center justify-center rounded ${focusClasses}`}
                  >
                    <span className="svg_icon w-3">
                      <CloseIcon />
                    </span>
                  </motion.button>
                  <motion.h4 variants={quickViewItemRevealAnimation} className="text-xl">
                    {product.title}
                  </motion.h4>
                  <motion.div
                    variants={quickViewItemRevealAnimation}
                    className="flex items-center mt-2"
                  >
                    <StarRating value={product.rating} />
                    <span className="text-xs ml-3">(50 reviews)</span>
                  </motion.div>

                  <motion.p
                    variants={quickViewItemRevealAnimation}
                    className="text-4xl font-semibold mt-2"
                  >
                    <span className="text-theme_green mr-3">
                      ${product.sale_price ? product.sale_price : product.price}
                    </span>
                  </motion.p>
                  <motion.p variants={quickViewItemRevealAnimation} className="text-sm mt-2">
                    Brand: <strong>Prima</strong>
                  </motion.p>
                  <motion.div
                    variants={quickViewItemRevealAnimation}
                    className="flex flex-wrap items-center mt-4"
                  >
                    <AddToCartIcon product={product} buttonHtml={<CartButton />} />
                    <span className="text-xs">(Stock: 85 available)</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const CartButton = () => (
  <div
    className={`text-xs uppercase font-semibold bg-yellow-300 hover:bg-yellow-400 px-4 py-2 mr-2 rounded ${focusClasses}`}
  >
    Add to cart
  </div>
);

export default ProductQuickView;
