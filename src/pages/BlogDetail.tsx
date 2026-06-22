import Head from 'next/head';
import Link from 'next/link';

const BlogDetail = () => {
  return (
    <>
      <Head>
        <title>2026-yilda dasturchilik karyerasini qanday boshlash kerak? - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600">
              Bosh sahifa
            </Link>
            <span>›</span>
            <Link href="/Blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Dasturchilik karyerasi</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-4 py-1.5 rounded-2xl mb-4">
              Karyera
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              2026-yilda dasturchilik karyerasini qanday boshlash kerak?
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Akmal Karimov"
                className="w-12 h-12 rounded-2xl object-cover"
              />
              <div>
                <p className="font-semibold">Akmal Karimov</p>
                <p className="text-sm text-gray-500">
                  JavaScript Lead • 15-may, 2026 • 8 daqiqa o'qish
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
              alt="Dasturlash"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 prose prose-lg max-w-none">
              <p className="text-lg text-gray-700">
                Dasturchilik bugungi kunda eng tez o'sayotgan kasblardan biridir. Ammo yoshlar
                ko'pincha “qayerdan boshlash kerak?”, “qaysi tilni o'rganish?” deb savollar bilan
                yuzlashadi.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Nima uchun dasturchilik?</h2>
              <p>O'zbekistonda IT bozori har yili 35% ga o'smoqda...</p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Qaysi yo'nalishni tanlash?</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Frontend</strong> — sayt va ilovalar ko'rinishini yaratish
                </li>
                <li>
                  <strong>Backend</strong> — server va ma'lumotlar bilan ishlash
                </li>
                <li>
                  <strong>Mobile</strong> — Flutter, React Native
                </li>
                <li>
                  <strong>Data Science</strong> va boshqalar
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">O'rganish yo'li</h2>
              <p>
                1-bosqich: Asoslar (1-2 oy)
                <br />
                2-bosqich: JavaScript (3-4 oy)
                <br />
                3-bosqich: Framework (2-3 oy) va h.k.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Birinchi ishga qanday tayyorlanish?</h2>
              <p>Portfolio, rezyume, LinkedIn va boshqalar...</p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-12 italic">
                “Dasturchilik bu nafaqat kasb — bu yo‘l. Har kuni yangi narsa o‘rganish tan
                oluvchilar uchun muqammal kasb.”
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-8 sticky top-8">
                <h3 className="font-semibold mb-5">TARKIB</h3>
                <ul className="space-y-3 text-sm">
                  <li className="text-blue-600">• Nima uchun dasturchilik?</li>
                  <li>• Qaysi yo'nalishni tanlash?</li>
                  <li>• O'rganish yo'li</li>
                  <li>• Birinchi ishga tayyorlanish</li>
                  <li>• Xulosa</li>
                </ul>

                <div className="mt-10 pt-8 border-t">
                  <h4 className="font-medium mb-4">Teglar</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Karyera', 'Frontend', '2026', 'Yangilik'].map((tag) => (
                      <span key={tag} className="bg-gray-100 px-4 py-1.5 rounded-2xl text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mt-20">
            <h3 className="text-2xl font-bold mb-8">Izohlar (3)</h3>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8">O'xshash maqolalar</h3>
            <div className="grid md:grid-cols-3 gap-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
