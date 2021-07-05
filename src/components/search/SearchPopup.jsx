import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { overlayAnimation } from '../../services/animation';

import SearchIcon from '../../../public/images/icons/search.svg';
import TrendingKeyWords from './partials/TrendingKeyWords';
import RecentKeyWords from './partials/RecentKeyWords';
import SearchSkeleton from './partials/SearchSkeleton';
import SearchResult from './partials/SearchResult';

const SearchPopup = ({ status, onClose }) => {
  const searchInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foundResult, setFoundResult] = useState(false);

  useEffect(() => {
    /* eslint no-unused-expressions: "off" */
    status && searchInputRef.current.focus();
    if (!status) {
      setIsLoading(false);
      setFoundResult(false);
    }
  }, [status]);

  const handleInputChange = () => {
    const searchValue = searchInputRef.current.value;
    console.log(searchValue);
    if (searchValue) {
      setIsLoading(true);
      setTimeout(() => {
        setFoundResult(true);
      }, 1500);
    } else {
      setIsLoading(false);
      setFoundResult(false);
    }
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
                    className="svg_icon w-8 absolute left-10 top-8"
                  >
                    <SearchIcon />
                  </motion.span>
                  <input
                    ref={searchInputRef}
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Search for anything and press Enter"
                    className="w-full h-24 rounded-lg pl-12 pr-6 focus:outline-none"
                  />
                </div>

                <div className="search_result_wrapper pt-2 pb-6 px-10">
                  <AnimatePresence>
                    {/* eslint no-nested-ternary : "off" */}
                    {isLoading ? (
                      foundResult ? (
                        <SearchResult />
                      ) : (
                        <SearchSkeleton />
                      )
                    ) : (
                      <>
                        <TrendingKeyWords />
                        <RecentKeyWords />
                      </>
                    )}
                  </AnimatePresence>
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
