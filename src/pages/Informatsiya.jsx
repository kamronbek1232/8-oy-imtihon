import React from "react";
import Hero from "../components/home/Hero";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Information from "../components/home/Information";
import News from "../components/home/News";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Popular from "../components/home/Popular";
import Kabinet from "../components/home/Kabinet";
import Product from "../components/home/Product";
import FullInformation from "../components/informatsionny/FullInformation";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Informatsiya = () => {
  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Informatsiya</p>
      </div>
      <FullInformation />
      <Product />
      <Customer />
      <Information />
      <Brend />
      <Map />
      <Footer />
    </div>
  );
};

export default Informatsiya;
