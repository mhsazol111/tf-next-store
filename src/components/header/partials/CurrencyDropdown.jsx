import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ArrowDown from '../../../../public/images/icons/down-arrow.svg';

const CurrencyDropdown = () => {
  const currencies = ['USD', 'EUR'];

  const [currentCurrency, setCurrentLang] = useState(currencies[0]);

  return (
    <Menu as="div" className="top_header_dropdown">
      <Menu.Button className="flex items-center w-full px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75">
        <span className="mr-2">{currentCurrency}</span>
        <span className="svg_icon w-[.6rem]">
          <ArrowDown />
        </span>
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
        <Menu.Items className="top_header_menu absolute w-full top-[32px] bg-white transform origin-top rounded-md py-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75">
          {currencies &&
            currencies.map((currency) => (
              <Menu.Item key={currency}>
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
      </Transition>
    </Menu>
  );
};

export default CurrencyDropdown;
