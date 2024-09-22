// src/mercadopago.d.ts
interface MercadoPago {
  checkout: (options: {
    preference: {
      items: Array<{
        id: string;
        title: string;
        unit_price: number;
        quantity: number;
      }>;
      back_urls: {
        success: string;
        failure: string;
        pending: string;
      };
      auto_return: string;
    };
    render: {
      container: string;
      label: string;
    };
  }) => void;
}

declare global {
  interface Window {
    MercadoPago: MercadoPago;
  }
}
