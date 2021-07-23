import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import useViewport from '../hooks/useViewport';
import { ease } from '../services/animation';
import InView from './widgets/inView';

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

  const featuredCategories = [
    {
      id: 1,
      url: 'skin-care',
      backgroundColor: 'bg-theme_green-300',
      title: 'Skin Care',
      details: 'Glowing skin every minutes & seconds',
      imgUrl: 'product-6.png',
      width: 338,
      height: 308,
    },
    {
      id: 2,
      url: 'skin-care',
      backgroundColor: 'bg-yellow-200',
      title: 'Face Mask',
      details: 'A classic hydration treatment',
      imgUrl: 'product-14.png',
      width: 350,
      height: 350,
    },
    {
      id: 3,
      url: 'skin-care',
      backgroundColor: 'bg-pink-200',
      title: 'Natural Oil',
      details: 'Protect against environmental irritants',
      imgUrl: 'product-5.png',
      width: 350,
      height: 350,
    },
  ];

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
                className={`${cat.backgroundColor} rounded-3xl py-1 px-6 min-h-[14rem] h-full row-span-1 flex items-center focus:outline-none`}
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
