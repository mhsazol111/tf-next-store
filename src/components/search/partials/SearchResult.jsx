import { motion } from 'framer-motion';
import { historyRevealAnimation } from '../../../services/animation';
import HistoryIcon from '../../../../public/images/icons/history.svg';

const SearchResult = () => (
  <div className="search_result">
    <motion.p
      variants={historyRevealAnimation}
      className="recent_label text-gray-300 uppercase font-semibold py-3"
    >
      Search Result (4)
    </motion.p>

    <div className="search_result flex mb-4">
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
  </div>
);

export default SearchResult;
