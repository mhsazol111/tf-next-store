import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { overlayAnimation } from '../../services/animation';

import Eye from '../../../public/images/icons/eye.svg';
import FacebookIcon from '../../../public/images/icons/facebook.svg';
import GoogleIcon from '../../../public/images/icons/google.svg';
import CloseIcon from '../../../public/images/icons/close.svg';

const LoginPopup = ({ status, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('logged in');
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
              initial: { opacity: 0, scale: 0.7 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: { when: 'beforeChildren', staggerChildren: 0.05, duration: 0.2 },
              },
              exit: { opacity: 0 },
            }}
            className="login_form_wrapper max-w-[500px] w-[90%] bg-white rounded-lg shadow-lg relative overflow-hidden"
          >
            <div className="login_form_header bg-theme_gray px-10 py-6 relative">
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
              <motion.h3
                variants={{
                  initial: { opacity: 0, y: -10 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                className="text-xl text-center mb-2"
              >
                Login to your account
              </motion.h3>
              <motion.p
                variants={{
                  initial: { opacity: 0, y: -7 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                className="text-center text-xs"
              >
                Log in with email & password
              </motion.p>
            </div>
            <div className="login_form_body px-16 py-6">
              <form onSubmit={handleSubmit}>
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="mb-4"
                >
                  {/* eslint jsx-a11y/label-has-associated-control: "off" */}
                  <label htmlFor="login_email" className="text-sm block pb-2">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    id="login_email"
                    name="login_email"
                    placeholder="youremail@example.com"
                    className="w-full h-10 px-4 rounded-lg border-2 text-sm border-yellow-300 focus:outline-none focus-visible:border-theme_green"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="relative mb-4"
                >
                  {/* eslint jsx-a11y/label-has-associated-control: "off" */}
                  <label htmlFor="login_password" className="text-sm block pb-2">
                    Enter Your Password
                  </label>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="login_password"
                    name="login_password"
                    placeholder="password"
                    className="w-full h-10 px-4 rounded-lg border-2 text-sm border-yellow-300 focus:outline-none focus-visible:border-theme_green"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="svg_icon w-6 h-6 flex items-center z-10 justify-center rounded-full hover:bg-theme_gray cursor-pointer px-1 py-1 absolute right-2 bottom-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
                  >
                    <Eye />
                  </button>
                </motion.div>
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="mb-4"
                >
                  <button
                    type="submit"
                    className="w-full h-10 py-2 bg-yellow-300 rounded-lg hover:bg-theme_green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75"
                  >
                    Login
                  </button>
                </motion.div>
                <motion.p
                  variants={{
                    initial: { opacity: 0, y: 10 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="text-xs text-center"
                >
                  <Link href="/reset-password">
                    <a className="underline px-2 rounded hover:text-theme_green focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75">
                      Forgot your password?
                    </a>
                  </Link>
                </motion.p>
              </form>

              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0.7 },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2 },
                  },
                }}
                className="w-full relative mt-6 mb-6 flex items-center justify-center"
              >
                <span className="bg-yellow-200 absolute w-full h-[1px]" />
                <span className="text-center bg-white relative block px-4 py-1">OR</span>
              </motion.div>

              <motion.a
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                href="#"
                className="w-full flex items-center justify-center rounded-lg px-4 py-2 mb-4 bg-blue-600 hover:bg-blue-700 text-xs border-2 border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75"
              >
                <span className="w-5 h-5 px-1 py-1 mr-3 bg-white rounded flex items-center justify-center">
                  <FacebookIcon />
                </span>
                <span className="text-white font-bold">Continue with Facebook</span>
              </motion.a>

              <motion.a
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                href="#"
                className="w-full flex items-center justify-center rounded-lg px-4 py-2 bg-white hover:bg-theme_blue text-xs border-2 border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75"
              >
                <span className="w-5 h-5 px-1 py-1 mr-3 bg-white rounded flex items-center justify-center">
                  <GoogleIcon />
                </span>
                <span className="font-bold">Continue with Google</span>
              </motion.a>
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
              <Link href="/signup">
                <a className="block text-xs text-center p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75">
                  Don&apos;t have an account? <strong>Sign Up</strong>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
