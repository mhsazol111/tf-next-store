import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const InView = ({ variants, children, threshold, customClass }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`in-view-wrapper ${customClass || ''}`}
    >
      {children}
    </motion.div>
  );
};
export default InView;
