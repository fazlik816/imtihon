import Head from 'next/head';

const AdminDashboard = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard - O'quv Markaz</title>
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
                { name: 'Dashboard', icon: '🏠', active: true },
                { name: 'Talabalar', icon: '👥' },
                { name: "O'qituvchilar", icon: '👨‍🏫' },
                { name: 'Guruhlar', icon: '📚' },
                { name: 'Jadval', icon: '📅' },
                { name: 'Davomat', icon: '✅' },
                { name: "To'lovlar", icon: '💰' },
                { name: 'Xabarlar', icon: '✉️' },
                { name: 'Hisobotlar', icon: '📊' },
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
            <h2 className="text-2xl font-semibold">Dashboard</h2>

            <div className="flex items-center gap-6">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Talaba, guruh yoki to'lov qidirish..."
                  className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
                />
                <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
              </div>

              <button className="bg-white border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
                Eksport
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
                + Talaba qo'shish
              </button>
            </div>
          </div>

          <div className="p-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Salom, Anvar! 👋</h1>
              <p className="text-gray-600">
                Bugun 24-noyabr, 2025. Sizning umumiy ko'rsatkichlaringiz quyida.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">👥</div>
                <div className="text-5xl font-bold">124</div>
                <div className="text-gray-600 mt-1">Faol talabalar</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">📅</div>
                <div className="text-5xl font-bold">18</div>
                <div className="text-gray-600 mt-1">Aktiv guruhlar</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-5xl font-bold">86.4M</div>
                <div className="text-gray-600 mt-1">Oylik daromad (so'm)</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-5xl font-bold">87%</div>
                <div className="text-gray-600 mt-1">O'rtacha davomat</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-7 gap-8">
              <div className="lg:col-span-4 bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Daromad statistikasi</h3>
                <div className="h-80 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  Grafik (Bu yerda Chart.js yoki Recharts qo'yiladi)
                </div>
              </div>

              <div className="lg:col-span-3 bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Bugungi darslar</h3>
                <div className="space-y-4">
                  {[
                    { time: '09:00', title: 'JavaScript asoslari', group: 'Xona 3' },
                    { time: '11:00', title: 'UX/UI dizayn', group: 'Xona 5' },
                    { time: '13:30', title: 'Python amaliyot', group: 'Xona 2' },
                    { time: '15:30', title: 'React Hooks', group: 'Xona 3' },
                  ].map((lesson, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="text-sm font-medium w-16">{lesson.time}</div>
                      <div>
                        <p className="font-medium">{lesson.title}</p>
                        <p className="text-sm text-gray-500">{lesson.group}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
