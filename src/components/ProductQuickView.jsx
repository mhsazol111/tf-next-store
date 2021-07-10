import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { overlayAnimation } from '../services/animation';
import StarRating from './utilities/StarRating';
import CloseIcon from '../../public/images/icons/close.svg';

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
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  when: 'beforeChildren',
                  staggerChildren: 0.05,
                  duration: 0.2,
                },
              },
              exit: { opacity: 0 },
            }}
            className="quick_view_wrapper max-w-[600px] w-[90%] bg-white rounded-xl shadow-lg overflow-hidden origin-center relative"
          >
            <div className="grid grid-cols-2 grid-rows-1">
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { duration: 4 } },
                }}
                className="row-span-1 product_gallery_wrapper"
              >
                <Carousel
                  responsive={responsive}
                  // autoPlay
                  infinite
                  showDots
                  // renderDotsOutside
                  // customDot={<CustomDots />}
                  // dotListClass={style.home_slider_dots}
                  arrows={false}
                  // customButtonGroup={<CustomArrows />}
                  // renderButtonGroupOutside
                  className="relative"
                >
                  {product.gallery.map((item) => (
                    <div key={item.id} className="px-4 py-4">
                      <div className="bg-theme_gray rounded-3xl">
                        <Image
                          src={`/images/products/${item.url}`}
                          width={300}
                          height={300}
                          alt={product.title}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </motion.div>
              <div className="row-span-1 flex items-center p-4 relative">
                <div>
                  <motion.button
                    variants={{
                      initial: { opacity: 0, scale: 0.7 },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.2 },
                      },
                    }}
                    type="button"
                    onClick={onClose}
                    className="absolute right-1 top-1 px-2 py-2 flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
                  >
                    <span className="svg_icon w-3">
                      <CloseIcon />
                    </span>
                  </motion.button>
                  <h4 className="text-xl">{product.title}</h4>
                  <div className="flex items-center">
                    <StarRating value={product.rating} />
                    <span className="text-xs ml-3">(50 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProductQuickView;
