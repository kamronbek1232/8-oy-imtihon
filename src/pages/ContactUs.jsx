import React, { useState } from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import FooterBot from "../components/home/FooterBot";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Имя обязательно";
    if (!formData.phone) formErrors.phone = "Телефон обязателен";
    if (!formData.email) {
      formErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Некорректный email";
    }
    if (!formData.question) formErrors.question = "Вопрос обязателен";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[17px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[17px]" />
          <p className="text-[17px] font-normal text-[#202020]">Contact</p>
        </div>
      <div className=" p-8 bg-gray-50 max-w-[1520px] mx-auto">
      <div className="max-w-[1310px] mx-auto">
        <h1 className="text-3xl mb-8">Контакты</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl mb-4">ООО Глобал Медикал Трейд</h2>
            <p className="mb-2"><strong>Юридический адрес:</strong> Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
            <p className="mb-2"><strong>Фактический адрес:</strong> Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
            <p className="mb-2"><strong>Режим работы:</strong> Пн-Пт с 09:00-19:00 Сб-Вс - выходной</p>
            <p className="mb-2"><strong>Звоните. Звонки по России бесплатны:</strong></p>
            <p className="mb-2"><strong>Телефоны:</strong> 8-800-000-00-00, +7-000-000-00-00, +7-495-000-00-00</p>
            <p className="mb-2"><strong>Пишите:</strong> info@mail.ru</p>
            <p className="mb-2"><strong>Реквизиты:</strong></p>
            <p className="mb-2">ИНН 971039181</p>
            <p className="mb-2">ОГРН 1167746796986</p>
            <p className="mb-2"><strong>Мы в соцсетях:</strong></p>
            <div className="flex gap-4">
              <a href="#"><img src="/path/to/vk-icon.png" alt="VK" /></a>
              <a href="#"><img src="/path/to/telegram-icon.png" alt="Telegram" /></a>
              <a href="#"><img src="/path/to/whatsapp-icon.png" alt="WhatsApp" /></a>
            </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl mb-4">Бесплатная консультация</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Ваш телефон</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Ваш email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="question">Ваш вопрос</label>
                <textarea
                  name="question"
                  id="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
                {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question}</p>}
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
                Отправить
              </button>
              <p className="text-xs mt-2">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных данных на условиях <a href="#" className="text-green-500">Политики конфиденциальности</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Map />
      <Footer />
    </div>
    
  );
};

export default Contact;