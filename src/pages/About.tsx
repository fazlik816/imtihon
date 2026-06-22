import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Biz haqimizda - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-semibold">BIZ HAQIMIZDA</span>
                <h1 className="text-5xl font-bold mt-4 leading-tight">Bizning hikoyamiz</h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  2015-yilda kichik bir auditoriyada boshlaganmiz, bugun O'zbekistondagi eng yirik
                  onlayn IT va dizayn ta'lim platformalaridan biriga aylandik.
                </p>
                <p className="mt-4 text-gray-600">
                  Bizning maqsad — har bir o'zbek yoshining zamonaviy mehnat bozorida muvaffaqiyatli
                  o'rin egallashiga yordam berish.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
                  alt="O'quv markazi"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-center text-3xl font-bold mb-12">Missiya va vizyonimiz</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Missiyamiz</h3>
              <p className="text-gray-600">
                O'zbek yoshlariga zamonaviy IT va dizayn sohasidagi sifatli, amaliy va eng yangi
                bilimlarni taqdim etish, ularni xalqaro mehnat bozoriga tayyorlash.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="text-purple-600 text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-semibold mb-4">Vizyonimiz</h3>
              <p className="text-gray-600">
                2030-yilga borib Markaziy Osiyodagi eng nufuzli IT ta'lim platformasidan biriga
                aylanish. 50 000+ bitiruvchiga ega bo'lish va xalqaro miqyosda tan olish.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-3xl font-bold mb-4">Tarixiy bosqichlar</h2>
            <p className="text-center text-gray-500 mb-12">10 yillik safarimiz</p>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  year: '2015',
                  title: 'Boshlanish',
                  desc: '15 ta talaba bilan kichik kurslar boshlandi.',
                },
                { year: '2017', title: 'Birinchi muvaffaqiyat', desc: '500+ talaba bitirdi.' },
                {
                  year: '2019',
                  title: 'Online platforma',
                  desc: "O'z onlayn platformamiz ishga tushirildi.",
                },
                { year: '2022', title: 'Xalqaro hamkorlik', desc: '2000+ talaba bitirdi.' },
                {
                  year: '2026',
                  title: 'Yangi davr',
                  desc: "50 000+ bitiruvchi, AI, Data Science va Cybersecurity yo'nalishlari.",
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-8">
                  <div className="w-20 text-right">
                    <span className="text-3xl font-bold text-blue-600">{item.year}</span>
                  </div>
                  <div className="flex-1 border-l-2 border-blue-200 pl-8">
                    <h4 className="font-semibold text-xl">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-center text-3xl font-bold mb-4">Bizning xodimlar</h2>
          <p className="text-center text-gray-600 mb-12">
            Har bir kishi o'z sohasida tajriba va malakaga ega mutaxassis.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Akmal Karimov', role: 'JavaScript Lead' },
              { name: 'Madina Ergasheva', role: 'UX/UI dizayner' },
              { name: 'Sherzod Rahimov', role: 'Python / Django Senior' },
              { name: 'Nodira Yusupova', role: 'React Developer' },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="bg-gray-200 h-64 rounded-3xl mb-4 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-blue-600 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Faxrimiz bo'lgan yutuqlar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">🏆</div>
                <p className="font-semibold">"Eng yaxshi IT maktab"</p>
                <p className="text-sm text-gray-500 mt-1">2023 yil</p>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">📜</div>
                <p className="font-semibold">ISO 9001 sertifikati</p>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">🤝</div>
                <p className="font-semibold">100+ hamkor kompaniya</p>
              </div>
              <div className="bg-white rounded-3xl p-8">
                <div className="text-4xl mb-4">📈</div>
                <p className="font-semibold">94% bitiruvchilar ish bilan ta'minlangan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">Bizning oilamizga qo'shiling</h2>
            <p className="text-xl mb-8">5000+ bitiruvchi qo'shildi. Endi navbat sizniki.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="bg-white text-violet-600 px-10 py-4 rounded-3xl font-semibold"
              >
                Ro'yxatdan o'tish
              </a>
              <a
                href="/courses"
                className="border-2 border-white px-10 py-4 rounded-3xl font-semibold"
              >
                Kurslarni ko'rish
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
