import Analizetic from "../components/analiz/Analizetic";
import React from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Information from "../components/home/Information";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Product from "../components/home/Product";
import Oprtions from "../components/analiz/Oprtions";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Analiz = () => {
  return (
    <div className="mt-10">
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Analiz</p>
      </div>
      <Analizetic />
      <Oprtions />
      <Product />
      <Customer />
      <Brend />
      <Information />
      <Map />
      <Footer />
    </div>
  );
};

export default Analiz;
