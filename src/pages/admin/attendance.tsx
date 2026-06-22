import Head from 'next/head';
import { useState } from 'react';

const Attendance = () => {
  const [selectedDate] = useState('24.11.2025');
  const [group] = useState('Frontend-01 (18 talaba)');

  const students = [
    { id: '81', name: 'Bobur Tojiev', code: 'ST-0123', status: 'keldi' },
    { id: '82', name: 'Lola Karimova', code: 'ST-0126', status: 'keldi' },
    { id: '83', name: 'Akmal Karimov', code: 'ST-0133', status: 'keldi' },
    { id: '84', name: 'Mavluda Ergasheva', code: 'ST-0131', status: 'kechikdi' },
    { id: '85', name: 'Davron Saidov', code: 'ST-0128', status: 'keldi' },
    { id: '86', name: 'Rustam Olimov', code: 'ST-0125', status: 'kelmadi' },
  ];

  return (
    <>
      <Head>
        <title>Davomat - Admin</title>
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
                { name: 'Guruhlar', icon: '📚' },
                { name: 'Jadval', icon: '📅' },
                { name: 'Davomat', icon: '✅', active: true },
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
            <h2 className="text-2xl font-semibold">Davomat</h2>
          </div>

          <div className="p-10">
            <div className="flex items-center gap-6 mb-8">
              <select className="bg-white border border-gray-200 px-6 py-4 rounded-3xl text-sm">
                <option>{group}</option>
              </select>
              <input
                type="date"
                defaultValue="2025-11-24"
                className="bg-white border border-gray-200 px-6 py-4 rounded-3xl text-sm"
              />
              <button className="bg-blue-600 text-white px-8 py-4 rounded-3xl font-medium hover:bg-blue-700 transition">
                Saqlash
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-3xl p-8 text-center">
                <div className="text-green-500 text-4xl mb-2">✅</div>
                <div className="text-5xl font-bold text-green-600">94%</div>
                <div className="text-gray-600 mt-2">Bugungi davomat foizi</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center">
                <div className="text-5xl font-bold">15</div>
                <div className="text-gray-600 mt-2">/ 18 Kelganlar</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center">
                <div className="text-amber-500 text-4xl mb-2">⏰</div>
                <div className="text-5xl font-bold">2</div>
                <div className="text-gray-600 mt-2">Kechikkanlar</div>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center">
                <div className="text-red-500 text-4xl mb-2">❌</div>
                <div className="text-5xl font-bold">1</div>
                <div className="text-gray-600 mt-2">Kelmaganlar</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="py-6 px-8 text-left font-medium">#</th>
                    <th className="py-6 px-8 text-left font-medium">Talaba</th>
                    <th className="py-6 px-8 text-left font-medium">HOLAT</th>
                    <th className="py-6 px-8 text-left font-medium">Izoh</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-6 px-8 font-medium text-gray-500">{student.id}</td>
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 bg-gray-200 rounded-2xl" />
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-gray-500">{student.code}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex gap-3">
                          <button
                            className={`px-6 py-2 rounded-2xl text-sm font-medium ${student.status === 'keldi' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                          >
                            Keldi
                          </button>
                          <button
                            className={`px-6 py-2 rounded-2xl text-sm font-medium ${student.status === 'kechikdi' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                          >
                            Kechikdi
                          </button>
                          <button
                            className={`px-6 py-2 rounded-2xl text-sm font-medium ${student.status === 'kelmadi' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                          >
                            Kelmadi
                          </button>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <input
                          type="text"
                          placeholder="Izoh (ixtiyoriy)..."
                          className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl text-sm focus:outline-none focus:border-gray-300"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex items-center justify-between bg-white rounded-3xl p-6">
              <div className="text-sm">
                Jami <span className="font-semibold">18 talaba</span> • Belgilangan{' '}
                <span className="font-semibold">18 / 18</span> •
                <span className="text-green-600 font-semibold"> 94%</span>
              </div>
              <div className="flex gap-4">
                <button className="border border-gray-300 px-8 py-4 rounded-3xl font-medium hover:bg-gray-50 transition">
                  Bekor qilish
                </button>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-3xl font-medium hover:bg-blue-700 transition">
                  Davomatni saqlash
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
