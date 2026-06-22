import Head from 'next/head';

const Results = () => {
  const stats = [
    { number: '87%', label: "O'rtacha natija", icon: '📊' },
    { number: '11', label: 'Yechilgan testlar', icon: '✅' },
    { number: '10', label: "O'tilgan", icon: '✔️' },
    { number: '95', label: 'Eng yuqori ball', icon: '⚡' },
  ];

  const results = [
    {
      title: 'Modul 4 testi: Hooklar',
      course: 'React.js — zamonaviy frontend',
      date: '12-noyabr, 2025',
      score: '88%',
      status: "O'tdi",
    },
    {
      title: 'Amaliyot: Komponentlar',
      course: 'React.js — zamonaviy frontend',
      date: '28-oktabr, 2025',
      score: '95%',
      status: "O'tdi",
    },
    {
      title: 'Funksiyalar va sikllar testi',
      course: 'Python asoslari',
      date: '15-oktabr, 2025',
      score: '64%',
      status: 'Qayta topshirish mumkin',
    },
    {
      title: 'Yakuniy loyiha: Figma maket',
      course: 'UX/UI dizayn asoslari',
      date: '03-oktabr, 2025',
      score: '92%',
      status: "O'tdi",
    },
    {
      title: "Boshlang'ich test: JS asoslari",
      course: 'Python asoslari',
      date: '21-sentabr, 2025',
      score: '78%',
      status: "O'tdi",
    },
  ];

  return (
    <>
      <Head>
        <title>Natijalarim - O'quv Markaz</title>
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
                { name: 'Natijalarim', icon: '📊', active: true },
                { name: 'Sertifikatlarim', icon: '🏆' },
                { name: 'Profil', icon: '👤' },
                { name: "To'lovlar", icon: '💳' },
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
            <h2 className="text-2xl font-semibold">Natijalarim</h2>

            <div className="relative w-80">
              <input
                type="text"
                placeholder="Test qidirish..."
                className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
              />
              <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">Bobur Tojiev</p>
                <p className="text-sm text-gray-500">Online talaba</p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl p-8">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="p-8 border-b">
                <h2 className="text-2xl font-semibold">Test va topshiriq natijalari</h2>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-6 px-8 text-left font-medium">TEST / TOPSHIRIQ</th>
                    <th className="py-6 px-8 text-left font-medium">KURS</th>
                    <th className="py-6 px-8 text-left font-medium">SANA</th>
                    <th className="py-6 px-8 text-left font-medium">NATIIJA</th>
                    <th className="py-6 px-8 text-left font-medium">HOLAT</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {results.map((result, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-6 px-8 font-medium">{result.title}</td>
                      <td className="py-6 px-8 text-gray-600">{result.course}</td>
                      <td className="py-6 px-8 text-gray-600">{result.date}</td>
                      <td className="py-6 px-8 font-semibold">{result.score}</td>
                      <td className="py-6 px-8">
                        <span
                          className={`inline-block px-5 py-1.5 rounded-2xl text-sm font-medium ${result.status === "O'tdi" ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}
                        >
                          {result.status}
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

export default Results;
