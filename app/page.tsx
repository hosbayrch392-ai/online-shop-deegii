export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 p-6">
      {/* Толгой хэсэг */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold text-pink-600">
          Deegii Fashion
        </h1>
        <p className="text-gray-600 mt-2">
          Хамгийн сүүлийн үеийн загварын чиг хандлага
        </p>
      </header>

      {/* Бүтээгдэхүүний жагсаалт */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Нэг бүтээгдэхүүн */}
        <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-xl transition">
          <img
            src="/images/dress1.jpg"
            alt="Зун цагийн даашинз"
            className="w-full h-64 object-cover rounded-2xl mb-4"
          />
          <h2 className="text-xl font-bold">Зун цагийн даашинз</h2>
          <p className="text-pink-500 font-semibold">120,000 ₮</p>
          <button className="mt-4 w-full bg-pink-500 text-white py-3 rounded-xl font-bold hover:bg-pink-600">
            Сагсанд хийх
          </button>
        </div>
      </div>
    </main>
  );
}
