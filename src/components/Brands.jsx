import { motion } from 'framer-motion';

const Brands = () => {
  const logos = [
    { img: 'Algenist.png', alt: 'Algenist' },
    { img: 'Caudalie.png', alt: 'Caudalie' },
    { img: 'ponds.png', alt: 'ponds' },
    { img: 'lancome.png', alt: 'lancome' },
    { img: 'lorial.webp', alt: 'lorial' },
    { img: 'olay.png', alt: 'olay' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-4">
      {logos &&
        logos.map((logo) => (
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            key={logo.alt}
            className="brand_icon row-span-1 flex items-center justify-center bg-white rounded-xl py-3 md:py-2"
          >
            <div className="w-[80%] lg:w-[70%]">
              {/* eslint @next/next/no-img-element: "off" */}
              <img src={`/images/brands/${logo.img}`} alt={logo.alt} />
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default Brands;
