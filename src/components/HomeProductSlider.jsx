import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import Image from 'next/image';
import CustomButtonGroupAsArrows from './CustomButtonGroupAsArrows';
import CustomDots from './CustomDots';

import 'react-multi-carousel/lib/styles.css';
import style from '../assets/scss/home.module.scss';

const HomeProductSlider = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
    },
  };

  const slider = [
    {
      id: 1,
      title: 'Best face wash to cover everything',
      subTitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, enim est utcommodi eaque quaerat corrupti. Ut placeat ullam',
      url: '/',
      imageUrl: 'product-1.png',
      bgColor: 'bg-theme_pink-400',
      roundColor: 'bg-theme_pink',
    },
    {
      id: 2,
      title: '20% offer on any night magic cream and product',
      subTitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, enim est utcommodi eaque quaerat corrupti. Ut placeat ullam',
      url: '/',
      imageUrl: 'product-2.png',
      bgColor: 'bg-purple-100',
      roundColor: 'bg-purple-200',
    },
    {
      id: 3,
      title: 'TCL certified and best in class multipurpose cream',
      subTitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, enim est utcommodi eaque quaerat corrupti. Ut placeat ullam',
      url: '/',
      imageUrl: 'product-3.png',
      bgColor: 'bg-theme_green-100',
      roundColor: 'bg-theme_green-300',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { when: 'beforeChildren' } },
      }}
      className="slider rounded-3xl overflow-hidden"
    >
      <Carousel
        responsive={responsive}
        infinite
        showDots
        // renderDotsOutside
        customDot={<CustomDots />}
        dotListClass={style.home_slider_dots}
        arrows={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        // renderButtonGroupOutside
        className="relative"
      >
        {slider.map((slide) => (
          <div
            key={slide.id}
            className={`product_slider_item rounded-3xl ${slide.bgColor} px-12 py-20`}
          >
            <div className="product_slider_item_inner">
              <motion.div
                variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                className="flex flex-wrap-reverse lg:flex-wrap items-center justify-center"
              >
                <div className="w-full lg:w-1/2">
                  <motion.h1
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                    }}
                    className="text-4xl leading-tight pb-5"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                    }}
                    className="pb-16"
                  >
                    {slide.subTitle}
                  </motion.p>
                  <Link href={`/products/${slide.url}`} passHref>
                    <motion.a
                      variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                      }}
                      whileHover={{ scale: 1.07 }}
                      className="inline-block font-semibold origin-left border-solid border-2 border-black rounded-full px-7 py-2 text-sm hover:bg-black hover:text-white"
                    >
                      View Details
                    </motion.a>
                  </Link>
                </div>
                <div className="w-full lg:w-1/2">
                  <motion.div
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                    }}
                    className="slider_image relative text-center pointer-events-none"
                  >
                    <div
                      className={`max-w-[400px] w-[90%] mx-auto ${slide.roundColor} rounded-full`}
                    >
                      <Image
                        src={`/images/products/${slide.imageUrl}`}
                        width={600}
                        height={600}
                        alt="Face Wash"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default HomeProductSlider;
