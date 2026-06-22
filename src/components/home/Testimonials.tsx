import SectionHeading from './SectionHeading';
import { testimonials } from '../../data/home.data';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="TALABALARIMIZ FIKRI"
          title="Talabalarimiz fikri"
          subtitle="5000+ bitiruvchi o'z fikrini bildirdi. Mana, ulardan ba'zilari."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-[15px] mb-8">"{t.text}"</p>

              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-2xl object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-6 rounded-full bg-blue-600" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
