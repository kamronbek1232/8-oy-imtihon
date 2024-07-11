import React from "react";
import Slider from "react-slick";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Kabinet = () => {
  const newsItems = [
    {
      date: "07.11.2022",
      title: "Экспресс лаборатория",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/local/templates/gmt/img/complex1.png",
    },
    {
      date: "07.11.2022",
      title: "Лазерная терапия",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/local/templates/gmt/img/complex2.png",
    },
    {
      date: "07.11.2022",
      title: "Операционный блок",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/local/templates/gmt/img/complex3.png",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="p-2 cursor-pointer border rounded-full bg-white absolute right-[1160px] top-[600px] transform -translate-y-1/2 z-10" onClick={onClick}>
      <GrFormNextLink className="text-black bg-white w-6 h-6" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="p-2 cursor-pointer border rounded-full bg-white absolute left-0 top-[600px] transform -translate-y-1/2 z-10" onClick={onClick}>
      <IoMdArrowBack className="text-black bg-white w-6 h-6" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-36">
      <div className="container">
        <div>
          <h2 className="text-[30px] py-7">Комплексное оснащение кабинетов</h2>
        </div>
        <Slider {...settings} className="w-[100%]">
          {newsItems.map((item, index) => (
            <div key={index} className="w-[31.5%] flex-shrink-0">
              <img src={item.imgSrc} alt="" className="w-[400px] object-fill " />
              <div className="border py-5 pl-4 pr-8 rounded-b-xl w-[400px]">
                <h3 className="text-[18px] font-medium max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px]">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex mt-9 justify-between ">
          <div className="flex items-center gap-4 max-md:hidden">
            {/* <PrevArrow onClick={settings.prevArrow} /> */}
            {/* <NextArrow onClick={settings.nextArrow} /> */}
          </div>
          <div className="flex max-sm:flex-col max-sm:justify-center gap-6">
            <button className="px-7 py-3 mb-2 text-[#088269] border rounded-3xl border-[#088269] font-bold text-[14px] hover:scale-105 duration-200">
              Бесплатная консультация
            </button>
            <button className="mx-3 px-7 py-3 mb-2 bg-[#088269] rounded-3xl text-white font-bold text-[14px] hover:scale-105 duration-200">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-16">
          <h1 className="text-[30px]">Почему выбирают нас?</h1>
          <div className="flex justify-between mt-8 flex-wrap">
            <div className="border w-[300px] p-[86px] flex flex-col items-center justify-center flex-grow hover:scale-105 duration-200">
              <img src="/Symbol.svg" alt="" className="mb-10 " />
              <p className="text-center">Быстрая доставка</p>
            </div>
            <div className="border w-[320px] p-[86px] flex flex-col items-center justify-center flex-grow hover:scale-105 duration-200">
              <img src="/Symbol1.svg" alt="" className="mb-10 " />
              <p className="text-center">
                Весь товар <br /> сертифицирован
              </p>
            </div>
            <div className="border w-[320px] p-[86px] flex flex-col items-center justify-center flex-grow hover:scale-105 duration-200">
              <img src="/Symbol2.svg" alt="" className="mb-10 " />
              <p className="text-center">
                Гибкая система <br /> скидок
              </p>
            </div>
            <div className="border w-[320px] p-[86px] flex flex-col items-center justify-center flex-grow hover:scale-105 duration-200">
              <img src="/Symbol3.svg" alt="" className="mb-10 " />
              <p className="text-center">Лет рынке</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kabinet;