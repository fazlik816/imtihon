import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Kelajak kasbingizni <span className="text-blue-600">bugun boshlang</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            O'zbekistondagi yetakchi onlayn IT va dizayn ta'lim platformasi. Tajribali mentorlar,
            video darslar va real loyihalar bilan.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Ro'yxatdan o'tish
            </Link>
            <Link
              href="/courses"
              className="border-2 border-gray-800 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Kurslarni ko'rish →
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
            alt="O'quvchilar darsda"
            className="rounded-3xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
