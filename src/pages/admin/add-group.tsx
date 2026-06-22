import Head from 'next/head';
import { useState } from 'react';

const AddGroup = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    teacher: '',
    startDate: '',
    endDate: '',
    duration: '3 oy',
    room: 'Xona 1',
    format: 'Offline (ofisda)',
    maxStudents: '20',
    minStudents: '8',
    price: '490000',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Yangi guruh muvaffaqiyatli yaratildi!');
  };

  return (
    <>
      <Head>
        <title>Yangi guruh yaratish - Admin</title>
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
                { name: 'Talabalar', icon: '👥' },
                { name: "O'qituvchilar", icon: '👨‍🏫' },
                { name: 'Guruhlar', icon: '📚', active: true },
                { name: 'Jadval', icon: '📅' },
                { name: 'Davomat', icon: '✅' },
                { name: 'Baholar', icon: '📊' },
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
              <span>Admin</span>
              <span>›</span>
              <span>Guruhlar</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">Yangi guruh</span>
            </div>
          </div>

          <div className="p-10 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Yangi guruh yaratish</h1>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Asosiy ma'lumotlar</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Guruh nomi *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                      placeholder="Masalan: Frontend-03"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Boshlang'ich holat</label>
                    <select className="w-full px-5 py-4 border border-gray-200 rounded-2xl">
                      <option>Yangi (boshlanmagan)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Kurs *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    >
                      <option>JavaScript dasturlash</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">O'qituvchi *</label>
                    <select
                      name="teacher"
                      value={formData.teacher}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    >
                      <option>Akmal Karimov</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Tavsif</label>
                  <textarea
                    className="w-full px-5 py-4 border border-gray-200 rounded-3xl h-28"
                    placeholder="Guruh haqida qisqacha ma'lumot..."
                  ></textarea>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Dars jadvali</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'].map((day) => (
                    <button
                      key={day}
                      className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-sm font-medium"
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  {['09:00', '10:30', '11:00', '13:00', '14:00', '15:30', '17:30', '19:00'].map(
                    (time) => (
                      <button
                        key={time}
                        className="py-4 bg-white border border-gray-200 rounded-2xl text-sm hover:bg-gray-50"
                      >
                        {time}
                      </button>
                    ),
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Xona</label>
                    <select className="w-full px-5 py-4 border border-gray-200 rounded-2xl">
                      <option>Xona 1</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Format</label>
                    <select className="w-full px-5 py-4 border border-gray-200 rounded-2xl">
                      <option>Offline (ofisda)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="font-semibold mb-6">Talabalar va narx</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Maks. talabalar soni *</label>
                    <input
                      type="number"
                      value={formData.maxStudents}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Min. talabalar soni</label>
                    <input
                      type="number"
                      value={formData.minStudents}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Oylik narx (so'm) *</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-10 py-4 border border-gray-300 rounded-3xl font-medium hover:bg-gray-50 transition"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-4 rounded-3xl font-medium hover:bg-blue-700 transition"
                >
                  Guruhni yaratish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGroup;
