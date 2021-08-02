import { useState } from 'react';
// import { motion } from 'framer-motion';

import { getProductBySlug, getProducts, focusClasses } from '../../src/services/dummyAPI';
import Layout from '../../src/components/widgets/Layout';
import ProductGallerySlider from '../../src/components/product-details/ProductGallerySlider';
import StarRating from '../../src/components/widgets/StarRating';

import CartIcon from '../../public/images/icons/cart-solid.svg';
import CreditCartIcon from '../../public/images/icons/credit-card.svg';
import Variants from '../../src/components/product-details/Variants';

// import styles from '../../src/assets/scss/productDetails.module.scss';

export const getStaticPaths = async () => {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProductBySlug(params.slug);
  return {
    props: { product }, // will be passed to the page component as props
  };
};

const Product = ({ product }) => {
  // console.log(product);
  const [variants, setVariants] = useState([
    { id: 1, size: 'S', weight: '10gm', color: 'bg-pink-200', current: false },
    { id: 2, size: 'M', weight: '15gm', color: 'bg-yellow-200', current: true },
    { id: 3, size: 'L', weight: '30gm', color: 'bg-purple-200', current: false },
    { id: 4, size: 'XL', weight: '50gm', color: 'bg-theme_green-300', current: false },
  ]);

  const handleVariantChange = (id) => {
    const oldVariants = [...variants];
    const inActiveItems = oldVariants.filter((item) => item.current === true);

    /* eslint array-callback-return: "off" */
    inActiveItems.map((item) => {
      const itemIndex = oldVariants.indexOf(item);
      oldVariants[itemIndex] = { ...oldVariants[itemIndex] };
      oldVariants[itemIndex].current = false;
    });

    const current = oldVariants.filter((item) => item.id === id);
    const index = oldVariants.indexOf(current[0]);
    oldVariants[index] = { ...oldVariants[index] };
    oldVariants[index].current = true;

    setVariants(oldVariants);
  };

  return (
    <Layout>
      <div className="section section__product_intro bg-theme_blue py-10">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="product_gallery w-full lg:w-1/2 pb-2 relative">
              <ProductGallerySlider product={product} />
            </div>

            <div className="product_info w-full lg:w-1/2 pl-8 pt-10">
              <div className="mb-5 flex items-center text-lg">
                <div className="mr-3 text-base">Rated:</div>
                <StarRating value={product.rating} />
                <div className="text-sm ml-2">(10)</div>
              </div>

              <h1 className="text-4xl">{product.title}</h1>

              <div className="bg-theme_green-400 h-[4px] w-20 block mt-3 mb-4" />

              <div className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Architecto quo inventore
              </div>

              <Variants variants={variants} onChange={handleVariantChange} />

              <div className="font-bold text-4xl mt-10">
                {product.sale_price && <span className="mr-3">${product.sale_price}</span>}
                <span className={product.sale_price ? 'line-through text-gray-400 text-2xl' : ''}>
                  ${product.price}
                </span>
              </div>

              <div className="quantity_area flex items-center mt-5">
                <button
                  type="button"
                  // onClick={handleDecrement}
                  className={`${focusClasses} w-10 h-10 text-lg font-semibold bg-white rounded-xl hover:bg-theme_green-300`}
                >
                  -
                </button>
                <input
                  type="text"
                  name="cart_quantity"
                  // onChange={handleQuantityChange}
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                  // value={quantity}
                  value={1}
                  className={`${focusClasses} rounded-xl bg-white w-20 h-10 text-center font-semibold mx-3`}
                />
                <button
                  type="button"
                  // onClick={handleIncrement}
                  // disabled={quantity >= (availableProducts || 99)}
                  className={`${focusClasses} w-10 h-10 text-lg font-semibold bg-white rounded-xl hover:bg-theme_green-300`}
                >
                  +
                </button>
              </div>

              <div className="flex items-center mt-10">
                <button
                  type="button"
                  // onClick={handleIncrement}
                  // disabled={quantity >= (availableProducts || 99)}
                  className={`${focusClasses} flex items-center uppercase text-sm py-3 px-7 font-semibold bg-white shadow-lg rounded-full hover:bg-theme_green-300 mr-6`}
                >
                  <span className="svg_icon w-4 mr-2 mt-[-3px]">
                    <CartIcon />
                  </span>
                  Add to Cart
                </button>
                <button
                  type="button"
                  className={`${focusClasses} flex items-center uppercase text-sm py-3 px-7 font-semibold bg-black text-white shadow-lg rounded-full hover:bg-yellow-200 hover:text-black`}
                >
                  <span className="svg_icon w-5 mr-2 mt-[-1px]">
                    <CreditCartIcon />
                  </span>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
