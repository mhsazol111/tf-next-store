import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { overlayAnimation } from '../../services/animation';

import SearchIcon from '../../../public/images/icons/search.svg';
import CloseIcon from '../../../public/images/icons/close.svg';
import HistoryIcon from '../../../public/images/icons/history.svg';

const SearchPopup = ({ status, onClose }) => {
  const searchInputRef = useRef(null);

  const historyRevealAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    /* eslint no-unused-expressions: "off" */
    status && searchInputRef.current.focus();
  }, [status]);

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

          <AnimateSharedLayout>
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
              layout
              className="search_form_wrapper max-w-[700px] w-[90%] bg-white rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div className="search_form_body relative">
                {/* <motion.button
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
                </motion.button> */}

                <div className="search_form_input relative px-10 border-b-2 border-gray-100">
                  <motion.span
                    variants={{
                      initial: { opacity: 0, scale: 0.7 },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className="svg_icon w-8 absolute left-10 top-6"
                  >
                    <SearchIcon />
                  </motion.span>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for anything and press Enter"
                    className="w-full h-20 rounded-lg pl-12 pr-6 focus:outline-none"
                  />
                </div>

                <div className="search_result_wrapper pt-2 pb-10 px-10">
                  <div className="trending_shortcuts">
                    <motion.p
                      variants={historyRevealAnimation}
                      className="recent_label text-gray-300 uppercase font-semibold py-3"
                    >
                      Trending Shortcuts
                    </motion.p>
                  </div>
                  <div className="trending_list flex mb-4">
                    <motion.div
                      variants={historyRevealAnimation}
                      role="button"
                      className="relative text-xs flex items-center px-4 py-3 mr-3 bg-pink-100 rounded-lg"
                    >
                      <span className="svg_icon w-4 mr-2">
                        <HistoryIcon />
                      </span>
                      FaceMask
                    </motion.div>
                    <motion.div
                      variants={historyRevealAnimation}
                      role="button"
                      className="relative text-xs flex items-center px-4 py-3 mr-3 bg-green-100 rounded-lg"
                    >
                      <span className="svg_icon w-4 mr-2">
                        <HistoryIcon />
                      </span>
                      Night Cream
                    </motion.div>
                    <motion.div
                      variants={historyRevealAnimation}
                      role="button"
                      className="relative text-xs flex items-center px-4 py-3 mr-3 bg-yellow-100 rounded-lg"
                    >
                      <span className="svg_icon w-4 mr-2">
                        <HistoryIcon />
                      </span>
                      Shoes
                    </motion.div>
                  </div>
                  <div className="recent_searches">
                    <motion.p
                      variants={historyRevealAnimation}
                      className="recent_label text-gray-300 uppercase font-semibold py-3"
                    >
                      Recent Searches
                    </motion.p>
                    <motion.div
                      variants={{
                        animate: {
                          transition: {
                            duration: 0.2,
                            staggerChildren: 0.15,
                            when: 'beforeChildren',
                          },
                        },
                      }}
                      className="recent_list"
                    >
                      <motion.div
                        variants={historyRevealAnimation}
                        role="button"
                        className="relative text-xs flex items-center w-full px-4 py-3 mb-2 transition ease-in-out duration-300 bg-gray-100 rounded-lg"
                      >
                        <span className="svg_icon w-4 mr-2">
                          <HistoryIcon />
                        </span>
                        Red Pink Splash
                        <span role="button" className="svg_icon w-2 absolute right-4">
                          <CloseIcon />
                        </span>
                      </motion.div>
                      <motion.div
                        variants={historyRevealAnimation}
                        role="button"
                        className="relative text-xs flex items-center w-full px-4 py-3 mb-2 transition ease-in-out duration-300 bg-gray-100 rounded-lg"
                      >
                        <span className="svg_icon w-4 mr-2">
                          <HistoryIcon />
                        </span>
                        CCC FaceWash
                        <span role="button" className="svg_icon w-2 absolute right-4">
                          <CloseIcon />
                        </span>
                      </motion.div>

                      <motion.div
                        variants={historyRevealAnimation}
                        role="button"
                        className="relative text-xs flex items-center w-full px-4 py-3 mb-2 transition ease-in-out duration-300 bg-gray-100 rounded-lg"
                      >
                        <span className="svg_icon w-4 mr-2">
                          <HistoryIcon />
                        </span>
                        Shirt
                        <span role="button" className="svg_icon w-2 absolute right-4">
                          <CloseIcon />
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimateSharedLayout>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default SearchPopup;
