import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import ArrowDown from '../../../../public/images/icons/down-arrow.svg';
import { dropdownItemAnimation, dropdownWrapperAnimation } from '../../../services/animation';

const LangDropdown = () => {
  const languages = [
    { title: 'English', img: 'us-flag.svg' },
    { title: 'French', img: 'fr-flag.svg' },
    { title: 'Spanish', img: 'es-flag.svg' },
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <Menu as="div" className="top_header_dropdown w-[116px]">
      {({ open }) => (
        <>
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

          <AnimatePresence>
            {open && (
              <Menu.Items
                static
                as={motion.div}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={dropdownWrapperAnimation}
                className="top_header_menu absolute w-full top-[32px] bg-white transform origin-top rounded-md py-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-theme_green focus-visible:ring-opacity-75"
              >
                {languages &&
                  languages.map((lang) => (
                    <Menu.Item key={lang.title} as={motion.div} variants={dropdownItemAnimation}>
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
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};

export default LangDropdown;
