import Head from 'next/head';
import Link from 'next/link';

const Pricing = () => {
  const plans = [
    {
      name: 'Boshlovchi',
      price: '390 000',
      period: "so'm/oy",
      description: 'Noldan boshlovchilar uchun kurslar',
      features: [
        "Barcha video darslarga to'liq kirish",
        "Online chat orqali qo'llab-quvvatlash",
        'Uyga vazifalar tekshiruvi',
        'Video darslar arxivi',
        'Kurs sertifikati',
      ],
      popular: false,
      buttonText: "Kurslarni ko'rish",
    },
    {
      name: 'Mashhur',
      price: '590 000',
      period: "so'm/oy",
      description: "Eng ko'p tanlanadigan kasbiy kurslar",
      features: [
        'Barcha video darslar + bonus materiallar',
        'Haftalik joriy online sessiyalar',
        'Shaxsiy mentor (haftada 1 soat)',
        'Portfolio loyihalari ustida ishlash',
        'Ishga joylashishda yordam',
        'Kurs sertifikati',
      ],
      popular: true,
      buttonText: "Kurslarni ko'rish",
    },
    {
      name: 'Kasbiy',
      price: '890 000',
      period: "so'm/oy",
      description: "Kasb egallash uchun to'liq dasturlar",
      features: [
        'Haftasiga 3 ta individual online dars',
        'Moslashuvchan dars jadvali',
        "Shaxsiy o'quv dasturi",
        '24/7 mentor bilan aloqa',
        'Ishga joylashishda yordam',
        'Kurs sertifikati',
      ],
      popular: false,
      buttonText: "Kurslarni ko'rish",
    },
  ];

  return (
    <>
      <Head>
        <title>Narxlar - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Har bir kurs uchun adolatli narx</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Har kurs — bir martalik to'lov va umrbod kirish. Yashirin to'lovlar yo'q, demo darslar
              bepul.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 relative transition-all hover:shadow-2xl ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-medium px-6 py-1 rounded-2xl">
                    Eng mashhur
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> {plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-center text-3xl font-bold mb-4">Chegirmalar</h2>
            <p className="text-center text-gray-600 mb-12">
              Bir-bir bilan qo'shilsa — eng katta chegirma
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  percent: '-15%',
                  title: "Oldindan to'lov",
                  desc: "Kursni to'liq narxida bir martalik to'lov qiling",
                },
                {
                  percent: '-10%',
                  title: 'Aka-uka va opa-singillar',
                  desc: 'Bir oiladan ikki yoki undan ortiq talaba',
                },
                {
                  percent: '-10%',
                  title: 'Talabalar uchun',
                  desc: 'OTM talabasi ekanligingizni tasdiqlovchi hujjat bilan',
                },
                {
                  percent: '-5%',
                  title: "Do'stingizni olib keling",
                  desc: "Siz ham, do'stingiz ham bir nechta chegirma olasiz",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition"
                >
                  <div className="text-4xl font-bold text-green-600 mb-3">{item.percent}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-center text-3xl font-bold mb-12">Darajalarni taqqoslash</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-6 text-left">Imkoniyat</th>
                    <th className="p-6 text-center">Boshlovchi</th>
                    <th className="p-6 text-center bg-blue-50">Mashhur</th>
                    <th className="p-6 text-center">Kasbiy</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Haftalik online sessiyalar', '—', 'Haftada 1', 'Haftada 3 (shaxsiy)'],
                    ["Mentor qo'llab-quvvatlovi", 'Chat', 'Shaxsiy mentor', '24/7 yakka-yakka'],
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-6 font-medium">{row[0]}</td>
                      <td className="p-6 text-center">{row[1]}</td>
                      <td className="p-6 text-center font-medium text-blue-600">{row[2]}</td>
                      <td className="p-6 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Qaysi kursni tanlashni bilmayapsizmi?</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto">
              Bepul demo darslarni oching — mentor uslubi va dastur bilan tanishib, o'zingizga mos
              kursni tanlang.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/Courses"
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100"
              >
                Bepul demo darslar
              </Link>
              <Link
                href="/contact"
                className="border border-white/50 px-10 py-4 rounded-2xl font-semibold hover:bg-white/10"
              >
                Konsultatsiya olish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
