import React, { useState, useEffect } from "react";

const PersonalInfoModal = ({ isOpen, onClose, currentName, currentSurname, currentPhone, currentEmail, onSave }) => {
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

  const handleSave = () => {
    onSave({ name, surname, phone, email });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-2xl mb-4">Personal Information</h2>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Surname</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoModal;