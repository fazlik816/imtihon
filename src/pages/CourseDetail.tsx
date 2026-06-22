import Head from 'next/head';
import Link from 'next/link';

const CourseDetail = () => {
  return (
    <>
      <Head>
        <title>JavaScript dasturlash - O'quv Markaz</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-6 pt-8">
            <div className="flex items-center gap-2 text-sm mb-6">
              <Link href="/" className="hover:underline">
                Bosh sahifa
              </Link>
              <span>›</span>
              <Link href="/Courses" className="hover:underline">
                Kurslar
              </Link>
              <span>›</span>
              <span className="font-medium">JavaScript dasturlash</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center pb-12">
              <div>
                <div className="flex gap-3 mb-4">
                  <span className="bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-2xl">
                    Frontend
                  </span>
                  <span className="bg-green-500/30 text-white text-xs font-medium px-4 py-1.5 rounded-2xl">
                    Boshlovchi
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  JavaScript dasturlash
                </h1>

                <p className="text-lg text-blue-100 mb-8">
                  Nolinchi darajadan boshlab to'liq stack frontend dasturchi bo'lish. ES6+, DOM,
                  asinxronlik, REST API va 5 ta real loyiha bilan amaliy tajriba.
                </p>

                <div className="flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <span>⭐ 4.9</span>
                    <span>(312 sharh)</span>
                  </div>
                  <div>540 talaba</div>
                  <div>3 oy davom etadi</div>
                  <div>O'zbek tilida</div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-10 h-10 rounded-2xl"
                      alt=""
                    />
                    <div>
                      <p className="font-medium">Akmal Karimov</p>
                      <p className="text-xs text-blue-200">JavaScript Lead</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl lg:-mt-12">
                <div className="text-4xl font-bold mb-1">490 000 so'm</div>
                <p className="text-gray-500 line-through">600 000 so'm</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3">✅ 24 ta video dars</li>
                  <li className="flex items-center gap-3">✅ 5 ta amaliy loyiha</li>
                  <li className="flex items-center gap-3">✅ Sertifikat</li>
                  <li className="flex items-center gap-3">✅ Mentor bilan aloqa</li>
                  <li className="flex items-center gap-3">✅ Bo'lib to'lash mumkin</li>
                </ul>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl mt-10 transition">
                  Ro'yxatdan o'tish
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 py-4 rounded-2xl mt-3 transition">
                  Bepul konsultatsiya
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex border-b mb-8">
              {['Tavsif', 'Dastur', `O'quvchi`, 'Sharhlar (312)'].map((tab) => (
                <button
                  key={tab}
                  className="px-8 py-4 border-b-2 border-blue-600 text-blue-600 font-medium"
                >
                  {tab}
                </button>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Kurs haqida</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              JavaScript — zamonaviy web ilovalarning asosi. Bu kurs sizga hech qanday oldindan
              tajriba kerak emas — biz noldan boshlab to'liq fullstack JavaScript dasturchisiga
              aylantiramiz.
            </p>

            <h2 className="text-2xl font-bold mb-6 mt-12">Nimalarni o'rganasiz?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">✅ JavaScript asoslari va sintaksisi</li>
                <li className="flex items-start gap-3">✅ DOM va sahifa bilan ishlash</li>
                <li className="flex items-start gap-3">✅ Fetch API va REST</li>
                <li className="flex items-start gap-3">✅ OOP printsiplari</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">✅ ES6+ arrow, destructuring, spread</li>
                <li className="flex items-start gap-3">✅ Asinxronlik bilan ishlash</li>
                <li className="flex items-start gap-3">✅ Git va GitHub bilan ishlash</li>
                <li className="flex items-start gap-3">✅ Test yozish (Jest)</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-8">
              <h3 className="font-semibold mb-4">KURS MA'LUMOTLARI</h3>
              <div className="space-y-6 text-sm">
                <div className="flex justify-between">
                  <span>Format</span>
                  <span className="font-medium">100% online</span>
                </div>
                <div className="flex justify-between">
                  <span>Boshlanish</span>
                  <span className="font-medium">Hozir</span>
                </div>
                <div className="flex justify-between">
                  <span>Davomiyligi</span>
                  <span className="font-medium">3 oy</span>
                </div>
                <div className="flex justify-between">
                  <span>Daraja</span>
                  <span className="font-medium">Boshlovchi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">O'xshash kurslar</h2>
            <div className="grid md:grid-cols-4 gap-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
