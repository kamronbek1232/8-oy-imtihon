import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const FullInformatsiya = () => {
  return (
    <div className="container mx-auto px-4">
      <p className="flex items-center mt-5 gap-3">
        <Link to="/" className="text-[#7A7687]">
          Главная
        </Link>
        <MdNavigateNext /> <span className="text-black">Блог</span>
      </p>

      <div className="mt-10 bg-white py-10 rounded-2xl px-4 md:px-8">
        <div className="">
          <h1 className="text-3xl mb-4">Информационная статья</h1>
          <p className="text-gray-500 mb-2">Автор: Admin</p>
          <div className="mb-8">
            <h2 className="text-xl mb-2">Содержание:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Новая модель организационной деятельности</li>
              <li>Тенденции и перспективы</li>
              <li>Заключение</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl mb-4">
              Новая модель организационной деятельности
            </h2>
            <p className="text-gray-700 mb-4 lg:w-[70%] my-5">
              Равным образом, внедрение современных методик создает
              необходимость включения в производственный план целого ряда
              внеочередных мероприятий с учетом комплекса направлений
              прогрессивного развития. Сложно сказать, почему акционеры
              крупнейших компаний указаны как претенденты на роль ключевых
              факторов. Кстати, представители современных социальных резервов
              призваны к ответу.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <img
                src="/assets/image3.png"
                alt="image1"
                className=" md:w-[47%] w-full mb-4 "
              />
              <img
                src="/assets/image1.png"
                alt="image3"
                className=" md:w-[47%] w-full mb-4"
              />
            </div>
          </div>
          <div className="py-8 px-5 bg-[#E1EFE6] my-8 rounded-lg">
            <p className="text-gray-700 mb-4 my-5">
              Равным образом, внедрение современных методик создает
              необходимость включения в производственный план целого ряда
              внеочередных мероприятий с учетом комплекса направлений
              прогрессивного развития. Сложно сказать, почему акционеры
              крупнейших компаний указаны как претенденты на роль ключевых
              факторов. Кстати, представители современных социальных резервов
              призваны к ответу.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl mb-4">
              Новая модель организационной деятельности
            </h2>
            <p className="text-gray-700 mb-4 lg:w-[70%] my-5">
              Равным образом, внедрение современных методик создает
              необходимость включения в производственный план целого ряда
              внеочередных мероприятий с учетом комплекса направлений
              прогрессивного развития. Сложно сказать, почему акционеры
              крупнейших компаний указаны как претенденты на роль ключевых
              факторов. Кстати, представители современных социальных резервов
              призваны к ответу.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <img
                src="/assets/image2.png"
                alt="image2"
                className="md:w-[47%] w-full mb-4"
              />
              <img
                src="/assets/image3.png"
                alt="image3"
                className="md:w-[47%] w-full mb-4"
              />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl mb-4">
              Новая модель организационной деятельности
            </h2>
            <p className="text-gray-700 mb-4 lg:w-[70%]">
              Равным образом, внедрение современных методик создает
              необходимость включения в производственный план целого ряда
              внеочередных мероприятий с учетом комплекса направлений
              прогрессивного развития. Сложно сказать, почему акционеры
              крупнейших компаний указаны как претенденты на роль ключевых
              факторов. Кстати, представители современных социальных резервов
              призваны к ответу.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <img
                src="/assets/image1.png"
                alt="image4"
                className="md:w-[47%] w-full mb-4"
              />
              <img
                src="/assets/image2.png"
                alt="image4"
                className="md:w-[47%] w-full mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullInformatsiya;
