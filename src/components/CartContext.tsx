import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number; // Este es el ID del producto original
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  cartId: number; // Este es un ID único para el carrito
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity' | 'cartId'>) => void;
  removeFromCart: (cartId: number) => void; // Cambia a cartId
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

let nextCartId = 1; // Inicializa un contador de ID para el carrito

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity' | 'cartId'>) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      const newItem = { ...item, quantity: 1, cartId: nextCartId++ }; // Asigna un nuevo ID único para el carrito
      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (cartId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
