import React, { useState } from "react";

const Cart = () => {
  // Estado inicial del carrito (puedes modificar esto según tus datos)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 15, quantity: 2 },
    { id: 3, name: "Product 3", price: 20, quantity: 1 },
  ]);

  // Función para eliminar un producto del carrito
  const handleRemove = (id:number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                <div>
                  <h2 className="text-xl">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;