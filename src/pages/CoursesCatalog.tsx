import Head from 'next/head';
import { useState } from 'react';

const CoursesCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');

  const courses = [
    {
      title: 'JavaScript dasturlash',
      mentor: 'Akmal Karimov',
      category: 'Frontend',
      rating: 4.9,
      reviews: 312,
      price: "490 000 so'm",
      oldPrice: "690 000 so'm",
      image: 'https://picsum.photos/id/1015/400/250',
    },
    {
      title: 'React.js asoslari',
      mentor: 'Nodira Yusupova',
      category: 'Frontend',
      rating: 4.8,
      reviews: 245,
      price: "790 000 so'm",
      oldPrice: "990 000 so'm",
      image: 'https://picsum.photos/id/102/400/250',
    },
    {
      title: 'UX/UI dizayn',
      mentor: 'Madina Ergasheva',
      category: 'Dizayn',
      rating: 4.9,
      reviews: 189,
      price: "890 000 so'm",
      oldPrice: "1 100 000 so'm",
      image: 'https://picsum.photos/id/201/400/250',
    },
    {
      title: 'Python dasturchilik',
      mentor: 'Sherzod Rahimov',
      category: 'Backend',
      rating: 4.7,
      reviews: 421,
      price: "790 000 so'm",
      oldPrice: "990 000 so'm",
      image: 'https://picsum.photos/id/301/400/250',
    },
    {
      title: 'Flutter mobil ilovalar',
      mentor: 'Otabek Salimov',
      category: 'Mobil',
      rating: 4.8,
      reviews: 167,
      price: "990 000 so'm",
      oldPrice: "1 200 000 so'm",
      image: 'https://picsum.photos/id/401/400/250',
    },
    {
      title: 'Data Science va ML',
      mentor: 'Sevara Tursunova',
      category: 'Data Science',
      rating: 4.6,
      reviews: 98,
      price: "1 200 000 so'm",
      oldPrice: "1 500 000 so'm",
      image: 'https://picsum.photos/id/501/400/250',
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'Barchasi' || course.category === selectedCategory),
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
        <title>Kurslar katalogi - O'quv Markaz</title>
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
                { name: 'Mening kurslarim', icon: '📚' },
                { name: 'Kurslar katalogi', icon: '📖', active: true },
                { name: 'Natijalarim', icon: '📊' },
                { name: 'Sertifikatlarim', icon: '🏆' },
                { name: 'Profil', icon: '👤' },
                { name: "To'lovlar", icon: '💳' },
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
            <h2 className="text-2xl font-semibold">Kurslar katalogi</h2>

            <div className="flex items-center gap-4">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Kurs nomi bo'yicha qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 py-3 bg-gray-100 border border-transparent rounded-3xl focus:outline-none focus:border-blue-300"
                />
                <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition">
                + Yangi kurs olish
              </button>
            </div>
          </div>

          <div className="p-10">
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-3xl text-sm font-medium transition ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition"
                >
                  <div className="relative h-52">
                    <img
                      src={course.image}
                      className="w-full h-full object-cover"
                      alt={course.title}
                    />
                    <span className="absolute top-4 left-4 bg-white/90 text-xs font-medium px-4 py-1 rounded-2xl">
                      {course.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg leading-tight mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{course.mentor}</p>

                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-amber-400">★</span>
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-gray-400 text-sm">({course.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold">{course.price}</span>
                        <span className="text-gray-400 line-through text-sm ml-2">
                          {course.oldPrice}
                        </span>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                        Sotib olish
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-1 bg-white rounded-3xl p-2 shadow-sm">
                <button className="px-4 py-3 hover:bg-gray-100 rounded-3xl">←</button>
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    className={`w-10 h-10 rounded-2xl ${n === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {n}
                  </button>
                ))}
                <button className="px-4 py-3 hover:bg-gray-100 rounded-3xl">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesCatalog;
