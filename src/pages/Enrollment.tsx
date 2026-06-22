import Head from 'next/head';
import { useState } from 'react';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    course: '',
    level: '',
    comment: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ariza qabul qilindi! Tez orada siz bilan bog'lanamiz.");
  };

  const popularCourses = [
    {
      name: 'JavaScript dasturlash',
      mentor: 'Akmal Karimov',
      lessons: '32 dars',
      duration: '24 soat',
      price: "590 000 so'm",
    },
    {
      name: 'UX/UI dizayn',
      mentor: 'Madina Ergasheva',
      lessons: '28 dars',
      duration: '20 soat',
      price: "490 000 so'm",
    },
    {
      name: 'Python dasturlash',
      mentor: 'Sherzod Rahimov',
      lessons: '36 dars',
      duration: '28 soat',
      price: "590 000 so'm",
    },
    {
      name: 'React js asoslari',
      mentor: 'Nodira Yusupova',
      lessons: '40 dars',
      duration: '30 soat',
      price: "790 000 so'm",
    },
    {
      name: 'Grafik dizayn',
      mentor: 'Kamola Yusupova',
      lessons: '24 dars',
      duration: '16 soat',
      price: "390 000 so'm",
    },
    {
      name: 'Flutter (mobil)',
      mentor: 'Otabek Salimov',
      lessons: '34 dars',
      duration: '26 soat',
      price: "690 000 so'm",
    },
  ];

  return (
    <>
      <Head>
        <title>Kursga yozilish - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Online kursga yozilish</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kursni tanlang, ro'yxatdan o'ting va istalgan joydan o'qishni boshlang. Bepul demo
              darslar bilan tanishib — hech qanday majburiyatsiz.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-center text-2xl font-semibold mb-10">
              O'qishni boshlash — 4 qadam
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: '1',
                  title: 'Kursni tanlang',
                  desc: 'Katalogdan yoqadigan mos online kursni tanlang — barchasi video darslardan iborat.',
                },
                {
                  num: '2',
                  title: "Ro'yxatdan o'ting",
                  desc: 'Bir daqiqada hisob yaratiling va shaxsiy kabinetingizga darhol kiring.',
                },
                {
                  num: '3',
                  title: 'Bepul demo darslar',
                  desc: "Har bir kursning birinchi darslari bepul — formatni va dasturni sinab ko'ring.",
                },
                {
                  num: '4',
                  title: "O'qishni boshlang",
                  desc: "Qulay tarifni tanlang va istalgan vaqtda, istalgan joydan o'qishni boshlang.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Mashhur online kurslar</h2>
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="py-6 px-8 text-left font-medium">KURS</th>
                    <th className="py-6 px-8 text-left font-medium">MENTOR</th>
                    <th className="py-6 px-8 text-left font-medium">DARSLAR</th>
                    <th className="py-6 px-8 text-left font-medium">DAVOMIYLIGI</th>
                    <th className="py-6 px-8 text-left font-medium">NARX</th>
                    <th className="py-6 px-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {popularCourses.map((course, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-6 px-8 font-medium">{course.name}</td>
                      <td className="py-6 px-8">{course.mentor}</td>
                      <td className="py-6 px-8">{course.lessons}</td>
                      <td className="py-6 px-8">{course.duration}</td>
                      <td className="py-6 px-8 font-semibold">{course.price}</td>
                      <td className="py-6 px-8">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                          Boshlash
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-white rounded-3xl p-10">
              <h2 className="text-2xl font-semibold mb-8">Bepul ro'yxatdan o'ting</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ism *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Familiya</label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Kurs *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Kursni tanlang</option>
                      <option value="JavaScript">JavaScript dasturlash</option>
                      <option value="React">React js asoslari</option>
                      <option value="Python">Python dasturlash</option>
                      <option value="UIUX">UX/UI dizayn</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tajriba darajangiz</label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Boshlang'ich — noldan boshlayman</option>
                      <option value="intermediate">O'rta daraja</option>
                      <option value="advanced">Yuqori daraja</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Izoh</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500"
                    placeholder="Savollaringiz yoki izohingizni yozing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-3xl transition"
                >
                  Ariza yuborish
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Online ta'limda nimaga ega bo'lasiz?</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">🎥 HD video darslar</li>
                  <li className="flex gap-3">📝 Amaliy topshiriqlar</li>
                  <li className="flex gap-3">👨‍🏫 Mentor qo'llab-quvvatlovi</li>
                  <li className="flex gap-3">📜 Sertifikat</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8">
                <h3 className="font-semibold mb-4">Savolingiz bormi?</h3>
                <p className="text-gray-600 mb-6">
                  Qo'ng'iroq qiling yoki telegram orqali yozing — darhol javob beramiz.
                </p>
                <a href="tel:+998711234567" className="block text-xl font-semibold text-blue-600">
                  +998 71 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enrollment;
