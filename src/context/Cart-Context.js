import React, { useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { allSuperHeros } from '../data';

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [showCart, setShowCart] = useState(false);
  const [showCartItems, setShowCartItems] = useState(false);
  const isCartEmpty = cart.length === 0;

  useEffect(() => {
    setShowCart(!isCartEmpty);
  }, [isCartEmpty]);

  const addToCart = (superhero, image, quantity = 1) => {
    setCart((prev) => {
      const existingItem = prev.some(
        (existingItem) => existingItem.superhero === superhero
      );
      if (existingItem) {
        return prev.map((item) => {
          return item.superhero === superhero
            ? { superhero, image, quantity: item.quantity + quantity}
            : item
        });
      } else {
        return [...prev, { superhero, image, quantity }];
      }
    });
  };

  const getImageBySuperHero = (superhero) => {
    return allSuperHeros.find(item => item.superhero.toLowerCase().includes(superhero.toLowerCase())).image || '';
  }

  const removeFromCart = (superhero) => {
    setCart((prev) => {
      return prev.filter((item) => item.superhero !== superhero);
    });
  };

  const value = {
    cart,
    isCartEmpty,
    showCartItems,
    showCart,
    getImageBySuperHero,
    setShowCartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
