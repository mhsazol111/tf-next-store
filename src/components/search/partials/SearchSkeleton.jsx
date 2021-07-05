import { motion } from 'framer-motion';
import SkeletonElement from '../../utilities/SkeletonElement';

const SearchSkeleton = () => {
  const arr = [1, 2, 3, 4];
  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.div
      variants={{
        animate: { transition: { staggerChildren: 0.15 } },
      }}
      className="skeleton-wrapper pt-6"
    >
      {arr.map((i) => (
        <motion.div
          variants={animation}
          key={i}
          className="grid grid-cols-6 grid-rows-2 gap-2 mb-4"
        >
          <SkeletonElement className="col-span-1 row-span-2 w-15 h-14 mb-0" />
          <SkeletonElement className="col-span-4 row-span-1 w-full mb-0" />
          <SkeletonElement className="col-span-3 row-span-1 w-[40%] mb-0" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SearchSkeleton;
