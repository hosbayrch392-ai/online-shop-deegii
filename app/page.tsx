export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 p-6 flex flex-col items-center">
      {/* Толгой хэсэг */}
      <h1 className="text-4xl font-bold text-pink-600 mb-2">Deegii Fashion</h1>
      <p className="text-gray-600 mb-8">
        Хамгийн сүүлийн үеийн загварын чиг хандлага
      </p>

      {/* Барааны карт */}
      <div className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-sm">
        {/* Энд зураг орно */}
        <img
          src="/dress1.png"
          alt="Улаан даашинз"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        {/* Барааны мэдээлэл */}
        <h2 className="text-xl font-semibold text-gray-800">
          Зун цагийн даашинз
        </h2>
        <p className="text-pink-500 font-bold text-lg mt-1 mb-4">120,000 ₮</p>

        {/* Товч */}
        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
          Сагсанд хийх
        </button>
      </div>
    </main>
  );
}
