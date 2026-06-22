import Head from 'next/head';

const StudentProfile = () => {
  return (
    <>
      <Head>
        <title>Bobur Tojiev - Talaba Profili</title>
      </Head>

      <div className="flex min-h-screen bg-gray-50">
        <div className="w-72 bg-white border-r border-gray-100 fixed h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold">
                O
              </div>
              <span className="font-bold text-2xl">O'quv Markaz</span>
            </div>

            <nav className="space-y-1">
              {[
                { name: 'Dashboard', icon: '🏠' },
                { name: 'Talabalar', icon: '👥', active: true },
                { name: "O'qituvchilar", icon: '👨‍🏫' },
                { name: 'Guruhlar', icon: '📚' },
                { name: 'Jadval', icon: '📅' },
                { name: 'Davomat', icon: '✅' },
                { name: "To'lovlar", icon: '💰' },
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
              <span>Admin</span>
              <span>›</span>
              <span>Talabalar</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">Bobur Tojiev</span>
            </div>
          </div>

          <div className="p-10">
            <div className="bg-white rounded-3xl p-8 flex items-start gap-8 mb-10">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-32 h-32 rounded-3xl object-cover"
                alt="Bobur Tojiev"
              />
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <h1 className="text-3xl font-bold">Bobur Tojiev</h1>
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm">
                    Faol talaba
                  </span>
                </div>
                <p className="text-gray-500">ID: ST-0123 • 15-iyul, 2025-dan beri</p>

                <div className="flex gap-6 mt-6 text-sm">
                  <div>📧 bobur.tojiev@gmail.com</div>
                  <div>📞 +998 90 123 45 67</div>
                  <div>📍 Toshkent, Mirzo Ulug'bek tumani</div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="bg-white border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
                    Xabar yuborish
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                    Tahrirlash
                  </button>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-6">Shaxsiy ma'lumotlar</h3>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">F.I.Sh.</span>
                    <span className="font-medium">Tojiev Bobur Akmal o'g'li</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tug'ilgan sana</span>
                    <span className="font-medium">12-mart, 2003-yil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Yoshi</span>
                    <span className="font-medium">22 yosh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jinsi</span>
                    <span className="font-medium">Erkak</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Millati</span>
                    <span className="font-medium">O'zbek</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-6">Aloqa ma'lumotlari</h3>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Telefon</span>
                    <span className="font-medium">+998 90 123 45 67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium">bobur.tojiev@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Telegram</span>
                    <span className="font-medium">@bobur_dev</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Manzil</span>
                    <span className="font-medium text-right">
                      Toshkent shahar, Mirzo Ulug'bek tumani, Sayilgoh ko'chasi 24-uy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-8">
              <h3 className="font-semibold text-xl mb-6">Ota-ona ma'lumotlari</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="font-medium mb-4">OTASI</p>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">F.I.Sh.</span>
                      <span>Tojiev Akmal Karimovich</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tug'ilgan sana</span>
                      <span>8-iyun, 1975</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Telefon</span>
                      <span>+998 90 111 22 33</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-4">ONASI</p>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">F.I.Sh.</span>
                      <span>Tojieva Munira Rasulovna</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tug'ilgan sana</span>
                      <span>22-aprel, 1978</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Telefon</span>
                      <span>+998 91 222 33 44</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
