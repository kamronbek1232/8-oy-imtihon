
import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { catalogCrData } from "../../data/data";
import { LiaChartBar } from "react-icons/lia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavorite } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  addToLike,
  addToList,
  addToStat,
  addToUser,
  removeFromLike,
  removeFromStat,
} from "../../store/addTo";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CartModal from "./CartModal";

const Product = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const addToCart = (item) => {
    dispatch(addToList(item));
    setAddedItem(item);
    setIsModalOpen(true);
    localStorage.setItem("cartItems", JSON.stringify([...list, item]));
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-2 cursor-pointer border rounded-full bg-white absolute left-0 top-[520px] transform -translate-y-1/2 z-10"
        onClick={onClick}
      >
        <IoMdArrowBack className="text-black bg-white w-6 h-6" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-2 cursor-pointer border rounded-full bg-white absolute right-[960px] top-[520px] transform -translate-y-1/2 z-10"
        onClick={onClick}
      >
        <GrFormNextLink className="text-black bg-white w-6 h-6" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className=" my-36 flex max-lg:flex-col max-w-[1520px] mx-auto">
      <div className="ml-20 w-[15%] mr-36 text-[30px] max-lg:ml-5 max-lg:mr-0 max-lg:mb-5">
        Новости компании
      </div>
      <div className="w-[70%] max-lg:w-full relative">
        <Slider {...settings}>
          {catalogCrData.map((item, index) => (
            <div key={index}>
              <div className="relative left-[10px]">
                <Link to="/katalog/laboratory/analiz">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[340px] h-[270px] object-fill"
                    onClick={() => {
                      dispatch(addToUser(item));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                </Link>
                <div className="flex justify-between absolute top-2 gap-[120%] px-3">
                  <button className="py-1 px-3 border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
                    Новинка
                  </button>
                  <div className="flex items-center gap-2 ">
                    <div>
                      {like.some((e) => e.id === item.id) ? (
                        <MdOutlineFavorite
                          className="text-[#088269] bg-transparent w-6 h-6"
                          onClick={() => dispatch(removeFromLike(item))}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          className="bg-transparent hover:text-[#088269]"
                          onClick={() => dispatch(addToLike(item))}
                        />
                      )}
                    </div>
                    <div className="">
                      {statist.some((e) => e.id === item.id) ? (
                        <LiaChartBar
                          className=" text-[#088269] bg-transparent w-6 h-6"
                          onClick={() => dispatch(removeFromStat(item))}
                        />
                      ) : (
                        <LiaChartBar
                          className="bg-transparent  w-6 h-6 cursor-pointer"
                          onClick={() => dispatch(addToStat(item))}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border py-5 px-4 w-[340px] h-[200px] ml-[10px]">
                <h3 className="text-[18px] font-medium">{item.name}</h3>
                <p className="text-[#7A7687]">{item.common_name}</p>
                <p className="text-[#7A7687]">{item.price_title} </p>
                <h3 className="text-[18px] my-2 font-medium">
                  {item.price} руб
                </h3>
                <button
                  className=" py-3 w-full border rounded-3xl hover:scale-105 duration-200 text-[#088269]"
                  onClick={() => addToCart(item)} // Call addToCart function on button click
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-5 max-md:hidden px-4">
            {/* <CustomPrevArrow onClick={() => document.querySelector('.slick-prev').click()} /> */}
            {/* <CustomNextArrow onClick={() => document.querySelector('.slick-next').click()} /> */}
          </div>
          <div className="sm:flex gap-3 items-center mt-6 max-md:justify-center">
            <button className="px-7 mb-2 py-3 text-[#088269] rounded-3xl border font-bold text-[12px] sm:text-[14px] hover:scale-105 duration-200">
              Бесплатная консультация
            </button>
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[12px] sm:text-[14px] hover:scale-105 duration-200 mr-2 mb-2">
              Сертификаты
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CartModal item={addedItem} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Product;