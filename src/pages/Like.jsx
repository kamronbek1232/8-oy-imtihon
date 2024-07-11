import React from "react";
import { MdNavigateNext, MdOutlineFavorite } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addToLike,
  addToList,
  addToStat,
  addToUser,
  removeFromLike,
  removeFromStat,
} from "../store/addTo";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbTableHeart } from "react-icons/tb";
import { LiaChartBar } from "react-icons/lia";
import Footer from "../components/home/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Like = () => {
  const dispatch = useDispatch();
  const { list, users, like, statist } = useSelector((state) => state.addTo);


  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Like</p>
      </div>
        <div className="container mx-auto px-4">
      <div className="flex items-center mt-3 gap-3">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p className="cursor-pointer">Избранное</p>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <h1 className="text-[48px]">Избранное</h1>
          {like.length > 0 ? (
            <></>
          ) : (
            <div>
              <h2 className="mb-4 text-[30px]">
                Не добавлено товаров в избранное
              </h2>
              <p className="mb-4 text-[#7A7687]">
                Вы можете перейти на главную страницу <br /> или воспользоваться
                каталогом товаров
              </p>
              <div className="flex gap-3">
                <Link
                  to="/"
                  className="bg-[#088269] rounded-3xl py-[11px] px-[30px]"
                >
                  <button className="text-white">На главную</button>
                </Link>
                <Link
                  to="/katalog"
                  className="bg-[#088269] rounded-3xl py-[11px] px-[30px]"
                >
                  <button className="text-white">В каталог</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        {like.length > 0 && (
          <div className="flex flex-col lg:flex-row mt-5 gap-5">
            <div className="lg:w-1/4">
              <p>Все товары (3)</p>
              <p className="opacity-50">Маммографы</p>
              <p className="opacity-50">Флюорографы</p>
            </div>
            <div className="lg:w-3/4">
              <div className="border rounded-xl w-full px-5 py-3 flex justify-between items-center">
                <select className="outline-none cursor-pointer">
                  <option>По популярности</option>
                  <option>По популярности</option>
                  <option>По популярности</option>
                  <option>По популярности</option>
                  <option>По популярности</option>
                </select>
                
                <div className="flex items-center gap-3 cursor-pointer">
                  <RxHamburgerMenu className="text-[20px]" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {like.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-t-md overflow-hidden  duration-300"
                  >
                    <div className="relative">
                      <Link to="/katalog/laboratory/analiz">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full h-[250px] object-cover cursor-pointer"
                          onClick={() => {
                            dispatch(addToUser(item));
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        />
                      </Link>
                      <div className="flex justify-between absolute top-2 left-2 right-2">
                      <button className="py-1 px-3 border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
                          Новинка
                        </button>
                        <div className="flex items-center gap-2">
                          <div>
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
                          </div>
                          <div>
                            {statist.some((e) => e.id === item.id) ? (
                              <LiaChartBar
                                className="text-[#088269] bg-transparent w-6 h-6 cursor-pointer"
                                onClick={() => dispatch(removeFromStat(item))}
                              />
                            ) : (
                              <LiaChartBar
                                className="bg-transparent w-6 h-6 cursor-pointer hover:text-[#088269]"
                                onClick={() => dispatch(addToStat(item))}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border py-5 px-4">
                      <h3 className="text-[18px] font-medium">{item.name}</h3>
                      <p className="text-[#7A7687]">{item.common_name}</p>
                      <p className="text-[#7A7687]">{item.price_title}</p>
                      <h3 className="text-[18px] my-5 font-medium">
                        {item.price} руб
                      </h3>
                      <button
                          className=" py-3 w-full border rounded-3xl hover:scale-105 duration-200 text-[#088269]"
                          onClick={() => addToCart(item)} 
                          >
                              Добавить в корзину
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Link
                  to="/katalog"
                  className="bg-[#088269] rounded-3xl py-[11px] px-[30px]"
                >
                  <button className="text-white">В каталог</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
        </div>
        <Footer />
    </div>
  );
};

export default Like;
                      
                      