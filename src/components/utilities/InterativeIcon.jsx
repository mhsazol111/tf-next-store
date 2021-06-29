import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeartIcon from '../../../public/images/icons/heart.svg';

const InteractiveIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAnimationClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="flex items-center justify-center">
      <button type="button" onClick={handleAnimationClick} className="svg_icon w-20 relative z-40">
        <HeartIcon />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.span
            variants={{
              initial: { opacity: 0, scale: 1, transition: { duration: 1 } },
              animate: {
                opacity: 1,
                scale: 2,
                y: '-50vh',
                transition: { duration: 1 },
              },
              exit: { opacity: 0, scale: 1, y: '-100vh', transition: { duration: 1 } },
            }}
            onAnimationComplete={() => {
              setIsVisible(false);
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            className="svg_icon absolute"
          >
            <HeartIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveIcon;
