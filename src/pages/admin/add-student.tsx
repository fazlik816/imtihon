import Head from 'next/head';
import { useState } from 'react';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    gender: 'Erkak',
    phone: '',
    email: '',
    address: '',
    group: '',
    startDate: '',
    parent1Name: '',
    parent1Phone: '',
    parent2Name: '',
    parent2Phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Talaba muvaffaqiyatli qo'shildi!");
  };

  return (
    <>
      <Head>
        <title>Yangi talaba qo'shish - Admin</title>
      </Head>

      <div className="flex min-h-screen bg-gray-50">
        <div className="w-72 bg-white border-r border-gray-100 fixed h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold">
                O
              </div>
              <span className="font-bold text-2xl">O'quv Markaz</span>
            </div>

            <nav className="space-y-1">
              {[
                { name: 'Dashboard', icon: '🏠' },
                { name: 'Talabalar', icon: '👥', active: true },
                { name: "O'qituvchilar", icon: '👨‍🏫' },
                { name: 'Guruhlar', icon: '📚' },
                { name: 'Jadval', icon: '📅' },
                { name: 'Davomat', icon: '✅' },
                { name: "To'lovlar", icon: '💰' },
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
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>Talabalar</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">Yangi talaba qo'shish</span>
            </div>
          </div>

          <div className="p-10 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Yangi talaba qo'shish</h1>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Foto</h3>
                <div className="flex items-center gap-6">
                  <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center text-5xl border-2 border-dashed border-gray-300">
                    👤
                  </div>
                  <div>
                    <button
                      type="button"
                      className="border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-50"
                    >
                      Yuklash
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                      JPG yoki PNG • Max 2 MB • 3x4 kvadrat
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Shaxsiy ma'lumotlar</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Familiya *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ism *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Otasining ismi</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tug'ilgan sana *</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Jins *</label>
                    <div className="flex gap-6 mt-3">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="Erkak"
                          checked={formData.gender === 'Erkak'}
                          onChange={handleChange}
                        />{' '}
                        Erkak
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="Ayol"
                          checked={formData.gender === 'Ayol'}
                          onChange={handleChange}
                        />{' '}
                        Ayol
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Kontakt ma'lumotlari</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon raqam *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-3xl font-semibold text-lg transition"
              >
                Saqlash
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
