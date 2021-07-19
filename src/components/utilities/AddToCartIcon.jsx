import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import {
  addToCart,
  getCartData,
  incrementItem,
  isInCart,
  decrementItem,
  removeProductFromCart,
  updateProduct,
} from '../../services/cart';
import CartIcon from '../../../public/images/icons/cart.svg';

import { focusClasses } from '../../services/dummyAPI';
import style from '../../assets/scss/productItem.module.scss';

const AddToCartIcon = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  /* eslint no-unused-vars: "off" */
  const [globalCart, setGlobalCart] = useContext(CartContext);
  const availableProducts = 150;

  // Check if product is already in the cart on initial load
  useEffect(() => (isInCart(product.id) ? setInCart(true) : setInCart(false)), [product.id]);

  const updateGlobalCart = () => {
    const cartData = getCartData();
    setGlobalCart(cartData);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    const value = incrementItem(quantity, availableProducts);
    setQuantity(value);
    updateProduct(product.id, { quantity: value });
    updateGlobalCart();
  };

  const handleDecrement = (e) => {
    e.preventDefault();

    if (quantity > 1) {
      const value = decrementItem(quantity);
      setQuantity(value);
      updateProduct(product.id, { quantity: value });
      updateGlobalCart();
    } else {
      removeProductFromCart(product.id);
      updateGlobalCart();

      setInCart(false);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    addToCart(product);
    setInCart(true);
    setQuantity(1);
    updateGlobalCart();
  };

  const handleQuantityChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value <= availableProducts) {
      value = parseInt(value === '' ? 1 : value, 10);
      setQuantity(value);
      updateProduct(product.id, { quantity: value });
      updateGlobalCart();
    }
  };

  return (
    <>
      {inCart ? (
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
            disabled={quantity >= (availableProducts || 99)}
            className={`${focusClasses} w-[20px] h-[20px] mx-[4px] bg-theme_gray rounded-2xl hover:bg-theme_green-200`}
          >
            +
          </button>
        </div>
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
