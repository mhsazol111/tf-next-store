import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <Menu.Button
          type="button"
          className="category_nav_button group bg-theme_gray flex items-center py-2 px-4 mb-[8px] rounded-lg transition ease-in-out duration-200 hover:bg-theme_green hover:text-white focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="svg_icon w-[1rem]"
          >
            <MenuIcon />
          </motion.span>
          <span className="ml-2">Browse Categories</span>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition duration-150 ease-in"
          enterFrom="transform scale-y-0 opacity-0"
          enterTo="transform scale-y-100 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="transform scale-y-100 opacity-100"
          leaveTo="transform scale-y-0 opacity-0"
        >
          <Menu.Items className="category_dropdown_wrapper absolute top-12 bg-white transform origin-top shadow-lg rounded-lg py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75">
            {categoryItems &&
              categoryItems.map((item) => (
                <Menu.Item key={item.title}>
                  {({ active }) => (
                    <div className="category_dropdown_item">
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
                    </div>
                  )}
                </Menu.Item>
              ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default CategoryDropdown;