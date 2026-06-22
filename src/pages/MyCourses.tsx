import Head from 'next/head';
import { useState } from 'react';

const MyCourses = () => {
  const stats = [
    { number: '3', label: 'Davom etayotgan' },
    { number: '2', label: 'Tugallangan' },
    { number: '2', label: 'Sertifikatlar' },
    { number: '47', label: "O'rganilgan soat" },
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
  ];

  const completedCourses = [
    {
      title: 'JavaScript asoslari',
      mentor: 'Akmal Karimov',
      result: "94% (A'lo)",
      category: 'Frontend',
    },
    {
      title: 'Git va GitHub',
      mentor: 'Jasur Rahimov',
      result: '88% (Yaxshi)',
      category: 'Backend',
    },
  ];

  return (
    <>
      <Head>
        <title>Mening kurslarim - O'quv Markaz</title>
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
                { name: 'Mening kurslarim', icon: '📚', active: true },
                { name: 'Natijalarim', icon: '📊' },
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
            <h2 className="text-2xl font-semibold">Mening kurslarim</h2>

            <div className="flex items-center gap-6">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Kurs qidirish..."
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-3xl p-8">
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Davom etayotgan kurslar (3)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {activeCourses.map((course, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition"
                  >
                    <div className="h-48 relative">
                      <img
                        src={`https://picsum.photos/id/${100 + i}/600/300`}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                      <span className="absolute top-4 left-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-2xl">
                        {course.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold leading-tight mb-1">{course.title}</h4>
                      <p className="text-sm text-gray-500 mb-4">{course.mentor}</p>

                      <div className="mb-5">
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>{course.lessons}</span>
                          <span>{course.progress}%</span>
                        </div>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                        Davom ettirish
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Tugallangan kurslar (2)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {completedCourses.map((course, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 p-6 hover:shadow-xl transition"
                  >
                    <div className="h-48 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                      <img
                        src={`https://picsum.photos/id/${300 + i}/600/300`}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <h4 className="font-semibold mb-2">{course.title}</h4>
                    <p className="text-sm text-gray-500 mb-4">{course.mentor}</p>
                    <p className="text-green-600 font-medium mb-6">{course.result}</p>
                    <button className="w-full bg-green-600 text-white py-3 rounded-2xl text-sm font-medium hover:bg-green-700 transition">
                      Sertifikatni yuklash
                    </button>
                  </div>
                ))}

                <div className="border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center h-full min-h-[380px] hover:border-blue-300 transition cursor-pointer">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl mb-4">
                    +
                  </div>
                  <p className="font-medium text-gray-600">Yangi online kurs olish</p>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Katalogdan kurs tanlang va darrov o'qishni boshlang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
