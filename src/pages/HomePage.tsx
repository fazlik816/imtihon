import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const stats = [
  {
    label: "Jami foydalanuvchilar",
    value: "1,240",
    icon: "👥",
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Bugungi buyurtmalar",
    value: "84",
    icon: "📦",
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Daromad (so'm)",
    value: "12,500,000",
    icon: "💰",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    label: "Faol loyihalar",
    value: "27",
    icon: "📋",
    color: "bg-purple-50 text-purple-600",
  },
];

const menuItems = [
  { label: "Foydalanuvchilar", icon: "👤", path: "/users" },
  { label: "Mahsulotlar", icon: "🛍️", path: "/products" },
  { label: "Buyurtmalar", icon: "📦", path: "/orders" },
  { label: "Hisobotlar", icon: "📊", path: "/reports" },
  { label: "Sozlamalar", icon: "⚙️", path: "/settings" },
  { label: "Xabarlar", icon: "💬", path: "/messages" },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Tizimdan chiqildi");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-lg">ERP System</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Xush kelibsiz, Admin</span>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            Chiqish
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Bosh sahifa</h1>
          <p className="text-gray-500 text-sm mt-1">Tizim umumiy ko'rinishi</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-xl mb-3 ${stat.color}`}
              >
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            Tezkor kirish
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:border-blue-400 hover:shadow-md transition-all text-left group"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-sm">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent activity placeholder */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-700 mb-4">
            So'nggi faoliyat
          </h2>
          <div className="space-y-3">
            {[
              {
                text: "Yangi foydalanuvchi qo'shildi",
                time: "5 daqiqa oldin",
                color: "bg-blue-500",
              },
              {
                text: "Buyurtma #1042 tasdiqlandi",
                time: "20 daqiqa oldin",
                color: "bg-green-500",
              },
              {
                text: "Mahsulot zaxirasi yangilandi",
                time: "1 soat oldin",
                color: "bg-yellow-500",
              },
              {
                text: "Hisobot yaratildi",
                time: "2 soat oldin",
                color: "bg-purple-500",
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
              >
                <div className={`w-2 h-2 rounded-full ${activity.color}`} />
                <span className="text-sm text-gray-700 flex-1">
                  {activity.text}
                </span>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
