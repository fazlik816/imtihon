import Head from 'next/head';
import { useState } from 'react';

const Lesson = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>useState va useEffect hooklari - O'quv Markaz</title>
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

            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8">
              ← Kurslarim
            </button>

            <h3 className="font-semibold mb-6">Kurs dasturi</h3>
            <div className="space-y-6 text-sm">
              <div>
                <p className="font-medium text-blue-600 mb-2">Modul 4 • Hooklar</p>
                <div className="pl-4 space-y-4">
                  <div className="flex items-center gap-3 text-green-600">
                    <span>✔</span>
                    <span>Hooklarga kirish</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-600">
                    <span>✔</span>
                    <span>useEffect asoslari</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-2xl">
                    <span className="text-blue-600">▶</span>
                    <span className="font-medium">useState va useEffect hooklari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-72">
          <div className="bg-white border-b px-10 py-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-900">← Oldingi dars</button>
              <div className="text-sm text-gray-400">14 / 32 dars</div>
              <button className="text-blue-600 font-medium">Keyingi dars →</button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-28 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-1.5 bg-blue-600 w-[62%] rounded-full"></div>
                </div>
                <span className="font-medium">62%</span>
              </div>
              <button className="text-red-500 hover:text-red-600 font-medium">Chiqish</button>
            </div>
          </div>

          <div className="p-10 max-w-5xl">
            <div className="mb-8">
              <span className="text-blue-600 font-medium">MODUL 4 • 12-DARS</span>
              <h1 className="text-3xl font-bold mt-2">useState va useEffect hooklari</h1>
              <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
                <div>18 daqiqa</div>
                <div>14 / 32 dars</div>
                <div>Akmal Karimov</div>
              </div>
            </div>

            <div className="relative bg-black rounded-3xl overflow-hidden mb-12 aspect-video flex items-center justify-center">
              <img
                src="https://picsum.photos/id/1015/1200/700"
                alt="Video"
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition">
                  <span className="text-4xl text-blue-600 ml-1">▶</span>
                </div>
              </button>
              <div className="absolute bottom-6 right-6 bg-black/70 text-white text-xs px-3 py-1 rounded">
                18:24
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-6">
                Bu darsda React'ning eng muhim ikki hookasi — useState va useEffect bilan ishlashni
                o'rganamiz.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Component holatini (state) qanday saqlash, yangilash va yon ta'sirlarni (side
                effects) boshqarishni amaliy misollarda ko'rib chiqamiz.
              </p>

              <h3 className="text-xl font-semibold mb-4">Ushbu darsda:</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>useState bilan holatni boshqarish</li>
                <li>useEffect va bog'liqliklar massivi (dependency array)</li>
                <li>Component hayot sikli (lifecycle)</li>
                <li>Keng tarqalgan xatolar va ulardan qochish</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-96 border-l border-gray-100 bg-white h-screen overflow-y-auto hidden xl:block">
          <div className="p-6">
            <h3 className="font-semibold mb-6">Kurs dasturi</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <p className="font-medium">Modul 4 • Hooklar</p>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-green-600">
                    <span>Hooklarga kirish</span>
                    <span>10:05</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>useEffect asoslari</span>
                    <span>09:30</span>
                  </div>
                  <div className="flex justify-between bg-white p-3 rounded-xl font-medium">
                    <span>useState va useEffect hooklari</span>
                    <span>18:24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
