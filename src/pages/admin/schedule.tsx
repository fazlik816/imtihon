import Head from 'next/head';

const Schedule = () => {
  const days = ['DU', 'SE', 'CHO', 'PA', 'JU', 'SHA', 'YA'];
  const dates = ['24', '25', '26', '27', '28', '29', '30'];

  const scheduleData = [
    {
      time: '09:00',
      mon: 'Frontend-01',
      tue: '',
      wed: 'Frontend-01',
      thu: '',
      fri: 'Frontend-01',
      sat: 'Dizayn-02',
      sun: '',
    },
    {
      time: '11:00',
      mon: 'Dizayn-01',
      tue: 'React-01',
      wed: 'Dizayn-01',
      thu: 'React-01',
      fri: 'Dizayn-01',
      sat: 'React-01',
      sun: '',
    },
    {
      time: '13:00',
      mon: 'Backend-03',
      tue: 'Data-01',
      wed: 'Backend-03',
      thu: 'Data-01',
      fri: 'Backend-03',
      sat: 'Data-01',
      sun: '',
    },
    {
      time: '14:00',
      mon: 'Marketing-01',
      tue: '',
      wed: 'Marketing-01',
      thu: '',
      fri: 'Marketing-01',
      sat: '',
      sun: '',
    },
    {
      time: '15:30',
      mon: 'Frontend-02',
      tue: 'Java-01',
      wed: 'Frontend-02',
      thu: 'Java-01',
      fri: 'Frontend-02',
      sat: 'Java-01',
      sun: '',
    },
    {
      time: '17:30',
      mon: 'Mobil-01',
      tue: 'Backend-04',
      wed: 'Mobil-01',
      thu: 'Backend-04',
      fri: 'Mobil-01',
      sat: 'Backend-04',
      sun: '',
    },
    {
      time: '19:00',
      mon: 'DevOps-01',
      tue: '',
      wed: 'DevOps-01',
      thu: '',
      fri: 'DevOps-01',
      sat: '',
      sun: '',
    },
  ];

  const rooms = [
    { name: 'Xona 1', lesson: 'Marketing-01 • 14:00' },
    { name: 'Xona 2', lesson: 'Backend-03 • 13:00' },
    { name: 'Xona 3', lesson: 'Frontend-01 • 09:00' },
    { name: 'Xona 4', lesson: "Bo'sh" },
    { name: 'Xona 5', lesson: "Bo'sh" },
  ];

  return (
    <>
      <Head>
        <title>Dars jadvali - Admin</title>
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
                { name: 'Jadval', icon: '📅', active: true },
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
            <h2 className="text-2xl font-semibold">Dars jadvali</h2>
            <div className="flex items-center gap-4">
              <button className="bg-white border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
                Eksport
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
                + Dars qo'shish
              </button>
            </div>
          </div>

          <div className="p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button className="px-5 py-2 bg-white border border-gray-200 rounded-3xl">
                  Kun
                </button>
                <button className="px-5 py-2 bg-blue-600 text-white rounded-3xl">Hafta</button>
                <button className="px-5 py-2 bg-white border border-gray-200 rounded-3xl">
                  Oy
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <button>←</button>
                <span className="font-medium">24-noy — 30-noy, 2025</span>
                <button>→</button>
                <button className="bg-white border border-gray-200 px-6 py-2 rounded-3xl">
                  Bugun
                </button>
              </div>

              <div className="flex gap-3">
                <select className="bg-white border border-gray-200 px-6 py-3 rounded-3xl text-sm">
                  <option>Barcha o'qituvchilar</option>
                </select>
                <select className="bg-white border border-gray-200 px-6 py-3 rounded-3xl text-sm">
                  <option>Barcha guruhlar</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border">
              <div className="grid grid-cols-8 border-b">
                <div className="py-6 border-r"></div>
                {days.map((day, i) => (
                  <div key={i} className="py-6 text-center border-r last:border-r-0 font-medium">
                    {day}
                    <br />
                    <span className="text-2xl font-bold">{dates[i]}</span>
                  </div>
                ))}
              </div>

              {scheduleData.map((row, i) => (
                <div key={i} className="grid grid-cols-8 border-b last:border-b-0 hover:bg-gray-50">
                  <div className="py-6 px-6 border-r text-sm font-medium text-gray-500">
                    {row.time}
                  </div>
                  <div className="p-2 border-r">
                    {row.mon && (
                      <div className="bg-blue-100 text-blue-700 text-xs p-3 rounded-2xl h-full">
                        {row.mon}
                      </div>
                    )}
                  </div>
                  <div className="p-2 border-r">
                    {row.tue && (
                      <div className="bg-purple-100 text-purple-700 text-xs p-3 rounded-2xl h-full">
                        {row.tue}
                      </div>
                    )}
                  </div>
                  <div className="p-2 border-r">
                    {row.wed && (
                      <div className="bg-green-100 text-green-700 text-xs p-3 rounded-2xl h-full">
                        {row.wed}
                      </div>
                    )}
                  </div>
                  <div className="p-2 border-r">
                    {row.thu && (
                      <div className="bg-pink-100 text-pink-700 text-xs p-3 rounded-2xl h-full">
                        {row.thu}
                      </div>
                    )}
                  </div>
                  <div className="p-2 border-r">
                    {row.fri && (
                      <div className="bg-blue-100 text-blue-700 text-xs p-3 rounded-2xl h-full">
                        {row.fri}
                      </div>
                    )}
                  </div>
                  <div className="p-2 border-r">
                    {row.sat && (
                      <div className="bg-emerald-100 text-emerald-700 text-xs p-3 rounded-2xl h-full">
                        {row.sat}
                      </div>
                    )}
                  </div>
                  <div className="p-2">
                    {row.sun && (
                      <div className="bg-purple-100 text-purple-700 text-xs p-3 rounded-2xl h-full">
                        {row.sun}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-6">Xonalar holati — bugun, 24-noyabr</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {rooms.map((room, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{room.name}</div>
                      <div
                        className={`text-xs px-4 py-1 rounded-2xl ${room.lesson === "Bo'sh" ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {room.lesson}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
