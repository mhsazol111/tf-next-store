import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const InView = ({ variants, children, threshold, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
      className={`in-view-wrapper ${className || ''}`}
    >
      {children}
    </motion.div>
  );
};
export default InView;
