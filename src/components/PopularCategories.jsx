import { motion } from 'framer-motion';
import Link from 'next/link';

import Shirt from '../../public/images/icons/shirt.svg';
import Gifts from '../../public/images/icons/gift-box.svg';
import HomeAppliances from '../../public/images/icons/home-appliances.svg';
import Music from '../../public/images/icons/headphones.svg';
import Cosmetics from '../../public/images/icons/cosmetics.svg';
import Grocery from '../../public/images/icons/grocery.svg';
import Electronics from '../../public/images/icons/laptop.svg';
import Health from '../../public/images/icons/healthcare.svg';
import AutoMobile from '../../public/images/icons/car.svg';

const PopularCategories = () => {
  const categoryList = [
    { title: 'Fashion', url: 'fashion', icon: <Shirt /> },
    { title: 'Gifts', url: 'gifts', icon: <Gifts /> },
    { title: 'Home', url: 'home-appliances', icon: <HomeAppliances /> },
    { title: 'Music', url: 'home-appliances', icon: <Music /> },
    { title: 'Cosmetics', url: 'cosmetics', icon: <Cosmetics /> },
    { title: 'Grocery', url: 'grocery', icon: <Grocery /> },
    { title: 'Electronics', url: 'electronics', icon: <Electronics /> },
    { title: 'Healthcare', url: 'healthcare', icon: <Health /> },
    { title: 'Cars', url: 'Cars', icon: <AutoMobile /> },
    { title: 'Pets', url: 'pets', icon: <Gifts /> },
    { title: 'Toys', url: 'toys', icon: <HomeAppliances /> },
    { title: 'Furniture', url: 'furniture', icon: <Music /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-4">
      {categoryList &&
        categoryList.map((item) => (
          <Link key={item.title} href={`/category/${item.url}`} passHref>
            <motion.a
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.1, when: 'beforeChildren', staggerChildren: 0.1 },
                },
              }}
              className="bg-white relative overflow-hidden rounded-lg flex items-center w-full px-5 py-6 shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
            >
              <div className="absolute w-0 h-full left-0 top-0 bg-theme_green-400 transition-all ease-in-out duration-700 group-hover:w-full" />
              <div className="flex items-center relative">
                <motion.span
                  variants={{
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                  }}
                  className="svg_icon w-6 mr-3"
                >
                  {item.icon}
                </motion.span>
                <motion.span
                  variants={{
                    initial: { opacity: 0, x: 10 },
                    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                  }}
                  className="text-sm font-semibold"
                >
                  {item.title}
                </motion.span>
              </div>
            </motion.a>
          </Link>
        ))}
    </div>
  );
};

export default PopularCategories;
