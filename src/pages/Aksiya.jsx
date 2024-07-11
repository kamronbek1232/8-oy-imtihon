import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { catalogCrData } from "../data/data";
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
} from "../store/addTo";
import { Link } from "react-router-dom";
import CartModal from "../components/home/CartModal";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Information from "../components/home/Information";
import Kabinet from "../components/home/Kabinet";
import Map from "../components/home/Map";
import News from "../components/home/News";
import Popular from "../components/home/Popular";
import Product from "../components/home/Product";
import Footer from "../components/home/Footer";

const Aksiya = () => {
  const { list, users, like, statist } = useSelector((state) => state.addTo);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const addToCart = (item) => {
    dispatch(addToList(item));
    setAddedItem(item);
    setIsModalOpen(true);
    localStorage.setItem("cartItems", JSON.stringify([...list, item]));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catalogCrData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(catalogCrData.length / itemsPerPage);

  return (
    <div className="mt-[60px]">
      <div className="container mx-auto">
        <div className="flex max-lg:flex-col max-lg:items-center">
          <div className="w-[15%] mr-[45px] text-[30px] max-lg:w-full max-lg:mb-5">
            Новости компании
          </div>
          <div className="flex-grow">
            <div className="grid grid-cols-3 gap-6">
              {currentItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="relative w-[330px]">
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
                    <div className="absolute top-2 left-0 right-0 flex justify-between gap-4 px-3">
                      <button className="py-1 px-3 text-[14px] border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
                        Новинка
                      </button>
                      <div className="flex items-center gap-2">
                        <div className="">
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
                  <div className="border py-5 px-4 w-[330px] h-[200px]">
                    <h3 className="text-[18px] font-medium">{item.name}</h3>
                    <p className="text-[#7A7687]">{item.common_name}</p>
                    <p className="text-[#7A7687]">{item.price_title} </p>
                    <h3 className="text-[18px] my-2 font-medium">
                      {item.price} руб
                    </h3>
                    <button
                      className="py-3 w-full border rounded-3xl hover:scale-105 duration-200 text-[#088269]"
                      onClick={() => addToCart(item)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 border rounded ${
                    currentPage === index + 1
                      ? "bg-[#088269] text-white"
                      : "bg-white text-[#088269]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CartModal item={addedItem} onClose={() => setIsModalOpen(false)} />
      )}
      <div className="mt-8">
        <Kabinet />
        <Product />
        <Brend />
        <Map />
        <Footer />
      </div>
    </div>
  );
};

export default Aksiya;