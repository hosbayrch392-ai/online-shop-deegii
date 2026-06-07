"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Шорт", price: 45000, image: "/short.jpg" },
  { id: 2, name: "Өмд", price: 75000, image: "/omd.jpg" },
  { id: 3, name: "Потволк", price: 35000, image: "/potvolk.jpg" },
  { id: 4, name: "Палааж", price: 85000, image: "/palaaj.jpg" },
  { id: 5, name: "Цамц", price: 55000, image: "/tsamts.jpg" },
  { id: 6, name: "Гадуур хувцас", price: 95000, image: "/gaduur.jpg" },
  { id: 7, name: "Юүпка", price: 65000, image: "/yupek.jpg" }, // Энд заслаа
  { id: 8, name: "Топ", price: 30000, image: "/top.jpg" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: any) => setCart([...cart, product]);
  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg"
        >
          🛒 Сагс ({cart.length})
        </button>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-sm h-full p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Таны сагс</h2>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2 border-b pb-2"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-4">
                  <span>{item.price.toLocaleString()} ₮</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 font-bold"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 border-t pt-4">
              <p className="text-xl font-bold">
                Нийт: {totalPrice.toLocaleString()} ₮
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 w-full bg-gray-200 p-2 rounded-xl"
              >
                Хаах
              </button>
              <button className="mt-2 w-full btn-order">ЗАХИАЛАХ</button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold text-center mb-12 gradient-text">
        deegii-online-shop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="w-full h-64 bg-gray-200 rounded-2xl mb-6 overflow-hidden image-hover">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg text-pink-600 font-semibold mb-6">
              {product.price.toLocaleString()} ₮
            </p>
            <button
              onClick={() => addToCart(product)}
              className="btn-order w-full"
            >
              САГСАНД НЭМЭХ
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
