const Cta = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-8 py-16 lg:px-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Hoziroq o'z kelajagingizni boshlang
            </h2>
            <p className="mt-6 text-lg text-white/90 max-w-md">
              Ro'yxatdan o'ting va birinchi darsni bepul oling. O'qituvchilarimiz va kurs dasturi
              bilan tanishing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/register"
                className="rounded-3xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl hover:bg-gray-100 transition"
              >
                Bepul ro'yxatdan o'tish
              </a>
              <a
                href="/contact"
                className="rounded-3xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Konsultatsiya olish
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
              alt="Talabalar darsda"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-green-500 text-2xl">✓</div>
                <div>
                  <p className="font-semibold text-gray-900">Birinchi dars bepul</p>
                  <p className="text-sm text-gray-600">30 daqiqa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
