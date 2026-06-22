import SectionHeading from './SectionHeading';
import { features } from '../../data/home.data';

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="NIMA UCHUN BIZ?"
          title="Online platformamizning afzalliklari"
          subtitle="Eng yaxshi natijaga erishish uchun barcha imkoniyatlarni sizga taqdim etamiz."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => {
            const FeatureIcon = f.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-6 ${f.color || 'bg-blue-600'}`}
                >
                  <FeatureIcon className="h-7 w-7" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>

                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
