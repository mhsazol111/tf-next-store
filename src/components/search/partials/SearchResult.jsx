import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { historyRevealAnimation } from '../../../services/animation';

const SearchResult = () => {
  const result = [
    {
      id: 1,
      title: 'Soothing Cleanser',
      url: '/products/product-1',
      image: 'product-1.png',
      price: 15,
    },
    {
      id: 2,
      title: 'Gentle Skin Cleanser',
      url: '/products/product-1',
      image: 'product-2.png',
      price: 25,
    },
    {
      id: 3,
      title: 'Moisturizing Lotion',
      url: '/products/product-1',
      image: 'product-3.png',
      price: 20,
    },
    {
      id: 4,
      title: 'Micro-Sculpting Cream',
      url: '/products/product-1',
      image: 'product-4.png',
      price: 15,
    },
  ];

  //
  return (
    <div className="search_result">
      <motion.p
        variants={historyRevealAnimation}
        className="recent_label text-gray-300 uppercase font-semibold py-3"
      >
        Search Result (4)
      </motion.p>

      <motion.div
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
        className="search_result mb-4"
      >
        {result.map((product) => (
          <Link key={product.id} href={product.url} passHref>
            <motion.a
              variants={historyRevealAnimation}
              className="relative w-full text-xs flex items-center px-2 py-1 mr-3 bg-gray-100 rounded-lg mb-3 hover:bg-yellow-200"
            >
              <div className="product_thumb mr-4">
                <Image
                  src={`/images/products/${product.image}`}
                  width={60}
                  height={60}
                  alt={product.title}
                />
              </div>
              <div className="product_info">
                <p className="text-base font-semibold">{product.title}</p>
                <p className="text-sm">${product.price}</p>
              </div>
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default SearchResult;
