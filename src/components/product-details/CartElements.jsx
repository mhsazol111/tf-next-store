import CartIcon from '../../../public/images/icons/cart-solid.svg';
import CreditCartIcon from '../../../public/images/icons/credit-card.svg';
import { focusClasses } from '../../services/dummyAPI';

/* eslint no-unused-vars: "off" */
const CartElements = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onChange,
  onAddToCart,
  variants,
}) => (
  // console.log('variants, product');
  <>
    <div className="font-bold text-4xl mt-10">
      {product.sale_price && <span className="mr-3">${product.sale_price}</span>}
      <span className={product.sale_price ? 'line-through text-gray-400 text-2xl' : ''}>
        ${product.price}
      </span>
    </div>

    <div className="quantity_area flex items-center mt-5">
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= 1}
        className={`${focusClasses} w-10 h-10 text-lg font-semibold bg-white rounded-xl hover:bg-theme_green-300 disabled:bg-gray-50 disabled:cursor-not-allowed`}
      >
        -
      </button>
      <input
        type="text"
        name="cart_quantity"
        onChange={onChange}
        value={quantity}
        className={`${focusClasses} rounded-xl bg-white w-20 h-10 text-center font-semibold mx-3`}
      />
      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= (product.stock || 99)}
        className={`${focusClasses} w-10 h-10 text-lg font-semibold bg-white rounded-xl hover:bg-theme_green-300 disabled:bg-gray-50 disabled:cursor-not-allowed`}
      >
        +
      </button>

      <div className="text-sm ml-5">Available: {product.stock}</div>
    </div>

    <div className="flex items-center mt-10">
      <button
        type="button"
        onClick={onAddToCart}
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
  </>
);
export default CartElements;
