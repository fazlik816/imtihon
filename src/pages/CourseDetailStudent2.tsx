import Head from 'next/head';

const CourseDetail = () => {
  return (
    <>
      <Head>
        <title>JavaScript dasturlash - O'quv Markaz</title>
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
                { name: 'Kurslar katalogi', icon: '📖', active: true },
                { name: 'Natijalarim', icon: '📊' },
                { name: 'Sertifikatlarim', icon: '🏆' },
                { name: 'Profil', icon: '👤' },
                { name: "To'lovlar", icon: '💳' },
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
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>Katalog</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">JavaScript dasturlash</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">Bobur Tojiev</p>
                <p className="text-sm text-gray-500">Online talaba</p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-9 h-9 rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div className="p-10">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-2xl">
                    Frontend
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4">JavaScript dasturlash</h1>

                <div className="flex items-center gap-8 text-sm text-gray-600 mb-10">
                  <div className="flex items-center gap-2">
                    <span>⭐ 4.9</span>
                    <span>(312 sharh)</span>
                  </div>
                  <div>540 talaba</div>
                  <div>28 dars</div>
                  <div>40 soat</div>
                  <div>O'zbek tilida</div>
                </div>

                <div className="flex items-center gap-4 mb-12">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-12 h-12 rounded-2xl"
                    alt=""
                  />
                  <div>
                    <p className="font-medium">Akmal Karimov</p>
                    <p className="text-sm text-gray-500">JavaScript Lead</p>
                  </div>
                </div>

                <div className="flex border-b mb-8">
                  <button className="px-8 py-4 border-b-2 border-blue-600 text-blue-600 font-medium">
                    Tavsif
                  </button>
                  <button className="px-8 py-4 text-gray-500 hover:text-gray-700">Dastur</button>
                  <button className="px-8 py-4 text-gray-500 hover:text-gray-700">
                    O'qituvchi
                  </button>
                </div>

                <h2 className="text-2xl font-semibold mb-6">Kurs haqida</h2>
                <p className="text-gray-700 leading-relaxed mb-12">
                  JavaScript — zamonaviy web ilovalarning asosi. Bu kurs noldan boshlab to'liq
                  frontend dasturchisigacha olib boradi. Har bir mavzu amaliy mashqlar va real
                  loyihalar bilan mustahkamlanadi.
                </p>

                <h2 className="text-2xl font-semibold mb-6">Nimalarni o'rganasiz?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">✅ JavaScript asoslari va sintaksisi</li>
                    <li className="flex items-start gap-3">✅ DOM va sahifa bilan ishlash</li>
                    <li className="flex items-start gap-3">✅ Fetch API va REST</li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      ✅ ES6+: arrow, destructuring, spread
                    </li>
                    <li className="flex items-start gap-3">✅ Asinxronlik va Promise</li>
                    <li className="flex items-start gap-3">✅ Git va GitHub bilan ishlash</li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-96">
                <div className="bg-white rounded-3xl p-8 sticky top-8">
                  <div className="text-4xl font-bold mb-1">490 000 so'm</div>
                  <div className="text-gray-400 line-through">690 000 so'm</div>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li className="flex items-center gap-3">✅ 28 ta video dars</li>
                    <li className="flex items-center gap-3">✅ 5 ta amaliy loyiha</li>
                    <li className="flex items-center gap-3">✅ Umrbod kirish</li>
                    <li className="flex items-center gap-3">✅ Tugallagach sertifikat</li>
                    <li className="flex items-center gap-3">✅ Mentor bilan aloqa</li>
                  </ul>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl mt-10 transition">
                    Sotib olish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
