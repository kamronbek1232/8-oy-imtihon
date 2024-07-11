import React from "react";
import { MdNavigateNext, MdOutlineFavorite, MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";
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
import { RxHamburgerMenu, RxTable } from "react-icons/rx";
import { LiaChartBar } from "react-icons/lia";
import { TbTable } from "react-icons/tb";
import Footer from "../components/home/Footer";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <MdStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <MdStarHalf key={`half-${index}`} className="text-yellow-500" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <MdStarOutline key={`empty-${index}`} className="text-yellow-500" />
      ))}
      <span className="ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

const Compair = () => {
  const ratings = [4.0, 4.0, 4.0];
  const specs = [
    { title: "Скорость работы", value: "60 или 120 тестов в час" },
    { title: "Возможный диапазон длины волны", value: "557, 620, 656 нм" },
    { title: "Тест-полоски", value: "На 10 или 11 параметров" },
    { title: "Функция автоматической калибровки", value: "Есть" },
  ];
  const dispatch = useDispatch();
  const { list, users, like, statist } = useSelector((state) => state.addTo);

  return (
    <div>
        <div className="container mx-auto px-4">
      <div className="flex items-center mt-3 gap-3">
        <Link to="/" className="text-[#7A7687] hover:underline">
          Главная
        </Link>
        <MdNavigateNext />
        <p className="cursor-pointer">Сравнение товаров</p>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <h1 className="text-[48px]">Сравнение товаров</h1>
          {statist.length === 0 ? (
            <div>
              <h2 className="mb-4 text-[30px]">Не добавлено товаров в избранное</h2>
              <p className="mb-4 text-[#7A7687]">
                Вы можете перейти на главную страницу <br /> или воспользоваться каталогом товаров
              </p>
              <div className="flex gap-3">
                <Link to="/" className="bg-[#088269] rounded-3xl py-[11px] px-[30px]">
                  <button className="text-white">На главную</button>
                </Link>
                <Link to="/katalog" className="bg-[#088269] rounded-3xl py-[11px] px-[30px]">
                  <button className="text-white">В каталог</button>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        {statist.length > 0 && (
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
                  <RxHamburgerMenu />
                  <TbTable />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {statist.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-t-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                            {statist.some((e) => e.id === item.id) ? (
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
                      <h3 className="text-[18px] my-5 font-medium">{item.price} руб</h3>
                      <button
                        className="py-3 w-full border rounded-3xl text-[#088269] hover:scale-105  transition-colors duration-300"
                        onClick={() => dispatch(addToList(item))}
                      >
                        Добавить в корзину
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4"></div>
            </div>
          </div>
        )}
      </div>
      {statist.length > 0 && (
        <div className="mt-10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Технические характеристики</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2"></th>
                  {ratings.map((_, index) => (
                    <th key={index} className="py-2"></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-4">Рейтинг</td>
                  {ratings.map((rating, index) => (
                    <td key={index} className="py-2 px-4">
                      {renderStars(rating)}
                    </td>
                  ))}
                </tr>
                {specs.map((spec, index) => (
                  <tr className="border-t" key={index}>
                    <td className="py-2 px-4">{spec.title}</td>
                    {ratings.map((_, i) => (
                      <td key={i} className="py-2 px-4">{spec.value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4 space-x-4">
            <Link to="/" className="bg-[#088269] rounded-3xl py-[11px] px-[30px]">
              <button className="text-white">В каталог</button>
            </Link>
            <Link to="/katalog" className="bg-[#088269] rounded-3xl py-[11px] px-[30px]">
              <button className="text-white">В каталог</button>
            </Link>
          </div>
        </div>
      )}
        </div>
        <Footer />
    </div>
  );
};

export default Compair;