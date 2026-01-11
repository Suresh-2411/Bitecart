import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (food) => {
  //   setCart([...cart, food]);
  // };

const addToCart = (food) => {
  setCart(prev =>
    prev.find(f => f._id === food._id) ? prev : [...prev, food]
  );
};


  const removeFromCart = (id) => {
    setCart(cart.filter((f) => f._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
