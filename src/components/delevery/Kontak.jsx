import React, { useState } from "react";

const Kontak = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = useState({});

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
      console.log("Form submitted successfully", form);
    } else {
      setErrors(validationErrors);
    }
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      title: "О компании",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      title: "Подробнее",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      title: "Преимущества сотрудников",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-[30px]">
              Вы сможете забрать оборудование{" "}
              <span className="text-[#088269]">самостоятельно</span> из нашего
              офиса
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="p-6 border bg-white w-full md:w-[320px] mb-4">
                <h5 className="text-[18px] font-medium pb-2">Контакты</h5>
                <p className="text-[#7A7687]">+7 (000) 000-00-00</p>
                <p className="text-[#7A7687]">info@mail.ru</p>
              </div>
              <div className="p-6 border bg-white w-full md:w-[320px] mb-4">
                <h5 className="text-[18px] font-medium pb-2">Режим работы</h5>
                <p className="text-[#7A7687]">+7 (000) 000-00-00</p>
                <p className="text-[#7A7687]">сб-вс: выходной</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31ca66d417%3A0x5755ff29b7bf33a!2sRayhon%20National%20Meals%20Restaurant!5e0!3m2!1sen!2s!4v1719604789618!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-[#E5E4ED] mt-40 py-24 max-md:py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between py-32">
          <div className="w-full md:w-[45%]">
            <h2 className="text-[30px] ">
              Документы, необходимые для получения груза
            </h2>
            <p>
              По копиям доверенностей и доверенностям с незаполненными
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
          <div className="w-full md:w-[50%] mt-6 md:mt-0">
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <hr />
                <div
                  className="flex justify-between items-center py-2 cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-[black] text-[18px] py-3">
                    {section.title}
                  </h3>
                  <p
                    className={`px-2 border border-slate-300 rounded-full duration-150 ${
                      activeSection === index ? "bg-[#088269] rotate-45" : ""
                    }`}
                  >
                    <span
                      className={`text-4xl ${
                        activeSection === index ? "text-white" : "text-black"
                      } bg-transparent`}
                    >
                      +
                    </span>
                  </p>
                </div>
                {activeSection === index && (
                  <p className="text-black opacity-75 text-[14px] py-3">
                    {section.content}
                  </p>
                )}
              </React.Fragment>
            ))}
            <hr />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mt-32 px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2 pr-14">
              <h4 className="text-[30px] mb-5">Вам нужна консультация?</h4>
              <p>
                Задайте их по номеру телефона{" "}
                <span className="text-[#088269]">+7 (495) 000-00-00</span> или
                оставьте свои координаты и наш менеджер перезвонит вам через 10
                минут
              </p>
            </div>
            <div className="md:w-1/2 p-10 bg-white shadow-lg">
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
                <div className="flex flex-col md:flex-row gap-7">
                  <button
                    type="submit"
                    className="px-7 text-white py-2 mt-4 rounded-3xl bg-[#088269] hover:bg-[#599b8e]"
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
        </div>
      </div>
    </>
  );
};

export default Kontak;
