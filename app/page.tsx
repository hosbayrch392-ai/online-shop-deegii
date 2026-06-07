"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Шорт", price: 45000, image: "/short.jpg" },
  { id: 2, name: "Өмд", price: 75000, image: "/omd.jpg" },
  { id: 3, name: "Потволк", price: 35000, image: "/potvolk.jpg" },
  { id: 4, name: "Палааж", price: 85000, image: "/palaaj.jpg" },
  { id: 5, name: "Цамц", price: 55000, image: "/tsamts.jpg" },
  { id: 6, name: "Гадуур хувцас", price: 95000, image: "/gaduur.jpg" },
  { id: 7, name: "Юүпка", price: 65000, image: "/yupek.jpg" },
  { id: 8, name: "Топ", price: 30000, image: "/top.jpg" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addToCart = (product: any) => setCart([...cart, product]);
  const removeFromCart = (index: number) =>
    setCart(cart.filter((_, i) => i !== index));
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const sendOrder = async () => {
    if (cart.length === 0) return alert("Сагс хоосон байна!");
    if (!name || /\d/.test(name))
      return alert("Нэрээ зөв оруулна уу (зөвхөн үсэг)!");
    if (!phone || phone.length < 8)
      return alert("Утасны дугаараа зөв оруулна уу (наад зах нь 8 оронтой)!");

    const orderData = {
      access_key: "731e089d-5238-4e5c-a251-40f038395952",
      subject: "Шинэ захиалга ирлээ!",
      message: `Захиалга: ${cart.map((i) => i.name).join(", ")}. Нийт дүн: ${totalPrice.toLocaleString()} ₮. Хэрэглэгч: ${name}, Утас: ${phone}`,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      alert("Баярлалаа! Таны захиалга амжилттай илгээгдлээ.");
      setCart([]);
      setName("");
      setPhone("");
      setIsCartOpen(false);
    } else {
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg"
        >
          🛒 ({cart.length})
        </button>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-sm h-full p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Таны сагс</h2>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500"
                >
                  X
                </button>
              </div>
            ))}
            <div className="mt-6 border-t pt-4">
              <p className="font-bold mb-4">
                Нийт: {totalPrice.toLocaleString()} ₮
              </p>

              <input
                type="text"
                placeholder="Нэр"
                className="w-full border p-2 mb-2 rounded"
                onChange={(e) =>
                  setName(
                    e.target.value.replace(/[^A-Za-zА-Яа-яЁёӨөҮү\s]/g, ""),
                  )
                }
                value={name}
              />

              <input
                type="text"
                placeholder="Утасны дугаар"
                className="w-full border p-2 mb-4 rounded"
                onChange={(e) =>
                  setPhone(e.target.value.replace(/[^0-9]/g, ""))
                }
                value={phone}
              />

              <button
                onClick={sendOrder}
                className="w-full bg-green-500 text-white py-2 rounded"
              >
                ЗАХИАЛАХ
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-gray-200 mt-2 py-2 rounded"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold text-center mb-12">
        DEEGII ONLINE SHOP
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-2xl shadow-sm">
            <img
              src={p.image}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-pink-600 mb-4">{p.price.toLocaleString()} ₮</p>
            <button
              onClick={() => addToCart(p)}
              className="w-full bg-black text-white py-2 rounded-xl"
            >
              САГСАНД НЭМЭХ
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
