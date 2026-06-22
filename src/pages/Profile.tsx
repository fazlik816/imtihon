import Head from 'next/head';

const Profile = () => {
  const personalInfo = [
    { label: 'Ism', value: 'Bobur' },
    { label: 'Familiya', value: 'Tojiev' },
    { label: "Tug'ilgan sana", value: '14-mart, 2004' },
    { label: 'Jins', value: 'Erkak' },
    { label: 'Email', value: 'bobur@example.uz' },
    { label: 'Telefon', value: '+998 90 123 45 67' },
    { label: 'Manzil', value: 'Toshkent sh., Chilonzor tumani, 19-mavze' },
  ];

  const professionalInfo = [
    { label: "Yo'nalish", value: 'Frontend dasturlash' },
    { label: 'Joriy daraja', value: "O'rta" },
    { label: 'Maqsad', value: "Frontend dasturchi bo'lib ishga joylashish" },
    { label: 'GitHub', value: 'github.com/boburdev' },
    { label: 'LinkedIn', value: 'linkedin.com/in/bobur' },
  ];

  const myCourses = [
    {
      title: 'React.js — zamonaviy frontend',
      mentor: 'Akmal Karimov',
      progress: '62%',
      status: 'Davom etmoqda',
    },
    {
      title: 'Python asoslari',
      mentor: 'Dinoza Yusupova',
      progress: '33%',
      status: 'Davom etmoqda',
    },
    {
      title: 'JavaScript asoslari',
      mentor: 'Akmal Karimov',
      progress: '100%',
      status: 'Tugallangan',
    },
  ];

  return (
    <>
      <Head>
        <title>Profil - O'quv Markaz</title>
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
                { name: 'Profil', icon: '👤', active: true },
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
            <h2 className="text-2xl font-semibold">Profil</h2>

            <div className="relative w-80">
              <input
                type="text"
                placeholder="Qidirish..."
                className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
              />
              <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">Bobur Tojiev</p>
                <p className="text-sm text-gray-500">Talaba</p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div className="p-10">
            <div className="bg-white rounded-3xl p-8 flex items-start gap-8 mb-10">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-28 h-28 rounded-3xl object-cover"
                alt="Bobur Tojiev"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">Bobur Tojiev</h1>
                  <span className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-2xl">
                    Aktiv
                  </span>
                </div>
                <p className="text-gray-500">Talaba ID: ST-0123 • 2025-yil sentyabrdan beri</p>

                <div className="flex gap-6 mt-6 text-sm">
                  <div>📧 bobur@example.uz</div>
                  <div>📞 +998 90 123 45 67</div>
                  <div>📍 Toshkent, Chilonzor tumani</div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
                Profilni tahrirlash
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-3xl p-8">
                <div className="text-5xl mb-4">📊</div>
                <div className="text-5xl font-bold text-green-600">87%</div>
                <div className="text-gray-600 mt-1">O'rtacha natija</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-5xl mb-4">⏰</div>
                <div className="text-5xl font-bold">47</div>
                <div className="text-gray-600 mt-1">O'rganilgan soat</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-5xl mb-4">📚</div>
                <div className="text-5xl font-bold">3</div>
                <div className="text-gray-600 mt-1">Jami kurslar</div>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-5xl mb-4">🏅</div>
                <div className="text-5xl font-bold">2</div>
                <div className="text-gray-600 mt-1">Sertifikat</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-6">Shaxsiy ma'lumotlar</h3>
                <div className="space-y-5">
                  {personalInfo.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold text-xl mb-6">Kasbiy ma'lumotlar</h3>
                <div className="space-y-5">
                  {professionalInfo.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-semibold text-xl mb-6">Mening kurslarim</h3>
              <div className="bg-white rounded-3xl divide-y">
                {myCourses.map((course, i) => (
                  <div key={i} className="p-8 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-gray-500">{course.mentor}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-green-600 font-medium">{course.progress}</span>
                      <p className="text-sm text-gray-500 mt-1">{course.status}</p>
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

export default Profile;
