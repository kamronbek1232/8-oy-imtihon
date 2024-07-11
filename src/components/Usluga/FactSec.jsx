import React from "react";
import { LuArrowDownToLine } from "react-icons/lu";

const FactSec = () => {
  const downloadFile = (fileName) => {
    const link = document.createElement("a");
    link.href = `/path/to/your/files/${fileName}`; 
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mt-20 md:grid md:grid-cols-2 gap-28">
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl mb-6">Глобал медикал трейд</h1>
            <p className="opacity-50">
              Мы работаем на результат и продаём <br /> только качественную
              продукцию
            </p>
          </div>
          <div>
            <div className="mb-5 flex gap-5 md:gap-[140px] items-center hover:scale-105 duration-200 cursor-pointer">
              <p className="md:text-4xl text-xl text-[#088269]">7 лет</p>
              <p className="text-base md:text-lg">на рынке</p>
            </div>
            <hr />
            <div className="mb-5 flex gap-5 md:gap-[140px] items-center hover:scale-105 duration-200 cursor-pointer">
              <p className="md:text-4xl text-xl text-[#088269]">964+</p>
              <p className="text-base md:text-lg">
                оригинальной продукции со всего мира
              </p>
            </div>
            <hr />
            <div className="mb-5 flex gap-5 md:gap-[165px] items-center hover:scale-105 duration-200 cursor-pointer">
              <p className="md:text-4xl text-xl text-[#088269]">23+</p>
              <p className="text-base md:text-lg">
                международных сертификатов качества
              </p>
            </div>
            <hr />
            <div className="mb-5 flex gap-5 md:gap-[130px] items-center hover:scale-105 duration-200 cursor-pointer">
              <p className="md:text-4xl text-xl text-[#088269]">2452+</p>
              <p className="text-base md:text-lg">товаров всегда в наличии</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-0">
        <div className="py-10 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-[24px] md:text-[30px] mb-4 md:mb-0 text-center md:text-left">
            Вы сможете <span className="text-[#088269]">оставить заявку</span>{" "}
            на услуги
            <br /> и скачать бланк для заполнения
          </h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[10px]">
            <div
              className="bg-white p-[22px] rounded-lg flex gap-4 md:gap-8 items-center cursor-pointer"
              onClick={() => downloadFile("blank.pdf")}
            >
              <p className="text-[16px] md:text-[18px] font-medium">
                Бланк для заполнения
              </p>
              <div className="p-1 border ">
                <LuArrowDownToLine />
              </div>
            </div>
            <div
              className="bg-white p-[22px] rounded-lg flex gap-4 md:gap-8 items-center cursor-pointer"
              onClick={() => downloadFile("filled_form.pdf")}
            >
              <p className="text-[16px] md:text-[18px] font-medium">
                Заполненная форма
              </p>
              <div className="p-1 border ">
                <LuArrowDownToLine />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px] hover:scale-105 duration-200">
            Сертификаты
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactSec;
