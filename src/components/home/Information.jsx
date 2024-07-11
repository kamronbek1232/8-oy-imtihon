import React, { useState } from "react";

const Information = () => {
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
    {
      title: "Достижения компании",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
    {
      title: "Карьерный рост",
      content:
        "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
    },
  ];

  return (
    <div className="bg-[#088269] mt-40 py-12 max-md:py-6 max-w-[1520px] mx-auto">
      <div className="container flex justify-between py-32 max-md:flex-col">
        <div className="w-[50%]">
          <h2 className="text-[30px] text-[#F8F7F3]">Информация о компании</h2>
        </div>
        <div className="w-[50%] max-md:w-full max-md:my-3">
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <hr />
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-[#F8F7F3] text-[18px] py-3">
                  {section.title}
                </h3>
                <p
                  className={`px-2 border rounded-full duration-150 ${
                    activeSection === index ? "bg-white rotate-45" : ""
                  }`}
                >
                  <span
                    className={`text-4xl ${
                      activeSection === index ? "text-[#088269]" : "text-white"
                    } bg-transparent`}
                  >
                    +
                  </span>
                </p>
              </div>
              {activeSection === index && (
                <p className="text-white opacity-75 text-[14px] py-3">
                  {section.content}
                </p>
              )}
            </React.Fragment>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Information;
