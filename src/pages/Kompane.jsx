import React from "react";
import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Global from "../components/Compony/Global";
import Fact from "../components/Compony/Fact";
import Sertification from "../components/catalog/Sertification";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Kompane = () => {
  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Kompane</p>
      </div>
      <Global />
      <Fact />
      <Customer />
      <Brend />
      <Sertification />
      <Map />
      <Footer />
    </div>
  );
};

export default Kompane;
