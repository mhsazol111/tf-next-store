import { motion } from 'framer-motion';
import LeftArrow from '../../public/images/icons/back.svg';
import RightArrow from '../../public/images/icons/next.svg';

const CustomButtonGroupAsArrows = ({ next, previous }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.8 } }}
    className="home_slider_arrow absolute right-12 bottom-5"
  >
    <button
      type="button"
      onClick={previous}
      className="mr-5 hover:text-gray-500 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75"
    >
      <span className="svg_icon w-4">
        <LeftArrow />
      </span>
    </button>
    <button
      type="button"
      onClick={next}
      className="hover:text-gray-500 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-offset-theme_gray focus-visible:ring-opacity-75"
    >
      <span className="svg_icon w-4">
        <RightArrow />
      </span>
    </button>
  </motion.div>
);
export default CustomButtonGroupAsArrows;
