import { useState } from 'react';
import Head from 'next/head';

const TeacherDetail = () => {
  const [activeTab, setActiveTab] = useState<'haqida' | 'kurslari' | 'sharhlar'>('haqida');

  const teacher = {
    name: 'Akmal Karimov',
    role: 'JavaScript Lead',
    desc: `8 yillik frontend tajribasi. EPAM Systems va Uzcard kompaniyalarida ishlagan, hozir Oquv Markazda JavaScript yo'nalishini boshqaradi.`,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    stats: { courses: 12, students: 540, rating: 4.9, experience: 8 },
    bio: `Akmal Karimov — frontend dasturlash bo'yicha 8 yillik tajribaga ega mutaxassis...`,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Git', 'Webpack', 'Testing'],
    experience: [
      { year: '2022—hozir', position: 'JavaScript Lead', company: `O'quv Markaz, Toshkent` },
      { year: '2020—2022', position: 'Senior Frontend Developer', company: 'Uzcard, Toshkent' },
      { year: '2018—2020', position: 'Frontend Developer', company: 'EPAM Systems' },
    ],
  };

  return (
    <>
      <Head>
        <title>{teacher.name} - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-blue-600">
              Bosh sahifa
            </a>
            <span>›</span>
            <a href="/Teachers" className="hover:text-blue-600">
              O'qituvchilar
            </a>
            <span>›</span>
            <span className="text-gray-900 font-medium">{teacher.name}</span>
          </div>

          <div className="bg-white rounded-3xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-48 h-48 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <span className="uppercase text-blue-600 font-semibold tracking-widest text-sm">
                  {teacher.role.toUpperCase()}
                </span>
                <h1 className="text-4xl font-bold mt-2 mb-4">{teacher.name}</h1>
                <p className="text-gray-600 max-w-2xl">{teacher.desc}</p>

                <div className="grid grid-cols-4 gap-6 mt-8">
                  <div>
                    <div className="text-3xl font-semibold">{teacher.stats.courses}</div>
                    <div className="text-sm text-gray-500">Kurs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold">{teacher.stats.students}+</div>
                    <div className="text-sm text-gray-500">Talaba</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold">{teacher.stats.rating}</div>
                    <div className="text-sm text-gray-500">Reyting</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold">{teacher.stats.experience} yil</div>
                    <div className="text-sm text-gray-500">Tajriba</div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-semibold">
                    Darsga yozilish
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 px-8 py-3.5 rounded-2xl font-semibold">
                    Savol berish
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="flex border-b mb-8">
                {['Haqida', 'Kurslari (4)', 'Sharhlar (186)'].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(['haqida', 'kurslari', 'sharhlar'][index] as any)}
                    className={`px-8 py-4 font-medium border-b-2 transition-all ${
                      activeTab === ['haqida', 'kurslari', 'sharhlar'][index]
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'haqida' && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">O'qituvchi haqida</h3>
                    <p className="text-gray-600 leading-relaxed">{teacher.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ko‘nikmalar</h3>
                    <div className="flex flex-wrap gap-2">
                      {teacher.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 px-4 py-2 rounded-2xl text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ish tajribasi</h3>
                    {teacher.experience.map((exp, i) => (
                      <div key={i} className="mb-6 border-l-2 border-blue-200 pl-6">
                        <div className="font-medium">{exp.year}</div>
                        <div className="text-lg">{exp.position}</div>
                        <div className="text-gray-600">{exp.company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6">
                <h3 className="font-semibold mb-4">Sertifikatlar</h3>
                <div className="space-y-4 text-sm">
                  <div>AWS Certified Developer — Amazon, 2024</div>
                  <div>Meta Frontend Developer — Coursera, 2023</div>
                  <div>Pedagogika asoslari — TDPU, 2022</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6">
                <h3 className="font-semibold mb-4">Dars beradigan vaqtlar</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Du / Chor / Ju</span>
                    <span>18:00 — 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sesh / Pay</span>
                    <span>14:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shanba</span>
                    <span>10:00 — 13:00</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-3xl font-semibold">
                Kursga yozilish
              </button>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Boshqa o'qituvchilar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-24 h-24 mx-auto rounded-2xl mb-4"
                />
                <h4 className="font-semibold">Madina Ergasheva</h4>
                <p className="text-blue-600 text-sm">UX/UI dizayner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDetail;
