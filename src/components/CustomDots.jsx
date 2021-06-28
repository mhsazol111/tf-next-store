import { motion } from 'framer-motion';
import style from '../assets/scss/home.module.scss';

const CustomDots = ({ onClick, active }) => (
  <motion.li
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.8 } }}
    className={active ? style.dot_active : ''}
  >
    <button type="button" onClick={() => onClick()} />
  </motion.li>
);

export default CustomDots;
