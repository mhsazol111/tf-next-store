import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

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
      bgColor: 'bg-green-50',
      roundColor: 'bg-green-100',
    },
  ];

  return (
    <div className="slider">
      <Carousel responsive={responsive} infinite showDots>
        {slider.map((slide) => (
          <div
            key={slide.id}
            className={`product_slider_item rounded-3xl ${slide.bgColor} px-12 py-20`}
          >
            <div className="product_slider_item_inner">
              <div className="flex items-center">
                <div className="w-1/2">
                  <h1 className="text-4xl leading-tight pb-5">{slide.title}</h1>
                  <p className="pb-7">{slide.subTitle}</p>
                  <Link href={`/products/${slide.url}`}>
                    <a className="underline bold">View All</a>
                  </Link>
                </div>
                <div className="w-1/2">
                  <div className="slider_image relative text-center pointer-events-none">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeProductSlider;
