import Head from 'next/head';

const Payments = () => {
  const payments = [
    {
      date: '14-noyabr, 2025',
      course: 'React.js — zamonaviy frontend',
      amount: '790 000',
      method: 'Payme',
      status: "To'langan",
    },
    {
      date: '02-oktabr, 2025',
      course: 'Python asoslari',
      amount: '590 000',
      method: 'Uzcard',
      status: "To'langan",
    },
    {
      date: '18-avgust, 2025',
      course: 'UX/UI dizayn asoslari',
      amount: '490 000',
      method: 'Click',
      status: "To'langan",
    },
  ];

  return (
    <>
      <Head>
        <title>To'lovlarim - O'quv Markaz</title>
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
                { name: "To'lovlarim", icon: '💳', active: true },
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
            <h2 className="text-2xl font-semibold">Mening to'lovlarim</h2>

            <div className="flex items-center gap-6">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="To'lov qidirish..."
                  className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
                />
                <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-medium hover:bg-blue-700 transition">
                + Yangi kurs olish
              </button>
            </div>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-5xl font-bold mb-1">1 870 000</div>
                <div className="text-gray-600">Jami sarflangan (so'm)</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">📚</div>
                <div className="text-5xl font-bold mb-1">3</div>
                <div className="text-gray-600">Sotib olingan kurslar</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">📅</div>
                <div className="text-5xl font-bold mb-1">1 080 000</div>
                <div className="text-gray-600">Bu yil sarflangan (so'm)</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden mb-8">
              <div className="p-8 border-b">
                <h2 className="text-2xl font-semibold">To'lov tarixi</h2>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-6 px-8 text-left font-medium">SANA</th>
                    <th className="py-6 px-8 text-left font-medium">KURS</th>
                    <th className="py-6 px-8 text-left font-medium">SUMMA</th>
                    <th className="py-6 px-8 text-left font-medium">USUL</th>
                    <th className="py-6 px-8 text-left font-medium">HOLAT</th>
                    <th className="py-6 px-8 text-left font-medium">CHEK</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {payments.map((payment, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-6 px-8 text-gray-600">{payment.date}</td>
                      <td className="py-6 px-8 font-medium">{payment.course}</td>
                      <td className="py-6 px-8 font-semibold">{payment.amount}</td>
                      <td className="py-6 px-8 text-gray-600">{payment.method}</td>
                      <td className="py-6 px-8">
                        <span className="bg-green-100 text-green-700 px-5 py-1 rounded-2xl text-sm font-medium">
                          To'langan
                        </span>
                      </td>
                      <td className="py-6 px-8">
                        <button className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
                          ↓ PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-6">To'lov usuli</h3>
                <div className="flex gap-4 mb-8">
                  <div className="bg-blue-600 text-white px-6 py-4 rounded-2xl flex-1 text-center font-medium">
                    VISA •••• 4242
                  </div>
                </div>
                <button className="w-full border border-gray-300 py-4 rounded-2xl hover:bg-gray-50 transition">
                  Kartani o'zgartirish
                </button>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8">
                <h3 className="font-semibold mb-4">Yana kurs qo'shing</h3>
                <p className="text-gray-600 mb-8">
                  Katalogdan yangi kurs tanlang — to'lovdan so'ng darrov kirish ochiladi.
                </p>
                <button className="w-full bg-blue-600 text-white py-4 rounded-3xl font-medium hover:bg-blue-700 transition">
                  Kurslar katalogi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
