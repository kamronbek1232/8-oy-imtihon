import React, { useState, useEffect } from "react";

const PersonalInfoModal = ({
  isOpen,
  onClose,
  currentName,
  currentSurname,
  currentPhone,
  currentEmail,
  onSave,
  modalField,
}) => {
  const [name, setName] = useState(currentName);
  const [surname, setSurname] = useState(currentSurname);
  const [phone, setPhone] = useState(currentPhone);
  const [email, setEmail] = useState(currentEmail);

  useEffect(() => {
    setName(currentName);
    setSurname(currentSurname);
    setPhone(currentPhone);
    setEmail(currentEmail);
  }, [currentName, currentSurname, currentPhone, currentEmail]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, surname, phone, email });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[500px] h-auto mx-auto">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Персональные данные</h2>
        <form onSubmit={handleSubmit}>
          {(!modalField || modalField === "info") && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Имя*</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Фамилия*</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          {(!modalField || modalField === "phone") && (
            <div className="mb-4">
              <label className="block text-gray-700">Телефон*</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          )}
          {(!modalField || modalField === "email") && (
            <div className="mb-4">
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-[200px] bg-green-700 mt-[10px] text-white p-2 rounded-[20px]"
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoModal;