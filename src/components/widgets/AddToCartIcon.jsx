import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import {
  addToCart,
  getCartData,
  incrementItem,
  isInCart,
  decrementItem,
  updateProduct,
  getItemIdFromCart,
  getItemFromCart,
  removeItemFromCart,
} from '../../services/cart';
import CartIcon from '../../../public/images/icons/cart.svg';

import { focusClasses } from '../../services/dummyAPI';
import style from '../../assets/scss/productItem.module.scss';

const AddToCartIcon = ({ product, productId, buttonHtml, buttonClass }) => {
  const [inCart, setInCart] = useState(false);
  const [globalCart, setGlobalCart] = useContext(CartContext);

  /* eslint no-unused-vars: "off" */
  const { type } = product;
  const [quantity, setQuantity] = useState(1);
  const [variations, setVariations] = useState(type === 1 ? null : [...product.variations]);
  const [selectedVariant, setSelectedVariant] = useState(type === 1 ? null : variations[0]);
  const [price, setPrice] = useState(type === 1 ? product.price : null);
  const [salePrice, setSalePrice] = useState(type === 1 ? product.sale_price : null);
  const [stock, setStock] = useState(type === 1 ? product.stock : null);
  const [subTotal, setSubTotal] = useState(type === 1 ? salePrice || price : null);

  // Checks if the product or variant is in the cart
  const checkCartStatus = (id) => {
    const inCartStatus = isInCart(id);

    if (inCartStatus) {
      const itemId = getItemIdFromCart(id);
      const itemFromCart = getItemFromCart(itemId);

      setInCart(true);
      setQuantity(itemFromCart.quantity);
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

  // Check if product is already in the cart on initial load
  /* eslint react-hooks/exhaustive-deps: "off" */
  useEffect(() => {
    if (type === 2) {
      updateInitialVariant(); // If variable product Set the first variant active, price, sale_price, stock
      checkCartStatus(productId);
    } else {
      checkCartStatus(product.id);
    }
  }, [globalCart]);

  const updateGlobalCart = () => {
    const cartData = getCartData();
    setGlobalCart(cartData);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    const value = incrementItem(quantity, stock);
    setQuantity(value);

    updateProduct(productId, { quantity: value });
    updateGlobalCart();
  };

  const handleDecrement = (e) => {
    e.preventDefault();

    if (quantity > 1) {
      const value = decrementItem(quantity);
      setQuantity(value);

      updateProduct(productId, { quantity: value });
      updateGlobalCart();
    } else {
      const currentItemId = getItemIdFromCart(productId);
      removeItemFromCart(currentItemId);
      setInCart(false);
      updateGlobalCart();
    }
  };

  const handleQuantityChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value <= product.stock) {
      value = parseInt(value === '' ? 1 : value, 10);
      setQuantity(value);

      updateProduct(productId, { quantity: value });
      updateGlobalCart();
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, quantity, salePrice || price, selectedVariant);
    setInCart(true);
    setQuantity(1);
    updateGlobalCart();
  };

  return (
    <>
      {inCart ? (
        /* eslint no-nested-ternary: "off"  */
        <div className="quantity_area flex items-center bg-white rounded-full py-[2px]">
          <button
            type="button"
            onClick={handleDecrement}
            className={`${focusClasses} w-[20px] h-[20px] mx-[4px] bg-theme_gray rounded-2xl hover:bg-theme_green-200`}
          >
            -
          </button>
          <input
            type="text"
            name="cart_quantity"
            onChange={handleQuantityChange}
            value={quantity}
            className={`${focusClasses} focus-visible:rounded-full w-8 text-center`}
          />
          <button
            type="button"
            onClick={handleIncrement}
            disabled={quantity >= (product.stock || 99)}
            className={`${focusClasses} w-[20px] h-[20px] mx-[4px] bg-theme_gray rounded-2xl hover:bg-theme_green-200`}
          >
            +
          </button>
        </div>
      ) : buttonHtml ? (
        <button type="button" onClick={handleAddToCart} className={buttonClass}>
          {buttonHtml}
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          type="button"
          className={`relative flex justify-center w-1/3 rounded-full group ${focusClasses}`}
        >
          <span className="svg_icon w-[28px] h-[28px] flex items-center justify-center px-[6px] py-[6px] rounded-full group-hover:text-theme_green group-hover:bg-white">
            <CartIcon />
          </span>
          <span className="tooltip text-xs py-1 px-2 rounded-md min-w-max absolute bottom-6 left-[50%] transform translate-x-[-50%] opacity-0 bg-theme_green-300 transition-all ease-in-out duration-200 group-hover:opacity-100 group-hover:bottom-8">
            <span
              className={`text-theme_green-300 left-[50%] transform translate-x-[-50%] ${style.has_triangle}`}
            />
            Add to Cart
          </span>
        </button>
      )}
    </>
  );
};

export default AddToCartIcon;
