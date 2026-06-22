import Head from 'next/head';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Xabaringiz yuborildi! Tez orada javob beramiz.');
  };

  return (
    <>
      <Head>
        <title>Aloqa - O'quv Markaz</title>
      </Head>

      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Biz bilan bog'laning</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Savollaringiz bormi? Bepul konsultatsiya olishni xohlaysizmi? Bizga yozing — javob
              beramiz.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl font-semibold mb-8">Xabar yuborish</h2>

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
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mavzu</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Tanlang...</option>
                    <option value="Kurs haqida">Kurs haqida ma'lumot</option>
                    <option value="Konsultatsiya">Bepul konsultatsiya</option>
                    <option value="Hamkorlik">Hamkorlik taklifi</option>
                    <option value="Boshqa">Boshqa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Xabar *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500 resize-y"
                    placeholder="Xabaringizni shu yerda yozing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-3xl transition"
                >
                  Xabarni yuborish
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-10">
                <h3 className="font-semibold text-xl mb-6">Bog'lanish ma'lumotlari</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="font-medium">Manzil</p>
                      <p className="text-gray-600">
                        Amir Temur ko'chasi 108-uy, Toshkent, O'zbekiston
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-600">+998 71 123 45 67</p>
                      <p className="text-gray-600">+998 90 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@oquv.uz</p>
                      <p className="text-gray-600">support@oquv.uz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800"
                  alt="Toshkent"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
