import Head from 'next/head';

const Groups = () => {
  const groups = [
    {
      name: 'Frontend-01',
      course: 'JavaScript dasturlash',
      teacher: 'Akmal Karimov',
      students: 18,
      startDate: '15-okt, 2025',
      status: 'Faol',
      schedule: 'Du - 09:00, Cho - 09:00, Ju - 09:00',
    },
    {
      name: 'Frontend-02',
      course: 'JavaScript dasturlash',
      teacher: 'Akmal Karimov',
      students: 16,
      startDate: '1-noy, 2025',
      status: 'Faol',
      schedule: 'Du - 15:30, Cho - 15:30, Ju - 15:30',
    },
    {
      name: 'React-01',
      course: 'React.js asoslari',
      teacher: 'Nodira Yusupova',
      students: 14,
      startDate: '1-dek, 2025',
      status: 'Boshlanmagan',
      schedule: 'Se - 11:00, Pa - 11:00, Sha - 11:00',
    },
    {
      name: 'Backend-03',
      course: 'Python dasturlash',
      teacher: 'Sherzod Rahimov',
      students: 20,
      startDate: '10-sen, 2025',
      status: 'Faol',
      schedule: 'Du - 13:30, Cho - 13:30, Ju - 13:30',
    },
    {
      name: 'Backend-04',
      course: 'Node.js dasturlash',
      teacher: 'Bekzod Salimov',
      students: 12,
      startDate: '5-dek, 2025',
      status: 'Boshlanmagan',
      schedule: 'Se - 17:30, Pa - 17:30, Sha - 17:30',
    },
    {
      name: 'Dizayn-01',
      course: 'UX/UI dizayn',
      teacher: 'Madina Ergasheva',
      students: 15,
      startDate: '1-okt, 2025',
      status: 'Faol',
      schedule: 'Du - 11:00, Cho - 11:00, Ju - 11:00',
    },
  ];

  return (
    <>
      <Head>
        <title>Guruhlar - Admin</title>
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
            <h2 className="text-2xl font-semibold">Guruhlar</h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
              + Guruh yaratish
            </button>
          </div>

          <div className="p-10">
            <div className="flex flex-wrap gap-4 mb-8">
              <input
                type="text"
                placeholder="Guruh nomi yoki kursi..."
                className="flex-1 min-w-[300px] px-6 py-4 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-300"
              />
              <select className="px-6 py-4 bg-white border border-gray-200 rounded-3xl text-sm">
                <option>Barcha kurslar</option>
              </select>
              <select className="px-6 py-4 bg-white border border-gray-200 rounded-3xl text-sm">
                <option>Barcha o'qituvchilar</option>
              </select>
              <select className="px-6 py-4 bg-white border border-gray-200 rounded-3xl text-sm">
                <option>Barcha holatlar</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {groups.map((group, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-semibold text-xl">{group.name}</h3>
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-2xl mt-2 inline-block">
                        {group.course}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-4 py-2 rounded-2xl ${group.status === 'Faol' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}
                    >
                      {group.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gray-200 rounded-2xl" />
                    <div>
                      <p className="font-medium">{group.teacher}</p>
                      <p className="text-sm text-gray-500">O'qituvchi</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div>
                      <p className="text-gray-500">Talabalar</p>
                      <p className="font-semibold">{group.students} ta</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Boshlanish sanasi</p>
                      <p className="font-semibold">{group.startDate}</p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-6">{group.schedule}</div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      👥 +{Math.floor(Math.random() * 10) + 7}
                    </div>
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition">
                      Batafsil →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
