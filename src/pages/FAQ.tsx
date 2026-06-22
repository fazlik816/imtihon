import { useState } from 'react';
import Head from 'next/head';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "O'qish uchun oldindan bilim kerakmi?",
      answer:
        "Yo'q. Boshlovchi kurslarimiz nolinchi darajadan mo'ljallangan — kompyuterda ishlashning oddiy ko'nikmalari yetarli.",
    },
    {
      question: 'Yosh chegarasi bormi?',
      answer:
        "Yo'q, yosh chegarasi yo'q. 16 yoshdan boshlab har qanday yoshdagi insonlar o'qishi mumkin.",
    },
    {
      question: "Darslar qanday formatda o'tadi?",
      answer:
        "Barcha darslar oldindan yozib olingan video formatida. Qo'shimcha ravishda haftalik jonli sessiyalar mavjud.",
    },
    {
      question: "O'z sur'atimda o'qiy olamanmi?",
      answer: "Ha, to'liq. Video darslar umrbod ochiq bo'ladi.",
    },
    {
      question: 'Bepul demo darslar bormi?',
      answer: 'Ha, har bir kurs uchun bir nechta darslar bepul mavjud.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Head>
        <title>FAQ - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Ko'p so'raladigan savollar</h1>
            <p className="text-gray-600">
              Kurslar, to'lov va sertifikatlar haqidagi eng ko'p so'raladigan savollarga javoblar.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Savolingizni qidirin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500"
            />
            <span className="absolute left-5 top-4 text-gray-400">🔍</span>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-lg pr-8">{faq.question}</span>
                  <span
                    className="text-2xl text-gray-400 transition-transform duration-200"
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ↓
                  </span>
                </button>

                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-3xl p-12 text-center">
            <div className="text-5xl mb-6">🤔</div>
            <h3 className="text-2xl font-semibold mb-3">Javob topa olmadingizmi?</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Bizga yozing yoki qo'ng'iroq qiling — har qanday savolingizga javob beramiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-3xl font-medium hover:bg-blue-700 transition">
                Xabar yozish
              </button>
              <a
                href="tel:+998711234567"
                className="border border-gray-300 px-8 py-4 rounded-3xl font-medium hover:bg-white transition"
              >
                +998 71 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
