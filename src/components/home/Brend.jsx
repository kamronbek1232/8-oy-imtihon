import React, { useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brend = () => {
  const newsItems = [
    {
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc: "https://global-mt.ru/upload/iblock/99e/nqmjgop6u1sj2eiszy08vnuh8jsqdvcv/kls_martin_group.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/2aa/fz4tyn09v91peefu64isycitobwh7p04/erba_group.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/c5b/un71fm2pu3dd750j29wk8jkq9w1utauy/image017.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/ad3/k538egnzgcvlp25sv0xufbcce218npg6/atmos.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/a0b/zt6p9i54fsw42u7lgqwpvdw0bpfj5pap/johnson_johnson.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/ec0/j1go3t2m3y4hg488aqw6f5ft8qz6ph00/logo_siemens2.jpg",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/c71/xu7vzyccty243g01hjqdqz887tatziye/partner01.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/d27/gi22l3fjkpzgove7qr9fz0f44sygglep/pentax_medical.png",
    },
    {
      date: "07.11.2022",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/16c/bh3ls01gonjpzbsaf5sr8lkrjlsp4wuj/image001.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <div className="p-2 cursor-pointer border rounded-full bg-white">
        <GrFormNextLink className="w-6 h-6" />
      </div>
    ),
    prevArrow: (
      <div className="p-2 cursor-pointer border rounded-full bg-white">
        <IoMdArrowBack className="w-6 h-6" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-36 flex max-lg:flex-col max-w-[1520px] mx-auto">
      <div className="ml-20 w-[15%] mr-36 text-[30px] max-lg:ml-5 max-lg:mr-0 max-lg:mb-5">
        Бренды
      </div>
      <div className="w-[85%] overflow-hidden max-lg:w-full">
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`w-[${90 / settings.slidesToShow}%] flex-shrink-0 max-w-80`}
            >
              <img
                src={item.imgSrc}
                alt="img"
                className="w-full h-[200px] object-contain bg-white"
              />
              <div className="border py-5 pl-4 pr-8">
                <h3 className="text-[18px] font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center mt-10 justify-between">
          <div className="flex  gap-4 px-4 max-md:hidden">
            <div className="p-2 cursor-pointer border rounded-full bg-white" onClick={() => document.querySelector(".slick-prev").click()}>
              <IoMdArrowBack className="text-black bg-white w-6 h-6" />
            </div>
            <div className="p-2 cursor-pointer border rounded-full bg-white" onClick={() => document.querySelector(".slick-next").click()}>
              <GrFormNextLink className="text-black bg-white w-6 h-6" />
            </div>
          </div>
          <div className="">
            <button className="px-7 mr-[50px] py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px] hover:scale-105 duration-200 mb-1 mr-2">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;