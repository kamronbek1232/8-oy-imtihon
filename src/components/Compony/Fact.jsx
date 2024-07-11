import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const Fact = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const images = [
        {
          src: "https://global-mt.ru/upload/about/stuff/1.jpg",
          title: "Константин Константинопольский",
          subtitle: "Основатель компании",
        },
        {
          src: "https://global-mt.ru/upload/about/stuff/2.jpg",
          title: "поставки медицинских",
          subtitle: "аппаратов в новейшие клиники Минобороны в",
        },
        {
          src: "https://global-mt.ru/upload/about/stuff/5.jpg",
          title: " регионах страны.",
          subtitle: "Наши сотрудники имеют огромный",
        },
        {
          src: "https://global-mt.ru/upload/about/stuff/6.jpg",
          title: " регионах страны.",
          subtitle: "Руководитель отдела проектов",
        },
        {
          src: "https://global-mt.ru/upload/about/stuff/4.jpg",
          title: " регионах страны.",
          subtitle: "Коммерческий директор",
        },
        
      ];

      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const prevImage = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      };
  return (
    <>
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
            <div className="mb-5 flex gap-5 md:gap-[140px] items-center">
              <p className="md:text-4xl text-xl text-[#088269]">7 лет</p>
              <p className="text-base md:text-lg text-[12px]">на рынке</p>
            </div>
            <hr />
            <div className="mb-5 flex gap-5 md:gap-[140px] items-center">
              <p className="md:text-4xl text-xl text-[#088269]">964+</p>
              <p className="text-base md:text-lg text-[12px]">
                оригинальной продукции со всего мира
              </p>
            </div>
            <hr />
            <div className="mb-5 flex gap-5 md:gap-[165px] items-center">
              <p className="md:text-4xl text-xl text-[#088269]">23+</p>
              <p className="text-base md:text-lg text-[12px]">
                международных сертификатов качества
              </p>
            </div>
            <hr />
            <div className="mb-5 flex gap-5 md:gap-[130px] items-center">
              <p className="md:text-4xl text-xl text-[#088269]">2452+</p>
              <p className="text-base md:text-lg text-[12px]">товаров всегда в наличии</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="bg-[#088269] my-10 py-20">
        <div className="container">
          <div className="md:grid md:grid-cols-2 gap-24">
            <img src="./assets/tv.png" alt="img" />
            <div>
              <h1 className="text-[30px] text-white">Наши партнёры</h1>
              <p className="text-white mt-2">
                Нашими партнёрами являются наиболее серьёзные игроки на мировом
                рынке профильного оборудования. Это позволяет нам наладить
                долгосрочное и успешное сотрудничество, добиться лучших
                цен для государственных учреждений здравоохранения, медицинских
                центров, лабораторий, а также ветеринарных клиник и кабинетов.
                Купить нужную вам технику по оптимальным ценам, выбрать
                подходящую модель устройства в рамках бюджета в нашей компании
                окажется намного проще. Мы поддерживаем скидки и особые
                предложения для наших партнёров, предлагаем оформление аппаратов
                в лизинг и готовы предоставить системы в рассрочку на выгодных
                условиях.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="md:grid mt-20 md:grid-cols-2 md:gap-28">
          <div>
            <h2 className="md:text-[30px] mb-4">
              Опытные сотрудники из производственных компаний
            </h2>
            <p className=" max-sm:[12px]">
              Наши сотрудники имеют огромный опыт работы в сложных условиях, в
              том числе в разгар пандемии COVID–19. В этот период мы осуществили
              поставки медицинских аппаратов в новейшие клиники Минобороны в
              различных регионах страны.
            </p>
          </div>
          <div>
            <div className="flex h-96 justify-between">
              <div className="border overflow-hidden rounded-xl w-[60%]">
                <img
                  src={images[currentIndex].src}
                  alt="img"
                  className="w-full h-[75%] object-cover"
                />
                {images[currentIndex].title && (
                  <div className="p-5">
                    <h4>{images[currentIndex].title}</h4>
                    <p className="text-[14px] text-[#7A7687]">
                      {images[currentIndex].subtitle}
                    </p>
                  </div>
                )}
              </div>
              <div className="w-[37%] flex flex-col justify-between">
                <img
                  src={images[(currentIndex + 1) % images.length].src}
                  alt="img"
                  className="mb-2 h-[47%] object-cover rounded-xl"
                />
                <img
                  src={images[(currentIndex + 2) % images.length].src}
                  alt="img"
                  className="h-[47%] object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 px-4 ">
              <div
                className="p-2 cursor-pointer border rounded-full bg-white"
                onClick={prevImage}
              >
                <IoMdArrowBack className="bg-white" />
              </div>
              <div
                className="p-2 cursor-pointer border rounded-full bg-white"
                onClick={nextImage}
              >
                <GrFormNextLink className="bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
