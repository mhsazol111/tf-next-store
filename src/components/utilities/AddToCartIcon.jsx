import { focusClasses } from '../../services/dummyAPI';

import CartIcon from '../../../public/images/icons/cart.svg';
import style from '../../assets/scss/productItem.module.scss';
import { addToCart } from '../../services/cart';

const AddToCartIcon = ({ product }) => (
  <button
    onClick={(event) => {
      event.preventDefault();
      // console.log(product);
      addToCart(product);
    }}
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
);

export default AddToCartIcon;
