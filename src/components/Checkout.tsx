// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// interface CartProduct {
//   id: number;
//   name: string;
//   price: string; // Suponiendo que el precio es una cadena con el símbolo de dólar
//   imageUrl: string;
//   size: number;
// }

// const Checkout = () => {
//   const location = useLocation();
//   const cartItems: CartProduct[] = location.state?.cartItems || [];

//   const calculateTotal = (): number => {
//     return cartItems.reduce((total: number, item: CartProduct) => {
//       return total + parseFloat(item.price.replace("$", ""));
//     }, 0);
//   };

//   const handlePayment = async () => {
//     const totalAmount = calculateTotal();
    
//     const response = await fetch("YOUR_BACKEND_URL/create_preference", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ items: cartItems, total: totalAmount }),
//     });

//     const data = await response.json();

//     if (data.init_point) {
//       window.location.href = data.init_point; // Redirigir al enlace de pago de Mercado Pago
//     } else {
//       console.error("Error creating payment preference:", data);
//     }
//   };

//   useEffect(() => {
//     if (cartItems.length === 0) {
//       // Redirigir si el carrito está vacío
//       window.location.href = "/cart";
//     }
//   }, [cartItems]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 text-center">
//       <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
//       <p className="mb-4">Total Amount: ${calculateTotal().toFixed(2)}</p>
//       <button
//         onClick={handlePayment}
//         className="bg-blue-500 text-white py-2 px-4 rounded-full"
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default Checkout;
