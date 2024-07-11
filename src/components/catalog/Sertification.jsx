import React from "react";
import Slider from "react-slick";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="p-2 cursor-pointer border rounded-full bg-white absolute left-[60px] top-[300px] transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <GrFormNextLink className="bg-white w-6 h-6" />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="p-2 cursor-pointer border rounded-full bg-white absolute top-[300px] transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <IoMdArrowBack className="bg-white w-6 h-6" />
    </div>
  );
};

const Sertification = () => {
  const newsItems = [
    {
      imgSrc: "https://global-mt.ru/upload/iblock/051/2qatp1rc8ccllsza9ucb1cfh1pxgmej9/diplom_uchastnika_vi_mezhdunarodnoy_spetsializirovannoy_meditsinskoy_vystavki.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/ece/782g111ty111reiu3y7x68aktuvk61bc/blagodarstvennoye_pismo_mezhdistsiplinarnoy_nauchno_prakticheskoy_konferentsii.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/c1c/3tao2y0cxx4uh8r25f82adaihlhv092p/gramota.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/a7f/50whbbggs5ua6f62fdz3e8nh3iceyomc/sertifikat_uchastnika_20_oy_meditsinskoy_vystavki.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/305/broc3c0xechsodqxywh1nhx6rr1wrt4p/diplom_uchastnika_mezhdunarodnoy_meditsinskoy_vystavki.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/904/94k6eklfcsir2m0145zxhpbrn8p63qtx/diplom_za_uchastiye_v_31_oy_mezhdunarodnoy_vystavke_meditsinskoy_tekhniki.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/e3d/v38t22wjl3whz5ej34gwj565437cijd3/sertifikat_uchastnika_vii_chernomorskoy_nauchno_prakticheskoy_veterinarnoy_konferentsii_2022.jpg",
    },
    {
      imgSrc: "https://global-mt.ru/upload/iblock/ce1/uy71od6e9ojhp8izl3fmi5otgj74gktp/pochyotnaya_gramota_uchastnika_ix_kongressa_urologov_sibiri.jpg",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-36 flex max-lg:flex-col">
      <div className="ml-20 w-[15%] mr-36 text-[30px] max-lg:ml-5 max-lg:mr-0 max-lg:mb-5">
        Новости компании
      </div>
      <div className="w-[85%] overflow-hidden max-lg:w-full">
        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="w-full p-3 bg-white rounded-xl max-w-[200px]"
            >
              <img
                src={item.imgSrc}
                alt="img"
                className="w-[200px] h-[200px] object-contain bg-white"
              />
            </div>
          ))}
        </Slider>
        <div className="flex items-center mt-10 justify-between">
          <div className="flex gap-4 px-4 max-md:hidden">
          </div>
          <div className="">
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px] hover:scale-105 duration-200 mr-[20px] mb-[10px]">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertification;