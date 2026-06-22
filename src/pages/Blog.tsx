import Head from 'next/head';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center">Foydali maqolalar va yangiliklar</h1>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
              IT, dasturlash, dizayn va karyera bo'yicha eng dolzarb materiallar
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
                alt="Featured"
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>Tanlangan • 2026-yil eng yaxshi maqola</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight mb-4">
                  2026-yilda dasturchilik karyerasini qanday boshlash kerak?
                </h2>
                <p className="text-gray-600 mb-6">
                  Sohaga endi qadam tashlayotganlarga atroflicha qo'llanma. Qaysi yo'nalishni
                  tanlash, qancha vaqt ketadi va birinchi ishga qanday tayyorlanish bo'yicha amaliy
                  tavsiyalar.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium">Akmal Karimov</p>
                      <p className="text-xs text-gray-500">15-may, 2026 • 8 daqiqa o'qish</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:underline">
                    O'qish →
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'React 19dagi yangi xususiyatlar',
                  category: 'Frontend',
                  author: 'Nodira Yusupova',
                },
                {
                  title: 'UX/UI dizaynda 10 ta keng tarqalgan xato',
                  category: 'Dizayn',
                  author: 'Madina Ergasheva',
                },
                {
                  title: 'Django va Flask: qaysi birini tanlash?',
                  category: 'Backend',
                  author: 'Sherzod Rahimov',
                },
                {
                  title: 'Flutter bilan birinchi ilovani 1 kunda yaratish',
                  category: 'Mobil',
                  author: 'Otabek Salimov',
                },
                {
                  title: 'Machine Learningga nimadan boshlash kerak?',
                  category: 'Data Science',
                  author: 'Sevara Tursunova',
                },
                {
                  title: "SEO 2026: nima o'zgardi?",
                  category: 'Marketing',
                  author: 'Diloraxon Nazarova',
                },
              ].map((post, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="h-56 bg-gray-200 relative">
                    <img
                      src={`https://picsum.photos/id/${40 + i}/600/400`}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-blue-600">{post.category}</span>
                    <h3 className="font-semibold text-lg mt-2 leading-tight mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{post.author}</span>
                      <a href="#" className="text-blue-600 hover:underline text-sm">
                        O'qish →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-1 bg-white rounded-3xl p-2 shadow-sm">
                <button className="px-4 py-3 hover:bg-gray-100 rounded-3xl">←</button>
                <button className="px-5 py-3 bg-blue-600 text-white rounded-3xl">1</button>
                <button className="px-5 py-3 hover:bg-gray-100 rounded-3xl">2</button>
                <button className="px-5 py-3 hover:bg-gray-100 rounded-3xl">3</button>
                <button className="px-5 py-3 hover:bg-gray-100 rounded-3xl">7</button>
                <button className="px-4 py-3 hover:bg-gray-100 rounded-3xl">→</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white rounded-3xl p-8">
              <h3 className="font-semibold mb-6">KATEGORIYALAR</h3>
              <div className="space-y-4">
                {[
                  'Frontend',
                  'Backend',
                  'Dizayn',
                  'Data Science',
                  'Mobil',
                  'Marketing',
                  'DevOps',
                  'Karyera',
                ].map((cat) => (
                  <div key={cat} className="flex justify-between text-sm">
                    <span>{cat}</span>
                    <span className="text-gray-400">24</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8">
              <h3 className="font-semibold mb-6">MASHHUR MAQOLALAR</h3>
              <div className="space-y-6 text-sm">
                {[
                  'JavaScriptda 5 ta keng qo‘llaniladigan xato',
                  'Figma’da ishlashni qanday boshlash kerak?',
                  'Python’da REST API yaratish 10 daqiqada',
                ].map((title, i) => (
                  <div key={i} className="flex gap-4">
                    <img
                      src={`https://picsum.photos/id/${60 + i}/80/80`}
                      className="w-20 h-20 rounded-2xl object-cover"
                      alt=""
                    />
                    <div>
                      <p className="font-medium leading-tight line-clamp-2">{title}</p>
                      <p className="text-xs text-gray-500 mt-2">8 daqiqa o‘qish</p>
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

export default Blog;
