import { useState } from 'react';
import Head from 'next/head';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');

  const courses = [
    {
      id: 1,
      title: 'JavaScript dasturlash',
      category: 'Frontend',
      price: `490 000 so'm`,
      rating: 4.9,
      duration: '3 oy',
      level: 'Boshlovchi',
      img: 'https://picsum.photos/id/1015/400/250',
    },
    {
      id: 2,
      title: 'React js asoslari',
      category: 'Frontend',
      price: `790 000 so'm`,
      rating: 4.8,
      duration: '4 oy',
      level: `O'rta`,
      img: 'https://picsum.photos/id/102/400/250',
    },
    {
      id: 3,
      title: 'UX/UI dizayn',
      category: 'Dizayn',
      price: `890 000 so'm`,
      rating: 4.9,
      duration: '4 oy',
      level: `O'rta`,
      img: 'https://picsum.photos/id/201/400/250',
    },
    {
      id: 4,
      title: 'Python dasturchilik',
      category: 'Backend',
      price: '790 000 so‘m',
      rating: 4.7,
      duration: '4 oy',
      level: 'Boshlovchi',
      img: 'https://picsum.photos/id/301/400/250',
    },
    {
      id: 5,
      title: 'Flutter mobil ilovalar',
      category: 'Mobil',
      price: '990 000 so‘m',
      rating: 4.8,
      duration: '5 oy',
      level: 'O‘rta',
      img: 'https://picsum.photos/id/401/400/250',
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === 'Barchasi' || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categories = [
    'Barchasi',
    'Frontend',
    'Backend',
    'Dizayn',
    'Mobil',
    'Data Science',
    'Marketing',
    'DevOps',
  ];

  return (
    <>
      <Head>
        <title>Kurslar - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <h1 className="text-4xl font-bold text-center">Barcha kurslarimiz</h1>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            35+ ta zamonaviy onlayn yo'nalishdan o'zingizga mosini tanlang — barchasi video darslar,
            amaliyot va mutaxassis darslariga ega.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            <div className="lg:w-72 bg-white rounded-3xl p-6 h-fit sticky top-8">
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Kurs nomi yoki yo'nalish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500"
                />
                <span className="absolute left-5 top-4 text-gray-400">🔍</span>
              </div>

              <h3 className="font-semibold mb-4">KATEGORIYA</h3>
              <div className="space-y-3 mb-10">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="accent-blue-600"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-3xl font-medium">
                Filtrlash
              </button>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">{filteredCourses.length} ta kurs topildi</p>
                <select className="border border-gray-200 rounded-2xl px-5 py-3 text-sm">
                  <option>Eng mashhur</option>
                  <option>Eng yangi</option>
                  <option>Narxi bo'yicha (arzon)</option>
                  <option>Narxi bo'yicha (qimmat)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                  >
                    <div className="relative">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute top-4 left-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-2xl">
                        {course.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg leading-tight mb-3 line-clamp-2">
                        {course.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
                        <span>⭐ {course.rating}</span>
                        <span>{course.duration}</span>
                        <span>{course.level}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{course.price}</span>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                          Batafsil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-16">
                <div className="flex items-center gap-2 bg-white rounded-3xl p-2 shadow">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      className={`w-10 h-10 rounded-2xl ${n === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
