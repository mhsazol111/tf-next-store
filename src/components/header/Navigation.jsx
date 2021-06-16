import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useOutsideClick from '../../hooks/useOutsideClick';

import Arrow from '../../../public/images/icons/down-arrow.svg';
import MenuIcon from '../../../public/images/icons/menu.svg';
import Shirt from '../../../public/images/icons/shirt.svg';
import Gifts from '../../../public/images/icons/gift-box.svg';
import HomeAppliances from '../../../public/images/icons/home-appliances.svg';
import Music from '../../../public/images/icons/headphones.svg';
import Cosmetics from '../../../public/images/icons/cosmetics.svg';
import Grocery from '../../../public/images/icons/grocery.svg';
import Electronics from '../../../public/images/icons/laptop.svg';
import Health from '../../../public/images/icons/healthcare.svg';
import AutoMobile from '../../../public/images/icons/car.svg';

import styles from '../../assets/scss/header.module.scss';

const Navigation = () => {
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

  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryBtnRef = useRef(null);

  useOutsideClick(categoryBtnRef, categoryOpen, setCategoryOpen);

  const handleCategoryToggle = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <div className="header_navigation_wrapper relative z-[18] text-sm">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="category_nav relative">
            <button
              ref={categoryBtnRef}
              type="button"
              onClick={handleCategoryToggle}
              className="category_nav_button group bg-theme_gray flex items-center py-2 px-4 rounded-lg transition ease-in-out duration-200 hover:bg-theme_green hover:text-white"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="svg_icon w-[1rem]"
              >
                <MenuIcon />
              </motion.span>
              <span className="ml-2">Browse Categories</span>
            </button>
            <div
              className={`${
                styles.category_dropdown_wrapper
              } bg-white absolute top-12 shadow-lg rounded-lg py-3 transition-all ease-in duration-200 transform ${
                categoryOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
              } origin-top `}
            >
              {categoryItems &&
                categoryItems.map((item) => (
                  <div key={item.title} className="category_dropdown_item">
                    <Link href="/">
                      <a className="flex items-center min-w-[18rem] px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100">
                        <span className="svg_icon w-5 mr-2">{item.icon}</span>
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="main_navigation_wrapper">
            <ul className="menu flex items-center">
              {menuItems &&
                menuItems.map((item) => (
                  <li
                    key={item.title}
                    className={`menu_item ${
                      item.children ? 'menu_has_children' : ''
                    } relative group ml-10 flex items-center`}
                  >
                    {item.url ? (
                      <Link href={item.url}>
                        <a className="block">{item.title}</a>
                      </Link>
                    ) : (
                      <>
                        <span className="block cursor-pointer">{item.title}</span>
                        <span className="svg_icon w-[.6rem] ml-[.5rem] mt-[2px]">
                          <Arrow />
                        </span>
                      </>
                    )}

                    {item.children && (
                      <ul className="sub-menu absolute top-10 bg-white shadow-lg rounded-lg py-2 transition-all ease-in duration-200 transform opacity-0 scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100">
                        {item.children.map((child) => (
                          <li
                            key={child.title}
                            className={`menu_item ${
                              child.children ? 'menu_has_children' : ''
                            } w-52`}
                          >
                            {child.url ? (
                              <Link href={child.url}>
                                <a className="block px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100">
                                  {child.title}
                                </a>
                              </Link>
                            ) : (
                              <span className="block cursor-pointer px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100">
                                {child.title}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
