import { useState, useContext, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { CartContext } from '../../src/context/CartContext';
import {
  isInCart,
  getCartData,
  incrementItem,
  decrementItem,
  addToCart,
  updateProduct,
  getItemFromCart,
  getItemIdFromCart,
  removeItemFromCart,
} from '../../src/services/cart';
import { getProductBySlug, getProducts } from '../../src/services/dummyAPI';
import Layout from '../../src/components/widgets/Layout';
import ProductGallerySlider from '../../src/components/product-details/ProductGallerySlider';
import StarRating from '../../src/components/widgets/StarRating';
import Variations from '../../src/components/product-details/Variations';
import CartElements from '../../src/components/product-details/CartElements';
import ProductAccordion from '../../src/components/product-details/ProductAccordion';

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
  const [inCart, setInCart] = useState(false);
  const [globalCart, setGlobalCart] = useContext(CartContext);

  const { type } = product;
  const [quantity, setQuantity] = useState(1);
  const [variations, setVariations] = useState(type === 1 ? null : [...product.variations]);
  const [selectedVariant, setSelectedVariant] = useState(type === 1 ? null : variations[0]);
  const [price, setPrice] = useState(type === 1 ? product.price : null);
  const [salePrice, setSalePrice] = useState(type === 1 ? product.sale_price : null);
  const [stock, setStock] = useState(type === 1 ? product.stock : null);
  const [subTotal, setSubTotal] = useState(type === 1 ? salePrice || price : null);
  const currentProductID = type === 1 ? product.id : selectedVariant.id;

  // Checks if the product or variant is in the cart
  const checkCartStatus = (productId) => {
    const inCartStatus = isInCart(productId);

    if (inCartStatus) {
      const itemId = getItemIdFromCart(productId);
      const itemFromCart = getItemFromCart(itemId);

      setInCart(true);
      setQuantity(itemFromCart.quantity);
      setSubTotal(itemFromCart.itemSummedPrice);
    } else {
      setInCart(false);
    }
  };

  const updateInitialVariant = () => {
    selectedVariant.current = true;
    setPrice(selectedVariant.price);
    setSalePrice(selectedVariant.sale_price);
    setStock(selectedVariant.stock);
  };

  const updateVariantInfo = (variant) => {
    setPrice(variant.price);
    setSalePrice(variant.sale_price);
    setStock(variant.stock);

    setQuantity(1);
  };

  const handleVariantChange = (id) => {
    const oldVariations = [...variations];
    const activeItems = oldVariations.filter((item) => item.current === true);

    /* eslint array-callback-return: "off" */
    activeItems.map((item) => {
      const itemIndex = oldVariations.indexOf(item);
      oldVariations[itemIndex] = { ...oldVariations[itemIndex] };
      oldVariations[itemIndex].current = false;
    });

    const current = oldVariations.filter((item) => item.id === id);
    const index = oldVariations.indexOf(current[0]);
    oldVariations[index] = { ...oldVariations[index] };
    oldVariations[index].current = true;

    setSelectedVariant(oldVariations[index]);
    setVariations(oldVariations);
    updateVariantInfo(oldVariations[index]);
  };

  const updateGlobalCart = () => {
    const cartData = getCartData();
    setGlobalCart(cartData);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    const value = incrementItem(quantity, stock);
    setQuantity(value);
    setSubTotal();

    if (inCart) {
      updateProduct(currentProductID, { quantity: value });
      updateGlobalCart();
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    const value = decrementItem(quantity);
    setQuantity(value);

    if (inCart) {
      updateProduct(currentProductID, { quantity: value });
      updateGlobalCart();
    }
  };

  const handleOnChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value <= stock) {
      value = parseInt(value === '' ? 1 : value, 10);
      setQuantity(value);

      if (inCart) {
        updateProduct(currentProductID, { quantity: value });
        updateGlobalCart();
      }
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, salePrice || price, selectedVariant);
    setInCart(true);
    updateGlobalCart();
  };

  const handleRemoveItem = (productId) => {
    const itemId = getItemIdFromCart(productId);
    removeItemFromCart(itemId);
    setInCart(false);
    setQuantity(1);
    updateGlobalCart();
  };

  /* eslint react-hooks/exhaustive-deps: "off" */
  useEffect(() => {
    if (type === 2) {
      updateInitialVariant(); // If variable product Set the first variant active, price, sale_price, stock
      checkCartStatus(selectedVariant.id);
    } else {
      checkCartStatus(product.id);
    }
  }, [selectedVariant, globalCart]);

  return (
    <Layout>
      <div className="section section__product_intro bg-theme_blue py-10">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="product_gallery w-full lg:w-1/2 pb-2 relative">
              <ProductGallerySlider product={product} />
            </div>

            <div className="product_info w-full lg:w-1/2 pl-8 pt-10">
              <div className="pb-5 flex items-center text-lg">
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

              {variations && <Variations variations={variations} onChange={handleVariantChange} />}

              <CartElements
                productId={type === 1 ? product.id : selectedVariant.id}
                price={price}
                salePrice={salePrice}
                stock={stock}
                quantity={quantity}
                inCart={inCart}
                subTotal={subTotal}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onChange={handleOnChange}
                onAddToCart={handleAddToCart}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section section__product_details">
        <div className="container">
          <ProductAccordion />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
