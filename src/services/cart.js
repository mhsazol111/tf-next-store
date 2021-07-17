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
        ...
      ],
      conditions: [
        ...
        offer based on total price
        offer based on minimum item
        shipping,
        vat/tax
      ],
      itemTotalPrice: itemSummedPrice + conditions
    },
  ],
  cartConditions: [
    ...
    offer,
    shipping,
    vat,tax, 
    etc
  ],
  cartTotal: cartSubTotal + cartConditions
};

*/

export const getFloatVal = (val) => (val ? parseFloat(parseFloat(val).toFixed(2)) : null);

export const getCartData = () => {
  // if (process.browser) {
  const existingCart = localStorage.getItem(process.env.NEXT_PUBLIC_CART);
  if (existingCart) {
    return JSON.parse(existingCart);
  }
  return null;
  // }
  // return false;
};

export const getProductFromCart = (rowId) => {
  const cart = getCartData();
  if (cart) {
    const foundItem = cart.find((item) => item.itemId === rowId);
    return foundItem || null;
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
      const { totalItems, items } = existingCart;

      items.push(cartItemData);
      const updatedCartSubTotal = items.reduce((a, b) => a + b.itemTotalPrice, 0);

      existingCart.totalItems = totalItems + 1;
      existingCart.cartSubTotal = updatedCartSubTotal;
      existingCart.items = items;
      existingCart.cartTotal = updatedCartSubTotal;

      localStorage.setItem(process.env.NEXT_PUBLIC_CART, JSON.stringify(existingCart));
    } else {
      // Adding the first Item
      cart.totalItems = 1;
      cart.cartSubTotal = cartItemData.itemTotalPrice;
      cart.items = [cartItemData];
      cart.cartConditions = null;
      cart.cartTotal = cartItemData.itemTotalPrice;

      localStorage.setItem(process.env.NEXT_PUBLIC_CART, JSON.stringify(cart));
    }
  }
  return false;
};

export const clearCart = () => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_CART);
};

export const updateCartItem = (rowId, data) => {
  if (rowId) {
    const product = getProductFromCart(rowId);
    console.log(data);
    if (data.quantity) {
      product.quantity = data.quantity;
    }
    if (data.summedPrice) {
      product.summedPrice = data.summedPrice;
    }
    console.log(product, 'updated');
  }
};

export const getSubTotal = () => {
  const cart = getCartData();
  let subTotal = 0;
  if (!cart) {
    return subTotal;
  }
  cart.map((item) => (subTotal += item.summedPrice));
  return subTotal;
};
