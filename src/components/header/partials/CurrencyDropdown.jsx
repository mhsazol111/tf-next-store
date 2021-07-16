import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import ArrowDown from '../../../../public/images/icons/down-arrow.svg';
import { dropdownItemAnimation, dropdownWrapperAnimation } from '../../../services/animation';
import { focusClasses } from '../../../services/dummyAPI';

const CurrencyDropdown = () => {
  const currencies = ['USD', 'EUR'];

  const [currentCurrency, setCurrentLang] = useState(currencies[0]);

  return (
    <Menu as="div" className="top_header_dropdown">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center w-full px-2 py-1 rounded hover:text-theme_green ${focusClasses}`}
          >
            <span className="mr-2">{currentCurrency}</span>
            <span className="svg_icon w-[.6rem]">
              <ArrowDown />
            </span>
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
                className={`top_header_menu absolute w-full top-[32px] bg-white transform origin-top rounded-md py-2 shadow-md ring-2 ring-theme_green ring-opacity-75 ${focusClasses}`}
              >
                {currencies &&
                  currencies.map((currency) => (
                    <Menu.Item key={currency} as={motion.div} variants={dropdownItemAnimation}>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => setCurrentLang(currency)}
                          className={`block w-full px-2 py-1 ${
                            active && 'bg-theme_gray'
                          } hover:bg-theme_gray`}
                        >
                          {currency}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
              </Menu.Items>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};

export default CurrencyDropdown;
