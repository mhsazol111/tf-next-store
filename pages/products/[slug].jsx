import { useState, useContext, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { CartContext } from '../../src/context/CartContext';
/* eslint no-unused-vars: "off" */
import {
  isInCart,
  getCartData,
  incrementItem,
  decrementItem,
  addToCart,
  updateProduct,
  getItemIdFromCart,
  removeItemFromCart,
} from '../../src/services/cart';
import { getProductBySlug, getProducts } from '../../src/services/dummyAPI';
import Layout from '../../src/components/widgets/Layout';
import ProductGallerySlider from '../../src/components/product-details/ProductGallerySlider';
import StarRating from '../../src/components/widgets/StarRating';
import Variants from '../../src/components/product-details/Variants';
import CartElements from '../../src/components/product-details/CartElements';

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
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [globalCart, setGlobalCart] = useContext(CartContext);

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

  const getSelectedVariants = () => {
    const selected = variants.filter((item) => item.current === true);
    return selected[0];
  };

  const updateGlobalCart = () => {
    const cartData = getCartData();
    setGlobalCart(cartData);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    const value = incrementItem(quantity, product.stock);
    setQuantity(value);

    // updateProduct(product.id, { quantity: value });
    // updateGlobalCart();
  };

  const handleDecrement = (e) => {
    e.preventDefault();

    if (quantity > 1) {
      const value = decrementItem(quantity);
      setQuantity(value);
      // updateProduct(product.id, { quantity: value });
      // updateGlobalCart();
    } else {
      // const currentItemId = getItemIdFromCart(product.id);
      // removeItemFromCart(currentItemId);
      // updateGlobalCart();
      // setInCart(false);
    }
  };

  const handleOnChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value <= product.stock) {
      value = parseInt(value === '' ? 1 : value, 10);
      setQuantity(value);
      // updateProduct(product.id, { quantity: value });
      // updateGlobalCart();
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setInCart(true);
    updateGlobalCart();
  };

  // Check if product is already in the cart on initial load
  // useEffect(() => {
  //   const inCartStatus = isInCart(product.id);
  //   if (inCartStatus) {
  //     setInCart(true);

  //     const itemId = getItemIdFromCart(product.id);
  //     const itemFromCart = getItemFromCart(itemId);

  //     setQuantity(itemFromCart.quantity);
  //   } else {
  //     setInCart(false);
  //   }
  // }, [product.id, globalCart, inCart]);

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

              <CartElements
                product={product}
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onChange={handleOnChange}
                onAddToCart={handleAddToCart}
                variants={getSelectedVariants()}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
