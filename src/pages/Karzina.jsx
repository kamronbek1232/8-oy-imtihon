import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  addToLike,
  addToUserMinus,
  addToUserPlus,
  removeFromList,
  removeFromLike,
  addToStat,
  removeFromStat,
} from "../store/addTo";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { LiaChartBar } from "react-icons/lia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MdOutlineFavorite } from "react-icons/md";
import Footer from "../components/home/Footer";

const Karzina = () => {
  const dispatch = useDispatch();

  const handleAddToUserPlus = (item) => {
    dispatch(addToUserPlus(item));
  };

  const handleAddToUserMinus = (item) => {
    dispatch(addToUserMinus(item));
  };

  const handleRemoveFromList = (item) => {
    dispatch(removeFromList(item));
  };

  const { list, like, statist } = useSelector((state) => state.addTo);

  const totalAmount = list.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  console.log(list);

  return (
    <div>
      <div className="container mx-auto px-4">
      <div className="flex items-center mt-3 gap-3 mb-3">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p className="cursor-pointer">Корзина({list.length})</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 mt-12">
        <div className="w-full lg:w-3/4">
          {list.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row border rounded-xl overflow-hidden gap-4 mb-6"
            >
              <div className="py-10 px-24 bg-white flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="px-7 py-5">
                  <p className="font-medium text-[18px]">{item.name}</p>
                  <p className="text-[#7A7687]">Артикул: {item.id}</p>
                  <p className="text-[#7A7687]">В наличии</p>
                </div>
                <div className="px-7 py-5 flex flex-col items-center md:items-end w-[200px]">
                  <p className="text-[18px] font-bold">{item.price} руб</p>
                  <div className="px-5 flex py-1 mt-2 border border-[#088269] rounded-3xl text-[#088269] font-bold text-[14px]">
                    <p className="flex gap-2 text-xl cursor-pointer">
                      <span
                        className="text-xl"
                        onClick={() => handleAddToUserPlus(item)}
                      >
                        +
                      </span>
                      {item.amount}
                      <span
                        className="text-xl"
                        onClick={() => handleAddToUserMinus(item)}
                      >
                        -
                      </span>
                    </p>
                  </div>
                </div>
                <div className="px-7 py-5 flex gap-4  justify-center md:justify-end">
                  {like.some((e) => e.id === item.id) ? (
                    <MdOutlineFavorite
                      className="text-[#088269] bg-transparent w-6 h-6 cursor-pointer"
                      onClick={() => dispatch(removeFromLike(item))}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="bg-transparent hover:text-[#088269] cursor-pointer"
                      onClick={() => dispatch(addToLike(item))}
                    />
                  )}
                  {statist.some((e) => e.id === item.id) ? (
                    <LiaChartBar
                      className="text-[#088269] bg-transparent w-6 h-6 cursor-pointer"
                      onClick={() => dispatch(removeFromStat(item))}
                    />
                  ) : (<LiaChartBar
                    className="bg-transparent w-6 h-6 cursor-pointer"
                    onClick={() => dispatch(addToStat(item))}
                  />
                )}
                <div
                  className="text-center relative cursor-pointer"
                  onClick={() => handleRemoveFromList(item)}
                >
                  <IoMdClose className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/4 border rounded-xl h-[250px] bg-white p-4">
        <div className="flex justify-between mt-3">
          <p>Итого</p>
          <p>{totalAmount.toLocaleString()} руб.</p>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <p className="cursor-pointer">Корзина({list.length})</p>
          <p>{totalAmount.toLocaleString()} руб.</p>
        </div>
        <div className="flex justify-between my-3">
          <p>Скидка</p>
          <p>0 руб.</p>
        </div>
        <button className="py-2 block w-[250px] mx-auto bg-[#088269] text-white rounded-3xl hover:scale-105 duration-200">
          Оформить заказ
        </button>
        <button className="py-2 block w-[250px] mx-auto border mt-2 rounded-3xl hover:scale-105 duration-200">
          Задать вопрос
        </button>
      </div>
    </div>
      </div>
      <Footer />
    </div>
);
};

export default Karzina;