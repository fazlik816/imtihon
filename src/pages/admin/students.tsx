import Head from 'next/head';

const Students = () => {
  const students = [
    {
      id: '001',
      name: 'Bobur Tojiev',
      group: 'Frontend-01',
      phone: '+998 90 123 45 67',
      status: 'Faol',
    },
    {
      id: '002',
      name: 'Zilola Ahmedova',
      group: 'Dizayn-02',
      phone: '+998 91 234 56 78',
      status: 'Faol',
    },
    {
      id: '003',
      name: 'Rustam Olimov',
      group: 'Backend-03',
      phone: '+998 93 345 67 89',
      status: 'Faol',
    },
    {
      id: '004',
      name: 'Lola Karimova',
      group: 'Frontend-01',
      phone: '+998 94 456 78 90',
      status: 'Faol',
    },
    {
      id: '005',
      name: 'Madina Nazarova',
      group: 'Dizayn-02',
      phone: '+998 95 567 89 01',
      status: 'Faol',
    },
  ];

  return (
    <>
      <Head>
        <title>Talabalar - Admin</title>
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
            <h2 className="text-2xl font-semibold">Talabalar</h2>

            <div className="flex items-center gap-4">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Talaba qidirish (ism, ID, telefon)..."
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
            <div className="bg-white rounded-3xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="py-6 px-8 text-left font-medium">№</th>
                    <th className="py-6 px-8 text-left font-medium">F.I.SH.</th>
                    <th className="py-6 px-8 text-left font-medium">TELEFON</th>
                    <th className="py-6 px-8 text-left font-medium">GURUH</th>
                    <th className="py-6 px-8 text-left font-medium">TO'LOV</th>
                    <th className="py-6 px-8 text-left font-medium">HOLAT</th>
                    <th className="py-6 px-8 text-left font-medium">AMAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-6 px-8 text-gray-500">{student.id}</td>
                      <td className="py-6 px-8 font-medium">{student.name}</td>
                      <td className="py-6 px-8 text-gray-600">{student.phone}</td>
                      <td className="py-6 px-8">{student.group}</td>
                      <td className="py-6 px-8">
                        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm">
                          To'langan
                        </span>
                      </td>
                      <td className="py-6 px-8">
                        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm">
                          Faol
                        </span>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex gap-3 text-gray-400">👁️ ✏️ 🗑️</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
