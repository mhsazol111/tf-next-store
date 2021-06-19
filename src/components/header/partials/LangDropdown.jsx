import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import ArrowDown from '../../../../public/images/icons/down-arrow.svg';

const LangDropdown = () => {
  const languages = [
    { title: 'English', img: 'us-flag.svg' },
    { title: 'French', img: 'fr-flag.svg' },
    { title: 'Spanish', img: 'es-flag.svg' },
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <Menu as="div" className="top_header_dropdown w-[116px]">
      <Menu.Button className="flex flex-wrap items-center w-full py-1 pr-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75">
        <Image
          src={`/images/icons/${currentLang.img}`}
          width={30}
          height={20}
          alt={currentLang.title}
        />
        <span className="ml-1 mr-2">{currentLang.title}</span>
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
          {languages &&
            languages.map((lang) => (
              <Menu.Item key={lang.title}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => setCurrentLang(lang)}
                    className={`flex flex-wrap items-center w-full px-2 py-1 ${
                      active && 'bg-theme_gray'
                    } hover:bg-theme_gray`}
                  >
                    <Image
                      src={`/images/icons/${lang.img}`}
                      width={30}
                      height={20}
                      alt={lang.title}
                    />
                    <span className="ml-1">{lang.title}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangDropdown;
