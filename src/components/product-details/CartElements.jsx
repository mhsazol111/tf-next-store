import Link from 'next/link';

import CartIcon from '../../../public/images/icons/cart-solid.svg';
import CreditCartIcon from '../../../public/images/icons/credit-card.svg';
import TrashIcon from '../../../public/images/icons/trash.svg';
import { focusClasses } from '../../services/dummyAPI';

const CartElements = ({
  productId,
  price,
  salePrice,
  stock,
  quantity,
  inCart,
  subTotal,
  onIncrement,
  onDecrement,
  onChange,
  onAddToCart,
  onRemoveItem,
}) => (
  <>
    <div className="flex items-end font-bold text-4xl pt-7">
      {salePrice && <span className="mr-3">${salePrice}</span>}
      <span className={salePrice ? 'line-through text-gray-400 text-2xl' : ''}>${price}</span>
    </div>

    <div className="quantity_area flex items-center pt-5 pb-5">
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
        disabled={quantity >= stock}
        className={`${focusClasses} w-10 h-10 text-lg font-semibold bg-white rounded-xl hover:bg-theme_green-300 disabled:bg-gray-50 disabled:cursor-not-allowed`}
      >
        +
      </button>

      <div className="text-sm ml-5">Available: {stock}</div>
    </div>

    {inCart && (
      <div className="font-semibold text-xl pb-4">
        Total: ${salePrice || price} x {quantity} = ${subTotal}
      </div>
    )}

    <div className={`flex flex-wrap items-center ${inCart ? 'pt-2' : 'pt-5'}`}>
      {inCart ? (
        <>
          <Link href="/cart">
            <a
              className={`${focusClasses} flex items-center uppercase text-sm py-3 px-7 font-semibold bg-yellow-200 text-black shadow-lg rounded-full hover:bg-black hover:text-white mr-6`}
            >
              <span className="svg_icon w-4 mr-2 mt-[-3px]">
                <CartIcon />
              </span>
              View in Cart
            </a>
          </Link>
          <button
            type="button"
            onClick={() => onRemoveItem(productId)}
            className={`${focusClasses} flex items-center justify-center uppercase text-white w-[44px] h-[44px] bg-red-500 shadow-lg rounded-full hover:bg-purple-200 hover:text-black`}
          >
            <span className="svg_icon w-4">
              <TrashIcon />
            </span>
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  </>
);
export default CartElements;
