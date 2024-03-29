import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { dropdownItemAnimation, dropdownWrapperAnimation } from '../../../services/animation';

import MenuIcon from '../../../../public/images/icons/menu.svg';
import Shirt from '../../../../public/images/icons/shirt.svg';
import Gifts from '../../../../public/images/icons/gift-box.svg';
import HomeAppliances from '../../../../public/images/icons/home-appliances.svg';
import Music from '../../../../public/images/icons/headphones.svg';
import Cosmetics from '../../../../public/images/icons/cosmetics.svg';
import Grocery from '../../../../public/images/icons/grocery.svg';
import Electronics from '../../../../public/images/icons/laptop.svg';
import Health from '../../../../public/images/icons/healthcare.svg';
import AutoMobile from '../../../../public/images/icons/car.svg';
import { focusClasses } from '../../../services/dummyAPI';

const CategoryDropdown = () => {
  const categoryItems = [
    { title: 'Fashion', url: 'fashion', icon: <Shirt /> },
    { title: 'Gifts', url: 'gifts', icon: <Gifts /> },
    { title: 'Home & Appliances', url: 'home-appliances', icon: <HomeAppliances /> },
    { title: 'Music', url: 'home-appliances', icon: <Music /> },
    { title: 'Cosmetics', url: 'cosmetics', icon: <Cosmetics /> },
    { title: 'Grocery', url: 'grocery', icon: <Grocery /> },
    { title: 'Electronics', url: 'electronics', icon: <Electronics /> },
    { title: 'Healthcare', url: 'healthcare', icon: <Health /> },
    { title: 'AutoMobile', url: 'automobile', icon: <AutoMobile /> },
    { title: 'Pets', url: 'pets', icon: <Gifts /> },
    { title: 'Toys', url: 'toys', icon: <HomeAppliances /> },
    { title: 'Furniture', url: 'furniture', icon: <Music /> },
  ];

  return (
    <>
      <Menu as="div" className="category_nav relative">
        {({ open }) => (
          <>
            <Menu.Button
              type="button"
              className="category_nav_button group bg-yellow-200 flex items-center p-2 rounded-lg hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-offset-2 focus-visible:ring-opacity-75"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="svg_icon w-[1.2rem]"
              >
                <MenuIcon />
              </motion.span>
            </Menu.Button>

            <AnimatePresence>
              {open && (
                <Menu.Items
                  static
                  as={motion.div}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={dropdownWrapperAnimation}
                  className={`category_dropdown_wrapper absolute right-0 top-12 bg-white transform origin-top-right shadow-lg rounded-lg py-3 ring-2 ring-theme_green ring-opacity-75 ${focusClasses}`}
                >
                  {categoryItems &&
                    categoryItems.map((item) => (
                      <Menu.Item
                        key={item.title}
                        as={motion.div}
                        variants={dropdownItemAnimation}
                        className="category_dropdown_item"
                      >
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={`flex items-center min-w-[18rem] px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100 ${
                                active && 'text-theme_green bg-theme_gray'
                              }`}
                            >
                              <span className="svg_icon w-5 mr-2">{item.icon}</span>
                              <span>{item.title}</span>
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                </Menu.Items>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>
    </>
  );
};

export default CategoryDropdown;
