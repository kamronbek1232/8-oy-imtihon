import React, { useEffect } from "react";

const CartModal = ({ item, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed flex justify-center center w-[350px] h-[50px] top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 border border-gray-300 shadow-lg rounded-lg z-50">
      <h2 className="text-[15px] text-green-700 font-bold mb-4">😊   Продукт был добавлен в корзину</h2>
    </div>
  );
};

export default CartModal;
