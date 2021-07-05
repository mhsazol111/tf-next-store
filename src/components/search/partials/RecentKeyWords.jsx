import { motion } from 'framer-motion';
import { historyRevealAnimation } from '../../../services/animation';
import HistoryIcon from '../../../../public/images/icons/history.svg';
import CloseIcon from '../../../../public/images/icons/close.svg';

const RecentKeyWords = () => (
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
);

export default RecentKeyWords;
