import Head from 'next/head';

const Certificates = () => {
  const certificates = [
    {
      title: 'JavaScript asoslari',
      date: '20-noyabr, 2025',
      score: "94% (A'lo)",
      id: 'UM-2025-0942',
      status: 'completed',
    },
    {
      title: 'Git va GitHub',
      date: '05-sentabr, 2025',
      score: '88% (Yaxshi)',
      id: 'UM-2025-0731',
      status: 'completed',
    },
  ];

  return (
    <>
      <Head>
        <title>Sertifikatlarim - O'quv Markaz</title>
      </Head>

      <div className="flex min-h-screen bg-gray-50">
        <div className="w-72 bg-white border-r border-gray-100 fixed h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-9 h-9 bg-green-600 rounded-2xl flex items-center justify-center text-white font-bold">
                O
              </div>
              <span className="font-bold text-2xl">O'quv Markaz</span>
            </div>

            <nav className="space-y-1">
              {[
                { name: 'Dashboard', icon: '🏠' },
                { name: 'Mening kurslarim', icon: '📚' },
                { name: 'Natijalarim', icon: '📊' },
                { name: 'Sertifikatlarim', icon: '🏆', active: true },
                { name: 'Profil', icon: '👤' },
                { name: "To'lovlar", icon: '💳' },
                { name: 'Sozlamalar', icon: '⚙️' },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition ${item.active ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 ml-72">
          <div className="bg-white border-b px-10 py-5 flex items-center justify-between sticky top-0 z-50">
            <h2 className="text-2xl font-semibold">Sertifikatlarim</h2>

            <div className="relative w-80">
              <input
                type="text"
                placeholder="Sertifikat qidirish..."
                className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
              />
              <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">Bobur Tojiev</p>
                <p className="text-sm text-gray-500">Online talaba</p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div className="p-10">
            <div className="grid md:grid-cols-3 gap-8">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-5xl">🏅</span>
                    </div>
                  </div>

                  <h3 className="text-center font-semibold text-xl mb-2">{cert.title}</h3>
                  <p className="text-center text-gray-500 mb-8">Bobur Tojiev</p>

                  <div className="space-y-4 text-sm mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Berilgan sana</span>
                      <span className="font-medium">{cert.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Yakuniy natija</span>
                      <span className="font-medium text-green-600">{cert.score}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">ID</span>
                      <span className="font-medium">{cert.id}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 border border-gray-300 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
                      Ko'rish
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                      ↓ Yuklash
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-3xl p-8 border border-gray-100 flex flex-col items-center justify-center text-center h-full min-h-[420px]">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  🔒
                </div>
                <h3 className="font-semibold mb-2">React.js — zamonaviy frontend</h3>
                <p className="text-gray-500 mb-8">Kursni tugatib oling</p>
                <button className="bg-blue-600 text-white px-10 py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                  Davom ettirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
