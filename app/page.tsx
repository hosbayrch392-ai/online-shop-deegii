export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-2">Deegii Fashion</h1>
      <p className="text-gray-600 mb-8">
        Хамгийн сүүлийн үеийн загварын чиг хандлага
      </p>

      {/* Барааны карт */}
      <div className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-sm">
        <img
          src="/dress1.png"
          alt="Улаан даашинз"
          className="w-full h-64 object-contain rounded-xl mb-4"
        />

        <h2 className="text-xl font-semibold text-gray-800">
          Зун цагийн даашинз
        </h2>
        <p className="text-pink-500 font-bold text-lg mt-1 mb-4">120,000 ₮</p>

        <a
          href="https://wa.me/97699112233?text=Сайн байна уу? Би энэ даашинзыг сонирхож байна."
          target="_blank"
          className="block text-center w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-bold"
        >
          WhatsApp-аар захиалах
        </a>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm mt-8 space-y-4"
        >
          {/* Энэ хэсэгт чиний түлхүүр код байна */}
          <input
            type="hidden"
            name="access_key"
            value="731e089d-5238-4e5c-a251-40f038395952"
          />

          <h3 className="text-xl font-bold text-gray-800">Захиалга өгөх</h3>

          <input
            type="text"
            name="name"
            placeholder="Таны нэр"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Утасны дугаар"
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="address"
            placeholder="Хүргэлтийн хаяг"
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-bold"
          >
            Захиалах
          </button>
        </form>
      </div>
    </main>
  );
}
