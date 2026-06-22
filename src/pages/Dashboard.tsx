import Head from 'next/head';
import { useState } from 'react';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const stats = [
    { number: '3', label: 'Faol online kurslar' },
    { number: '47', label: "O'rganilgan soat" },
    { number: '2', label: 'Tugallangan' },
    { number: '2', label: 'Sertifikatlar' },
  ];

  const activeCourses = [
    {
      title: 'React.js — zamonaviy frontend',
      mentor: 'Akmal Karimov',
      progress: 62,
      lessons: '14 / 32 dars',
      category: 'Frontend',
    },
    {
      title: 'Python asoslari',
      mentor: 'Dinoza Yusupova',
      progress: 33,
      lessons: '8 / 24 dars',
      category: 'Dasturlash',
    },
    {
      title: 'UX/UI dizayn asoslari',
      mentor: 'Sardor Aliyev',
      progress: 95,
      lessons: '19 / 20 dars',
      category: 'Dizayn',
    },
    {
      title: 'SMM va raqamli marketing',
      mentor: 'Madina Rashidova',
      progress: 17,
      lessons: '3 / 18 dars',
      category: 'Marketing',
    },
  ];

  const recommended = [
    { title: 'TypeScript chuqur', category: 'Frontend', duration: '32 dars • 18 soat' },
    { title: 'Node.js va Express', category: 'Backend', duration: '40 dars • 24 soat' },
    { title: 'Figma bilan prototiplash', category: 'Dizayn', duration: '26 dars • 14 soat' },
    { title: "SQL va ma'lumotlar bazasi", category: 'Data', duration: '22 dars • 12 soat' },
  ];

  return (
    <>
      <Head>
        <title>Dashboard - O'quv Markaz</title>
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
                { name: 'Sozlamalar', icon: '⚙️' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition ${activeNav === item.name ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-8 left-6 right-6 bg-gray-100 rounded-3xl p-5">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-2xl"
                alt=""
              />
              <div>
                <p className="font-medium">Bobur Tojiev</p>
                <p className="text-xs text-gray-500">Online talaba</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-72">
          <div className="bg-white border-b px-10 py-5 flex items-center justify-between sticky top-0 z-50">
            <h2 className="text-2xl font-semibold">Online ta'lim</h2>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Kurs qidirish..."
                  className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
                />
                <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">Salom, Bobur! 👋</p>
                <p className="text-sm text-gray-500">Online talaba</p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-2xl"
                alt="Bobur"
              />
            </div>
          </div>

          <div className="p-10">
            <div className="mb-10">
              <h1 className="text-3xl font-bold">Salom, Bobur! 👋</h1>
              <p className="text-gray-600 mt-2">
                Online o'qishingizni davom ettiring. Bugun yangi narsa o'rganish uchun ajoyib kun!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 mb-10 flex gap-10 items-center">
              <div className="w-80 h-48 bg-gray-900 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="https://picsum.photos/id/1015/400/250"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-green-100 text-green-700 text-xs font-medium px-4 py-1 rounded-2xl mb-3">
                  Davom etmoqda
                </div>
                <h3 className="text-2xl font-bold mb-2">React.js — zamonaviy frontend</h3>
                <p className="text-gray-600 mb-6">
                  Modul 4 • 12-dars: useState va useEffect hooklari
                </p>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Kurs progressi</span>
                    <span className="font-medium">62%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-2 bg-blue-600 w-[62%] rounded-full"></div>
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
                  Darsni davom ettirish
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl p-8">
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Faol online kurslarim</h2>
                <button className="text-blue-600 font-medium">Hammasi →</button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {activeCourses.map((course, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 flex gap-6">
                    <div className="w-28 h-20 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={`https://picsum.photos/id/${100 + i}/200/120`}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-blue-600">{course.category}</span>
                      <h4 className="font-semibold mt-1 mb-2 leading-tight">{course.title}</h4>
                      <p className="text-sm text-gray-500">{course.mentor}</p>

                      <div className="mt-4">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-1.5 bg-blue-600 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{course.lessons}</span>
                          <span>{course.progress}%</span>
                        </div>
                      </div>

                      <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                        Davom ettirish
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Siz uchun tavsiya etiladi</h2>
                <button className="text-blue-600 font-medium">Barcha kurslar →</button>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {recommended.map((course, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition"
                  >
                    <div className="h-40 bg-gray-200 relative">
                      <img
                        src={`https://picsum.photos/id/${200 + i}/400/200`}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-blue-600">{course.category}</span>
                      <h4 className="font-semibold mt-2 mb-3 leading-tight">{course.title}</h4>
                      <p className="text-xs text-gray-500">{course.duration}</p>
                      <button className="mt-6 w-full border border-gray-300 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
                        Batafsil
                      </button>
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

export default Dashboard;
