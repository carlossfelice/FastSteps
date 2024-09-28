import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface CartProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  size: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]").map((item: CartProduct) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    const uniqueCartItems: { [key: string]: CartProduct } = {};
    storedCart.forEach(item => {
      const key = `${item.id}-${item.size}`;
      if (uniqueCartItems[key]) {
        uniqueCartItems[key].quantity += item.quantity;
      } else {
        uniqueCartItems[key] = item;
      }
    });

    setCartItems(Object.values(uniqueCartItems));
  }, []);

  const handleRemoveFromCart = (productId: string, size: number) => {
    const updatedCart = cartItems.filter(item => item.id !== productId || item.size !== size);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (productId: string, size: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId && item.size === size) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (productId: string, size: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId && item.size === size && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "").replace(",", ""));
      return total + (price * item.quantity);
    }, 0);
  };

  const total = calculateTotal();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center text-white bg-gray-900">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-4">Add some products to see them here!</p>
        <Link to="/women" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Go to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={`${item.id}-${item.size}`} className="flex items-center justify-between bg-gray-700 rounded-lg p-4 border-b border-gray-600 hover:bg-gray-600 transition duration-200">
            <div className="flex items-center">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400">Size: {item.size}</p>
                <p className="text-gray-300 font-bold">{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id, item.size)}
                    className="bg-gray-600 px-2 rounded-l hover:bg-gray-500 transition duration-200"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id, item.size)}
                    className="bg-gray-600 px-2 rounded-r hover:bg-gray-500 transition duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              className="text-red-400 hover:text-red-300 transition duration-200 font-semibold"
              onClick={() => handleRemoveFromCart(item.id, item.size)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Total: <span className="text-blue-400">${total.toFixed(2)}</span></h3>
      </div>
      <div className="mt-6">
        <button
          onClick={() => navigate("/checkout", { state: { cartItems } })}
          className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
