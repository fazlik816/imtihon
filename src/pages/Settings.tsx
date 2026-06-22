import Head from 'next/head';
import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profil');

  return (
    <>
      <Head>
        <title>Sozlamalar - O'quv Markaz</title>
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
                { name: 'Sertifikatlarim', icon: '🏆' },
                { name: 'Profil', icon: '👤' },
                { name: "To'lovlar", icon: '💳' },
                { name: 'Sozlamalar', icon: '⚙️', active: true },
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
            <h2 className="text-2xl font-semibold">Sozlamalar</h2>
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
            <div className="flex gap-8 border-b mb-10">
              {['Profil', 'Bildirishnomalar', 'Xavfsizlik', 'Til va mintaqa'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 font-medium transition border-b-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Profil' && (
              <div className="max-w-3xl">
                <div className="bg-white rounded-3xl p-8 mb-8">
                  <h3 className="font-semibold mb-6">Profil rasmi</h3>
                  <div className="flex items-center gap-6">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-24 h-24 rounded-2xl object-cover"
                      alt=""
                    />
                    <div>
                      <button className="border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50">
                        Rasmini o'zgartirish
                      </button>
                      <p className="text-xs text-gray-500 mt-2">JPG yoki PNG • Max 2 MB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8">
                  <h3 className="font-semibold mb-6">Shaxsiy ma'lumotlar</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ism</label>
                      <input
                        type="text"
                        defaultValue="Bobur"
                        className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Familiya</label>
                      <input
                        type="text"
                        defaultValue="Tojiev"
                        className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="bobur@example.uz"
                        className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefon</label>
                      <input
                        type="tel"
                        defaultValue="+998 90 123 45 67"
                        className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      />
                    </div>
                  </div>
                  <button className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-2xl font-medium">
                    Saqlash
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Bildirishnomalar' && (
              <div className="bg-white rounded-3xl p-8 max-w-2xl">
                <h3 className="font-semibold mb-8">Bildirishnomalar</h3>
                <div className="space-y-8">
                  {[
                    'Dars eslatmasi',
                    "Yangi baho qo'yilganda",
                    "To'lov eslatmasi",
                    "Imtihon e'lonlari",
                    'Markaz yangiliklari',
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{item}</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Xavfsizlik' && (
              <div className="bg-white rounded-3xl p-8 max-w-md">
                <h3 className="font-semibold mb-6">Parolni o'zgartirish</h3>
                <div className="space-y-6">
                  <input
                    type="password"
                    placeholder="Joriy parol"
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                  />
                  <input
                    type="password"
                    placeholder="Yangi parol"
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                  />
                  <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-medium">
                    Parolni yangilash
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'Til va mintaqa' && (
              <div className="bg-white rounded-3xl p-8 max-w-md">
                <h3 className="font-semibold mb-6">Til va mintaqa</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">Interfeys tili</label>
                    <select className="w-full px-5 py-4 border border-gray-200 rounded-2xl">
                      <option>O'zbek</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Vaqt mintaqasi</label>
                    <select className="w-full px-5 py-4 border border-gray-200 rounded-2xl">
                      <option>Toshkent (UTC+5)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
