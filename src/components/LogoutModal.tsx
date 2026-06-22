import { useState } from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 overflow-hidden">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Tizimdan chiqasizmi?</h3>
          <p className="text-gray-600 leading-relaxed">
            Hisobingizdan chiqmoqchimisiz? Davom etish uchun qaytadan login va parolingiz bilan
            tizimga kirishingiz kerak bo'ladi.
          </p>
        </div>

        <div className="flex border-t">
          <button
            onClick={onClose}
            className="flex-1 py-5 text-gray-700 font-medium hover:bg-gray-100 transition border-r"
          >
            Bekor qilish
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-5 text-white font-medium bg-red-600 hover:bg-red-700 transition"
          >
            Ha, chiqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
