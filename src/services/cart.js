/**
 * Cart Structure

cart = {
  totalItems: 5 (number),
  cartSubTotal: 50 (number),
  items: [
    {
      itemId: unique id
      productId: 1,
      quantity: number,
      itemPrice: number,
      itemSummedPrice: quantity * itemPrice,
      variations: [
        color,
        size,
        ...
      ],
      conditions: [
        offer based on total price,
        offer based on minimum item,
        shipping,
        vat/tax,
        ...
      ],
      itemTotalPrice: itemSummedPrice + conditions,
    },
    ...
  ],
  cartConditions: [
    offer,
    shipping,
    vat,tax, 
    ...
  ],
  cartTotal: cartSubTotal + cartConditions,
};

*/

export const getFloatVal = (val) => (val ? parseFloat(parseFloat(val).toFixed(2)) : null);

export const incrementItem = (current, max) => {
  const count = current > (max || 999) ? current : current + 1;
  return count;
};

export const decrementItem = (current) => {
  const count = current === 1 ? 1 : current - 1;
  return count;
};

export const getCartData = () => {
  if (process.browser) {
    const existingCart = localStorage.getItem(process.env.NEXT_PUBLIC_CART);
    if (existingCart) {
      return JSON.parse(existingCart);
    }
    return null;
  }
  return false;
};

const updateCartLocalStorage = (data) => {
  localStorage.setItem(process.env.NEXT_PUBLIC_CART, JSON.stringify(data));
};

export const getCartProductsCount = () => {
  const cart = getCartData();
  return cart ? cart.totalItems : null;
};

export const isInCart = (id) => {
  const cart = getCartData();
  const items = cart ? cart.items : null;

  if (items) {
    return items.some((item) => item.productId === id);
  }
  return false;
};

export const getProductFromCart = (productId) => {
  const cart = getCartData();
  if (cart) {
    const { items } = cart;
    return items.find((item) => item.productId === productId);
  }
  return null;
};

export const getItemFromCart = (itemId) => {
  const cart = getCartData();
  if (cart) {
    const { items } = cart;
    return items.find((item) => item.itemId === itemId);
  }
  return null;
};

export const addToCart = (product, quantity, variations = null) => {
  if (process.browser) {
    const cart = {};
    const existingCart = getCartData();
    const cartItemData = {
      itemId: `cid_${Date.now()}`,
      productId: product.id,
      quantity: quantity || 1,
      itemPrice: getFloatVal(product.sale_price || product.price),
      itemSummedPrice: getFloatVal((quantity || 1) * (product.sale_price || product.price)),
      itemVariations: variations,
      conditions: null,
      itemTotalPrice: getFloatVal((quantity || 1) * (product.sale_price || product.price)),
      product,
    };

    if (existingCart) {
      // Update the cart with the latest product
      const { totalItems, items } = existingCart;
      items.push(cartItemData);
      const updatedCartSubTotal = items.reduce((total, item) => total + item.itemTotalPrice, 0);

      existingCart.totalItems = totalItems + 1;
      existingCart.cartSubTotal = updatedCartSubTotal;
      existingCart.items = items;
      existingCart.cartTotal = updatedCartSubTotal;

      updateCartLocalStorage(existingCart);
    } else {
      // Adding the first Item
      cart.totalItems = 1;
      cart.cartSubTotal = cartItemData.itemTotalPrice;
      cart.items = [cartItemData];
      cart.cartConditions = null;
      cart.cartTotal = cartItemData.itemTotalPrice;

      updateCartLocalStorage(cart);
    }

    return true;
  }
  return false;
};

export const removeProductFromCart = (productId) => {
  const cart = getCartData();
  const currentProduct = getProductFromCart(productId);
  if (cart && currentProduct) {
    const { totalItems, cartTotal, cartSubTotal, items } = cart;
    const { itemId, itemTotalPrice } = currentProduct;
    const updatedItems = items.filter((item) => item.itemId !== itemId);

    cart.totalItems = totalItems - 1;
    cart.cartSubTotal = cartSubTotal - itemTotalPrice;
    cart.cartTotal = cartTotal - itemTotalPrice;
    cart.items = updatedItems;

    updateCartLocalStorage(cart);
  }
  return false;
};

export const removeItemFromCart = (itemId) => {
  /* eslint no-console: "off" */
  console.log(itemId);
};

export const updateProduct = (productId, data) => {
  const cart = getCartData();
  if (cart && productId && data) {
    const { items } = cart;
    const itemIndex = items.findIndex((item) => item.productId === productId);
    const currentProduct = items[itemIndex];

    if (data.quantity) {
      currentProduct.quantity = data.quantity;
      currentProduct.itemSummedPrice = data.quantity * currentProduct.itemPrice;
      currentProduct.itemTotalPrice = data.quantity * currentProduct.itemPrice;
    }

    const updatedCartSubTotal = items.reduce((total, item) => total + item.itemTotalPrice, 0);

    cart.items = items;
    cart.cartSubTotal = updatedCartSubTotal;
    cart.cartTotal = updatedCartSubTotal;

    updateCartLocalStorage(cart);
  }
};

export const updateCart = () => {
  /* eslint no-console: "off" */
  console.log('cart updated');
};

export const clearCart = () => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_CART);
};
