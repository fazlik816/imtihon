import SectionHeading from './SectionHeading';
import { courses } from '../../data/home.data';

const PopularCourses = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        label="MASHHUR KURSLAR"
        title="Eng yaxshi ko'rinadigan kurslarimiz"
        subtitle="Mehnat bozorida talab yuqori bo'lgan yo'nalishlar bo'yicha amaliy ta'lim."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((c, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-semibold rounded-2xl ${c.tagColor || 'bg-blue-600 text-white'}`}
              >
                {c.tag}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2">{c.title}</h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{c.desc}</p>

              <div className="flex items-center justify-between text-sm mb-5">
                <div className="flex items-center gap-1">
                  <span className="text-amber-400">★</span>
                  <span className="font-medium">{c.rating}</span>
                </div>
                <span className="text-gray-500 text-xs">({c.reviews} ta sharh)</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <div>
                  <span className="text-xl font-bold text-gray-900">{c.price}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-2xl text-sm font-semibold transition">
                  Batafsil
                </button>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                O'qituvchi: <span className="font-medium text-gray-700">{c.teacher}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/courses"
          className="inline-flex items-center gap-2 rounded-3xl border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition"
        >
          Barcha kurslarni ko'rish →
        </a>
      </div>
    </section>
  );
};

export default PopularCourses;
