import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { dropdownItemAnimation, dropdownWrapperAnimation } from '../../../services/animation';

import Arrow from '../../../../public/images/icons/down-arrow.svg';
import { focusClasses } from '../../../services/dummyAPI';

const Navigation = () => {
  const menuItems = [
    {
      title: 'Home',
      url: false,
      children: [
        { title: 'Home 1', url: '/' },
        { title: 'Home 2', url: '/home-2' },
        { title: 'Home 3', url: '/home-3' },
        { title: 'Home 4', url: '/home-4' },
      ],
    },
    {
      title: 'Shop',
      url: false,
      children: [
        { title: 'Shop List', url: '/shop-list' },
        { title: 'Shop Grid', url: '/shop-grid' },
      ],
    },
    {
      title: 'Product',
      url: false,
      children: [
        { title: 'Default', url: '/default' },
        { title: 'Center', url: '/center' },
      ],
    },
    {
      title: 'Pages',
      url: false,
      children: [
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Faq', url: '/faq' },
        { title: '404', url: '/404' },
      ],
    },
    {
      title: 'User Account',
      url: false,
      children: [
        { title: 'Orders', url: '/orders' },
        { title: 'Profile', url: '/profile' },
        { title: 'Wishlist', url: '/wishlist' },
        { title: 'Cart', url: '/cart' },
      ],
    },
    {
      title: 'Demos',
      url: '/demos',
    },
  ];

  return (
    <div className="header_navigation_wrapper relative z-[18] text-sm">
      <div className="container">
        <div className="flex justify-between items-end">
          <div className="main_navigation_wrapper">
            <ul className="menu flex items-center">
              {menuItems &&
                menuItems.map((item) => (
                  <Menu key={item.title}>
                    {({ open }) => (
                      <li
                        key={item.title}
                        className={`menu_item ${
                          item.children ? 'menu_has_children' : ''
                        } relative group ml-10 flex items-center`}
                      >
                        {item.url ? (
                          <Link href={item.url}>
                            <a className="block pb-4 pt-4 focus:outline-none focus-visible:text-theme_green hover:text-theme_green">
                              {item.title}
                            </a>
                          </Link>
                        ) : (
                          <Menu.Button className="focus:outline-none focus-visible:text-theme_green hover:text-theme_green">
                            <span className="block pb-4 pt-4 cursor-pointer">
                              {item.title}
                              <span className="svg_icon w-[.6rem] ml-[.5rem] mt-[2px]">
                                <Arrow />
                              </span>
                            </span>
                          </Menu.Button>
                        )}

                        <AnimatePresence>
                          {open && item.children && (
                            <Menu.Items
                              static
                              as={motion.ul}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={dropdownWrapperAnimation}
                              className={`sub-menu absolute top-14 bg-white shadow-lg rounded-lg py-2 transform origin-top ring-2 ring-theme_green ring-opacity-75 ${focusClasses}`}
                            >
                              {item.children.map((child) => (
                                <Menu.Item
                                  key={child.title}
                                  as={motion.div}
                                  variants={dropdownItemAnimation}
                                >
                                  {({ active }) => (
                                    <li
                                      key={child.title}
                                      className={`menu_item ${
                                        child.children ? 'menu_has_children' : ''
                                      } w-52`}
                                    >
                                      {child.url ? (
                                        <Link href={child.url}>
                                          <a
                                            className={`block px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100 ${
                                              active ? 'text-theme_green bg-theme_gray' : ''
                                            }`}
                                          >
                                            {child.title}
                                          </a>
                                        </Link>
                                      ) : (
                                        <span
                                          className={`block cursor-pointer px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100 ${
                                            active ? 'text-theme_green bg-theme_gray' : ''
                                          }`}
                                        >
                                          {child.title}
                                        </span>
                                      )}
                                    </li>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          )}
                        </AnimatePresence>
                      </li>
                    )}
                  </Menu>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
