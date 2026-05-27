import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      await axios.post("/api/auth/register", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate("/login");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
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
          <h1 className="text-2xl font-bold text-gray-900">ERP System</h1>
          <p className="text-gray-500 text-sm mt-1">Yangi hisob yaratish</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Ro'yxatdan o'tish
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                To'liq ism
              </label>
              <input
                type="text"
                placeholder="Ism Familiya"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all
                  ${
                    errors.fullName
                      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                {...register("fullName", {
                  required: "Ism kiritilishi shart",
                  minLength: { value: 2, message: "Ism juda qisqa" },
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email manzil
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all
                  ${
                    errors.email
                      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                {...register("email", {
                  required: "Email kiritilishi shart",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email noto'g'ri formatda",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Parol
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all
                  ${
                    errors.password
                      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                {...register("password", {
                  required: "Parol kiritilishi shart",
                  minLength: {
                    value: 6,
                    message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Parolni tasdiqlang
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all
                  ${
                    errors.confirmPassword
                      ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  }`}
                {...register("confirmPassword", {
                  required: "Parolni tasdiqlang",
                  validate: (value) =>
                    value === password || "Parollar mos kelmaydi",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Yuklanmoqda...
                </>
              ) : (
                "Ro'yxatdan o'tish"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Hisobingiz bormi?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
