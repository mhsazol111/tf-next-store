import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [globalCart, setGlobalCart] = useState(null);

  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem(process.env.NEXT_PUBLIC_CART);
      cartData = cartData ? JSON.parse(cartData) : null;
      setGlobalCart(cartData);
    }
  }, []);

  return (
    <CartContext.Provider value={[globalCart, setGlobalCart]}>{children}</CartContext.Provider>
  );
};
