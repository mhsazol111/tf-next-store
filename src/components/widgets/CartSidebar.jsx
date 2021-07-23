import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { overlayAnimation } from '../../services/animation';

import CloseIcon from '../../../public/images/icons/close.svg';
import CartIcon from '../../../public/images/icons/cart.svg';
import { focusClasses } from '../../services/dummyAPI';
import AddToCartIcon from './AddToCartIcon';

const CartSidebar = ({ status, onClose, totalItems, cart }) => {
  /* eslint no-console: "off" */
  console.log('logged in');

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
          className="fixed inset-0 z-20 flex justify-end"
        >
          <Dialog.Overlay className="bg-black w-full h-full top-0 left-0 absolute opacity-40" />

          <motion.div
            variants={{
              initial: { opacity: 0, x: '100%' },
              animate: {
                opacity: 1,
                x: 0,
                transition: { when: 'beforeChildren', staggerChildren: 0.05, duration: 0.2 },
              },
              exit: { opacity: 0 },
            }}
            className="max-w-[400px] w-[90%] bg-white shadow-lg relative overflow-hidden"
          >
            <div className="bg-theme_gray px-6 py-3 relative">
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
                className={`absolute right-1 top-1 px-2 py-2 flex items-center justify-center rounded ${focusClasses}`}
              >
                <span className="svg_icon w-3">
                  <CloseIcon />
                </span>
              </motion.button>
              <motion.h3
                variants={{
                  initial: { opacity: 0, x: 10 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                className="text-xl"
              >
                <span className="svg_icon w-5 mr-3">
                  <CartIcon />
                </span>
                Cart {totalItems && <span> - ({totalItems} Items)</span>}
              </motion.h3>
            </div>
            <div className="px-6 py-3">
              {cart ? (
                cart.items.map((item) => (
                  <motion.div
                    key={item.itemId}
                    variants={{
                      initial: { opacity: 0, x: 20 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="mb-4"
                  >
                    <Link href={`/products/${item.product.slug}`}>
                      <a
                        className={`flex items-center overflow-hidden shadow-md rounded-lg ${focusClasses} hover:ring-2 hover:ring-theme_green hover:ring-opacity-75`}
                      >
                        <div className="bg-theme_blue p-2 mr-4">
                          <Image
                            src={`/images/products/${item.product.imageUrl}`}
                            width={100}
                            height={100}
                            alt={item.product.title}
                          />
                        </div>
                        <div>
                          <h4 className="text-sm">{item.product.title}</h4>
                          <p className="text-xs">
                            ${item.itemPrice} x {item.quantity}
                          </p>
                          <p className="text-theme_green font-semibold text-sm">
                            ${item.itemSummedPrice}
                          </p>
                          <AddToCartIcon product={item.product} />
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <h3>Cart Empty</h3>
              )}
            </div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 7 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2 },
                },
              }}
              className="login_form_footer bg-theme_gray px-10 py-4 relative flex items-center justify-center"
            >
              Total: {cart.cartTotal}
            </motion.div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
