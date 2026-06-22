import Head from 'next/head';

const GroupDetail = () => {
  const students = [
    {
      id: '01',
      name: 'Bobur Tojiev',
      phone: '+998 90 123 45 67',
      attendance: '94%',
      grade: '88',
      payment: "To'langan",
    },
    {
      id: '02',
      name: 'Lola Karimova',
      phone: '+998 94 456 78 90',
      attendance: '92%',
      grade: '85',
      payment: 'Qarzdor',
    },
    {
      id: '03',
      name: 'Akmal Karimov',
      phone: '+998 93 111 22 33',
      attendance: '96%',
      grade: '92',
      payment: "To'langan",
    },
    {
      id: '04',
      name: 'Mavluda Ergasheva',
      phone: '+998 90 901 23 45',
      attendance: '82%',
      grade: '79',
      payment: "To'langan",
    },
    {
      id: '05',
      name: 'Davron Saidov',
      phone: '+998 97 678 90 12',
      attendance: '95%',
      grade: '87',
      payment: "To'langan",
    },
    {
      id: '06',
      name: 'Rustam Olimov',
      phone: '+998 93 345 67 89',
      attendance: '90%',
      grade: '84',
      payment: 'Kutilmoqda',
    },
  ];

  return (
    <>
      <Head>
        <title>Frontend-01 - Guruh tafsiloti</title>
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
                { name: 'Talabalar', icon: '👥' },
                { name: "O'qituvchilar", icon: '👨‍🏫' },
                { name: 'Guruhlar', icon: '📚', active: true },
                { name: 'Jadval', icon: '📅' },
                { name: 'Davomat', icon: '✅' },
                { name: 'Baholar', icon: '📊' },
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
              <span>Guruhlar</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">Frontend-01</span>
            </div>
          </div>

          <div className="p-10">
            <div className="bg-white rounded-3xl p-8 mb-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-4xl text-white">
                    👥
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">Frontend-01</h1>
                    <p className="text-gray-600">
                      JavaScript dasturlash • 15-okt, 2025 — 15-yan, 2026 • Xona 3
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm">
                        Faol
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-2xl text-sm">
                        18 talaba
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-2xl text-sm">
                        94% davomat
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
                    Eksport
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                    Tahrirlash
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-2xl" />
                <div>
                  <p className="font-medium">Akmal Karimov</p>
                  <p className="text-sm text-gray-500">O'qituvchi</p>
                </div>
              </div>
            </div>

            <div className="flex border-b mb-8">
              {['Talabalar (18)', 'Jadval', 'Davomat', 'Baholar', 'Materiallar'].map((tab, i) => (
                <button
                  key={i}
                  className={`px-8 py-4 font-medium border-b-2 transition ${i === 0 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-6 px-8 text-left font-medium">№</th>
                    <th className="py-6 px-8 text-left font-medium">F.I.SH.</th>
                    <th className="py-6 px-8 text-left font-medium">TELEFON</th>
                    <th className="py-6 px-8 text-left font-medium">DAVOMAT</th>
                    <th className="py-6 px-8 text-left font-medium">O'RTACHA BAHO</th>
                    <th className="py-6 px-8 text-left font-medium">TO'LOV</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-6 px-8 text-gray-500 font-medium">{student.id}</td>
                      <td className="py-6 px-8 font-medium">{student.name}</td>
                      <td className="py-6 px-8 text-gray-600">{student.phone}</td>
                      <td className="py-6 px-8">
                        <span className="font-medium text-emerald-600">{student.attendance}</span>
                      </td>
                      <td className="py-6 px-8 font-medium">{student.grade}</td>
                      <td className="py-6 px-8">
                        <span
                          className={`px-5 py-1 rounded-2xl text-sm ${student.payment === "To'langan" ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
                        >
                          {student.payment}
                        </span>
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

export default GroupDetail;
