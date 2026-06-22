import Head from 'next/head';
import { useState } from 'react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('Payme');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const course = {
    title: 'JavaScript dasturlash',
    mentor: 'Akmal Karimov',
    price: '690 000',
    discount: '200 000',
    finalPrice: '490 000',
  };

  const handlePayment = () => {
    alert("To'lov muvaffaqiyatli amalga oshirildi!");
  };

  return (
    <>
      <Head>
        <title>To'lov - O'quv Markaz</title>
      </Head>

      <div className="min-h-screen bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold">To'lovni rasmiylashtirish</h1>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-8 h-8 rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium">Bobur Tojiev</p>
                <p className="text-xs text-gray-400">Online talaba</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="bg-zinc-900 rounded-3xl p-8">
                <h2 className="text-xl font-semibold mb-8">To'lov usulini tanlang</h2>

                <div className="space-y-4">
                  {[
                    { id: 'Payme', name: 'Payme', desc: "Payme ilovasi orqali tez to'lov" },
                    { id: 'Click', name: 'Click', desc: "Click orqali to'lov" },
                    { id: 'Card', name: 'Plastik karta', desc: 'UzCard / Humo / Visa' },
                  ].map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`flex items-center justify-between p-6 rounded-2xl border transition cursor-pointer ${selectedMethod === method.id ? 'border-blue-500 bg-blue-950/50' : 'border-zinc-700 hover:border-zinc-600'}`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          checked={selectedMethod === method.id}
                          className="accent-blue-500"
                          readOnly
                        />
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-gray-400">{method.desc}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">{method.name}</span>
                    </div>
                  ))}
                </div>

                {selectedMethod === 'Card' && (
                  <div className="mt-8 space-y-6">
                    <div>
                      <label className="block text-sm mb-2">Karta raqami</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="8600 0000 0000 0000"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm mb-2">Amal qilish muddati</label>
                        <input
                          type="text"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          placeholder="00/YY"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">SMS kod / CVV</label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="***"
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-zinc-900 rounded-3xl p-8 sticky top-8">
                <h3 className="font-semibold text-lg mb-6">Buyurtma xulosasi</h3>

                <div className="flex gap-4 mb-8">
                  <img
                    src="https://picsum.photos/id/1015/120/80"
                    className="w-20 h-16 object-cover rounded-xl"
                    alt=""
                  />
                  <div>
                    <p className="font-medium">{course.title}</p>
                    <p className="text-sm text-gray-400">{course.mentor}</p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-zinc-700 pt-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Kurs narxi</span>
                    <span>{course.price} so'm</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Chegirma</span>
                    <span>-{course.discount} so'm</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold border-t border-zinc-700 pt-6">
                    <span>Jami</span>
                    <span>{course.finalPrice} so'm</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full mt-10 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-semibold transition"
                >
                  To'lovni tasdiqlash
                </button>

                <p className="text-center text-xs text-gray-500 mt-6">
                  To'lov xavfsiz himoyalangan. Umrbod kirish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
