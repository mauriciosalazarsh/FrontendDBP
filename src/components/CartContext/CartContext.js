import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (product, quantity) => {
    const newCart = [...cart];
    const existingItemIndex = newCart.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      const existingItem = newCart[existingItemIndex];
      existingItem.quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }

    setCart(newCart);
  };

  const removeItemFromCart = (productId) => {
    // Elimina el producto del carrito
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  };

  const clearCart = () => {
    // Vacía el carrito
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
