import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { overlayAnimation } from '../../services/animation';
import { getCartData, removeItemFromCart } from '../../services/cart';
import { CartContext } from '../../context/CartContext';
import AddToCartIcon from './AddToCartIcon';

import CloseIcon from '../../../public/images/icons/close.svg';
import CartIcon from '../../../public/images/icons/cart.svg';
import CheckoutIcon from '../../../public/images/icons/checkout.svg';

import { focusClasses } from '../../services/dummyAPI';

const CartSidebar = ({ status, onClose, totalItems, cart }) => {
  /* eslint no-unused-vars: "off" */
  const [globalCart, setGlobalCart] = useContext(CartContext);

  const removeItem = (itemId) => {
    removeItemFromCart(itemId);
    const cartData = getCartData();
    setGlobalCart(cartData);
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
              exit: { opacity: 0, x: '100%' },
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
                  initial: { opacity: 0, y: -10 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                className="text-xl"
              >
                <span className="svg_icon w-5 mr-3">
                  <CartIcon />
                </span>
                Cart
                {totalItems && (
                  <span className="bg-pink-200 text-base px-3 py-1 ml-2 rounded-full">
                    {totalItems} Items
                  </span>
                )}
              </motion.h3>
            </div>
            <div className="px-4 py-4">
              {cart ? (
                <div
                  className="overflow-y-auto overflow-x-hidden px-2 py-2"
                  style={{ height: 'calc(100vh - 220px)' }}
                >
                  {cart.items.map((item) => (
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
                          className={`flex items-center overflow-hidden shadow-md rounded-lg relative ${focusClasses} hover:ring-2 hover:ring-theme_green hover:ring-opacity-75`}
                        >
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
                            onClick={(e) => {
                              e.preventDefault();
                              removeItem(item.itemId);
                            }}
                            className={`absolute right-1 top-1 px-2 py-2 flex items-center justify-center rounded ${focusClasses} hover:ring-2 hover:ring-theme_green hover:ring-opacity-75`}
                          >
                            <span className="svg_icon w-2">
                              <CloseIcon />
                            </span>
                          </motion.button>
                          <div className="bg-theme_blue p-2 mr-4">
                            <Image
                              src={`/images/products/${item.product.imageUrl}`}
                              width={100}
                              height={100}
                              alt={item.product.title}
                            />
                          </div>
                          <div>
                            <h4 className="text-sm pb-1">{item.product.title}</h4>
                            <p className="text-xs">
                              ${item.itemPrice} x {item.quantity}
                            </p>
                            <p className="text-theme_green font-semibold text-sm pb-2">
                              ${item.itemSummedPrice}
                            </p>
                            <div
                              aria-hidden="true"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              <AddToCartIcon product={item.product} />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-[90vh]">
                  <div className="text-center">
                    <Image
                      src="/images/icons/empty-cart.svg"
                      width={50}
                      height={50}
                      alt="Empty Cart"
                    />
                    <p className="pt-2">
                      Looks like the cart is empty. <br />
                      Let&apos;s start shopping
                    </p>
                  </div>
                </div>
              )}
            </div>

            {cart && (
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 7 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2, staggerChildren: 0.15 },
                  },
                }}
                className="bg-theme_gray px-6 py-4 absolute bottom-0 left-0 w-full"
              >
                <Link href="/cart" passHref>
                  <motion.a
                    variants={{
                      initial: { opacity: 0, y: 7 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className={`${focusClasses} flex items-center justify-center w-full rounded-full py-3 font-semibold bg-theme_green-400 mb-3 uppercase text-sm`}
                  >
                    View Cart
                  </motion.a>
                </Link>
                <Link href="/checkout" passHref>
                  <motion.a
                    variants={{
                      initial: { opacity: 0, y: 7 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className={`${focusClasses} flex items-center justify-center w-full rounded-full py-3 font-semibold bg-yellow-400 uppercase text-sm`}
                  >
                    <span className="svg_icon w-4 mr-3">
                      <CheckoutIcon />
                    </span>
                    Checkout - ${cart.cartTotal}
                  </motion.a>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
