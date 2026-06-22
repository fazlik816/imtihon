import SectionHeading from './SectionHeading';
import { teachers } from '../../data/home.data';

const Teachers = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 bg-gray-50">
      <SectionHeading
        label="JAMOAMIZ"
        title="Bizning o'qituvchilar"
        subtitle="Soha mutaxassislari sizga bilim va tajriba ulashishga tayyor."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {teachers.map((t, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-52 bg-gray-100 flex items-center justify-center p-6">
              <img
                src={t.img}
                alt={t.name}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-1">{t.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-4">{t.role}</p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-6 min-h-[42px]">{t.bio}</p>

              <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-5">
                {t.stats?.map(([value, label], i) => (
                  <div key={i} className="text-center">
                    <p className="font-bold text-gray-900 text-base">{value}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/Teachers"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          Barcha o'qituvchilarni ko'rish →
        </a>
      </div>
    </section>
  );
};

export default Teachers;
