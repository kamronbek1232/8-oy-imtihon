import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      date: "07.11.2022",
      title: "Название новости 1",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/dbd/yh1angxt70m6exar62ixv9k59ej6cxvk/blog_3_.png",
    },
    {
      date: "07.11.2022",
      title: "Название новости 2",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/eec/d2skjp9thlie0r9yxcwzlvs2cr9bplfi/logo.jpg",
    },
    {
      date: "07.11.2022",
      title: "Название новости 3",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/8d0/5tch9qxoq2xwsqki49ilyprn2qfomxrw/ob.png",
    },
    {
      date: "07.11.2022",
      title: "Название новости 4",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/28d/5f0hocd7yq8xccyo86mm0e4kfg4csjy6/blog.png",
    },
    {
      date: "07.11.2022",
      title: "Название новости 5",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/82d/g57wjmay75x4ek171rdg2nt32zh3036u/blog1.png",
    },
    {
      date: "07.11.2022",
      title: "Название новости 6",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/2f9/uutbn75bufeun8w43i72srdvvwjiebtc/blog2.png",
    },
    {
      date: "07.11.2022",
      title: "Название новости 7",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/fa6/xya7gos20jlljchjmsxkh2prwo7eyswf/blog3.png",
    },
    {
      date: "07.11.2022",
      title: "Название новости 8",
      description: "Допускает внедрение поэтапного и развития общества.",
      imgSrc: "https://global-mt.ru/upload/iblock/2d2/wipwp4hi2crjt2zsip2c3g3slgg8tl09/11.png",
    },
  ];

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="p-2 cursor-pointer border rounded-full bg-white absolute right-[999px] top-[500px] transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <GrFormNextLink className="text-black bg-white w-6 h-6" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="p-2 cursor-pointer border rounded-full bg-white absolute left-0 top-[500px] transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <IoMdArrowBack className="text-black bg-white w-6 h-6" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
        Новости компании
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
                className="w-full h-[290px] object-cover"
              />
              <div className="border py-5 pl-4 pr-8">
                <p className="text-[#7A7687]">{item.date}</p>
                <h3 className="text-[18px] font-medium">{item.title}</h3>
                <p className="text-[#7A7687]">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center mt-10 justify-between">
          <div className="flex gap-4 px-4 max-md:hidden">
          </div>
          <div className="flex gap-3 items-center justify-center">
            <button className="px-7 py-3 text-[#088269] rounded-3xl border font-bold text-[14px] hover:scale-105 duration-200 mb-1">
              Бесплатная консультация
            </button>
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px] hover:scale-105 duration-200 mr-2 mb-1">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;