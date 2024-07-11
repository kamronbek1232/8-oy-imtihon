import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const MainOplata = () => {
  return (
    <div className="container">
      <div>
        <p className="flex items-center mt-5 gap-3">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <MdNavigateNext /> <span className="text-black">Оплата</span>
        </p>
      </div>

      <div className="mt-10  py-10 rounded-2xl px-4 md:px-8">
        <h1 className="text-3xl mb-4">Оплата</h1>
        <p className="text-gray-700 mb-8 w-[50%]">
          Учитывая стремительное развитие цифровых медицинских технологий, цены
          в Российской Федерации могут сильно отличаться. Существующие временные
          и финансовые условия требуют от пациентов ясного понимания всех
          аспектов, связанных с платежами.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">Оплата наличными</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">Безналичный расчет</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">Оплата банковской картой</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
        </div>

        <h1 className="text-3xl mb-4">Порядок возврата денежных средств</h1>
        <p className="text-gray-700 mb-8 w-[50%]">
          Учитывая стремительное развитие цифровых медицинских технологий, цены
          в Российской Федерации могут сильно отличаться. Существующие временные
          и финансовые условия требуют от пациентов ясного понимания всех
          аспектов, связанных с платежами.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">При оплате наличными</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">При оплате банковской картой</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
        </div>

        <h1 className="text-3xl mb-4">Условия поставок</h1>
        <p className="text-gray-700 mb-8 w-[50%]">
          Учитывая стремительное развитие цифровых медицинских технологий, цены
          в Российской Федерации могут сильно отличаться. Существующие временные
          и финансовые условия требуют от пациентов ясного понимания всех
          аспектов, связанных с платежами.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">Лизинг</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-2">Рассрочка</h2>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Тяжелая как постоянное обеспечение нашей деятельности</li>
              <li>Требует от нас анализа</li>
              <li>Управление процессами обмена</li>
              <li>Равным образом способствует подготовке и реализации</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainOplata;
