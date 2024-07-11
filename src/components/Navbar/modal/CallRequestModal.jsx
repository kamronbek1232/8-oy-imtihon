import React, { useState } from 'react';
import image from "../../../../public/image.png"

const CallRequestModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!phone) {
      validationErrors.phone = 'Пожалуйста, введите ваш телефон';
    }

    if (!question) {
      validationErrors.question = 'Пожалуйста, введите ваш вопрос';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const callRequestData = { phone, question };
    localStorage.setItem('callRequest', JSON.stringify(callRequestData));

    setPhone('');
    setQuestion('');
    setErrors({});
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <button className="float-right" onClick={onClose}>×</button>
        <h2 className="text-xl mb-4">Заказать звонок</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <img className='mb-[20px]' src={image} alt="" />
            <label className="block text-sm mb-1">Ваш телефон</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Ваш вопрос</label>
            <textarea
              className="w-full border p-2 rounded"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
            {errors.question && <p className="text-red-500 text-sm mt-1">{errors.question}</p>}
          </div>
          <button type="submit" className="bg-[#088269] text-white py-2 px-4 rounded">Оставить заявку</button>
        </form>
      </div>
    </div>
  );
};

export default CallRequestModal;