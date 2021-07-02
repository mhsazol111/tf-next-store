import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const InView = ({ as, variants, custom, children, threshold, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0.2,
  });
  const Wrapper = as ? motion[as] : motion.div;

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <Wrapper
      ref={ref}
      custom={custom || 0}
      initial="initial"
      animate={controls}
      variants={variants}
      className={`in-view-wrapper ${className || ''}`}
    >
      {children}
    </Wrapper>
  );
};
export default InView;
