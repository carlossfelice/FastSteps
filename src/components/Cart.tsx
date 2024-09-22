import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

initMercadoPago("APP_USR-ffed56d9-b519-4ac2-abb4-858eb52841f8");

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string; // Agregamos una propiedad para la imagen
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Producto de Prueba",
      price: 100,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/100", // URL de la imagen de prueba
    },
  ]);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createPreference = async () => {
      if (cartItems.length === 0) return; // No crear preferencia si el carrito está vacío
      if (preferenceId) return; // No crear una nueva preferencia si ya existe

      const url = 'https://api.mercadopago.com/checkout/preferences';
      const body = {
        items: cartItems.map(item => ({
          title: item.name,
          quantity: item.quantity,
          currency_id: 'ARS',
          unit_price: item.price,
        })),
        back_urls: {
          success: 'https://www.tuweb.com/success',
          failure: 'https://www.tuweb.com/failure',
          pending: 'https://www.tuweb.com/pending',
        },
        auto_return: 'approved',
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer APP_USR-5556336092694735-092022-c4555c7e01eef8cfab0f28f25a22b259-2001523120'
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Error al crear la preferencia');
        }

        const data = await response.json();
        setPreferenceId(data.id);
      } catch (error) {
        setError('Error al crear la preferencia. Intente nuevamente.');
        console.error('Error al crear la preferencia:', error);
      }
    };

    createPreference();
  }, [cartItems, preferenceId]);

  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                  <div>
                    <h2 className="text-xl">{item.name}</h2>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 text-sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-4">
            {preferenceId && (
              <Wallet 
                initialization={{ preferenceId }} 
                customization={{ texts: { valueProp: 'smart_option' }}}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
