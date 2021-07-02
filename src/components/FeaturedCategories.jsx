import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import useViewport from '../hooks/useViewport';
import { featuredCategories } from '../services/dummyAPI';
import { ease } from '../services/animation';
import InView from './utilities/inView';

const FeaturedCategories = () => {
  const { width } = useViewport();
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease,
        duration: 0.6,
        delay: width > 1024 ? custom * 0.1 : 0,
        when: 'beforeChildren',
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4">
      {featuredCategories &&
        featuredCategories.map((cat, item) => (
          <InView key={cat.id} variants={variants} custom={item} className="block w-full">
            <Link href={`/category/${cat.url}`} passHref>
              <motion.a
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 8px 30px -5px rgba(0, 0, 0, .10)',
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: '0 8px 30px -5px rgba(0, 0, 0, .10)',
                  transition: { duration: 0.3 },
                }}
                className={`rounded-3xl py-1 px-6 min-h-[14rem] flex items-center focus:outline-none ${cat.backgroundColor}`}
              >
                <div className="category_grid_item_wrapper flex items-center flex-wrap">
                  <motion.div
                    variants={{
                      animate: { transition: { staggerChildren: 0.07 } },
                    }}
                    className="w-1/2"
                  >
                    <motion.h4
                      variants={{
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                      }}
                      className="text-lg font-semibold pb-1"
                    >
                      {cat.title}
                    </motion.h4>
                    <motion.p
                      variants={{
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                      }}
                      className="text-xs "
                    >
                      {cat.details}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    variants={{
                      initial: { opacity: 0, x: 10 },
                      animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                    }}
                    className="w-1/2 text-center leading-tight"
                  >
                    <Image
                      src={`/images/products/${cat.imgUrl}`}
                      width={cat.width}
                      height={cat.height}
                      alt={cat.title}
                    />
                  </motion.div>
                </div>
              </motion.a>
            </Link>
          </InView>
        ))}
    </div>
  );
};

export default FeaturedCategories;
