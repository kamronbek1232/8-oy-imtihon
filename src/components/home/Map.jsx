import { useState } from "react";

const Map = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.question) newErrors.question = "Question is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsModalOpen(false);
          setForm({ name: "", phone: "", email: "", question: "" });
        }, 2000);
      }, 2000);

      localStorage.setItem("formData", JSON.stringify(form));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="mt-32 px-4">
      <div className="container mx-auto flex gap-4 flex-col md:flex-row">
        <div className="md:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.728852326029!2d69.20430055!3d41.283138650000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719958993823!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:w-1/2 p-10 bg-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Остались вопросы?</h2>
          <p className="mb-4">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="phone"
                placeholder="Ваш телефон"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                name="question"
                placeholder="Ваш вопрос"
                className="w-full border-b-2 p-2 bg-white outline-none"
                value={form.question}
                onChange={handleChange}
              />
              {errors.question && (
                <p className="text-red-500 text-sm">{errors.question}</p>
              )}
            </div>
            <div className="flex max-md:flex-col gap-7">
              <button
                type="submit"
                className=" px-7  text-white py-2 mt-4 rounded-3xl bg-[#088269]  hover:scale-105 duration-200"
              >
                Отправить
              </button>
              <span className="text-xs mt-4 bg-white">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных
                данных и принимаю{" "}
                <a href="#" className="text-blue-500">
                  Политику конфиденциальности
                </a>
                .
              </span>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-4 border-t-gray-500 rounded-full animate-spin"></div>
              </div>
            ) : (
              <p className="text-green-500 text-lg">Ваши данные сохранены!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;