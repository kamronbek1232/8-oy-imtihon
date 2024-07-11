import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneDuotone } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import CityModal from "./modal/CityModal";
import CallRequestModal from "./modal/CallRequestModal";

const NavBot = () => {
  const [isCityModalOpen, setCityModalOpen] = useState(false);
  const [isCallRequestModalOpen, setCallRequestModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Москва");

  const handleOpenCityModal = () => {
    setCityModalOpen(true);
  };

  const handleCloseCityModal = () => {
    setCityModalOpen(false);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  const handleOpenCallRequestModal = () => {
    setCallRequestModalOpen(true);
  };

  const handleCloseCallRequestModal = () => {
    setCallRequestModalOpen(false);
  };

  return (
    <div className=" bg-[#F8F7F3]  sm:hidden xl:block max-xl:hidden">
      <div className="container py-6 flex justify-between items-center ">
        <div className="flex items-center gap-7 md:gap-4 cursor-pointer py-10">
          <div className="group relative flex items-center gap-2">
            <Link to="/katalog" className="flex items-center gap-1">
              <HiMiniBars3CenterLeft className=" text-[#088269]" />
              <p className="text-[#202020] hover:text-[#088269] duration-200 hover:scale-105 font-bold text-[14px] md:text[10px]">
                Каталог
              </p>
            </Link>
          </div>
          <NavLink to="Proizvoditel">
            <div className="group relative">
              <p className="text-[#202020] hover:text-[#088269] hover:scale-105 duration-200 font-bold text-[14px]">
                Производители
              </p>
            </div>
          </NavLink>
          <NavLink to="Pokupatelyam">
            <div className="group relative">
              <p className="text-[#202020] hover:text-[#088269] hover:scale-105 duration-200 font-bold text-[14px]">
                Покупателям
              </p>
            </div>
          </NavLink>
          <p className="text-[#202020] hover:text-[#088269] hover:scale-105 duration-200 font-bold text-[14px]">
            Кабинеты под ключ
          </p>
          <Link to="/usluga">
            <p className="text-[#202020] hover:text-[#088269] hover:scale-105 duration-200 font-bold text-[14px]">
              Услуги
            </p>
          </Link>
          <Link to="/ContactUs">
            <p className="text-[#202020] hover:text-[#088269] hover:scale-105 duration-200 font-bold text-[14px]">
              Контакты
            </p>
          </Link>
          <NavLink to="Aksiya">
            <p className="text-[#202020] hover:text-[#088269] hover:scale-105 duration-200 font-bold text-[14px]">
              Акции
            </p>
          </NavLink>
        </div>
        <div className="flex xl:flex gap-3 cursor-pointer ">
          <div className="flex gap-1 items-center mt-[0px]" onClick={handleOpenCityModal}>
            <p className="text-[#202020] font-bold text-[14px] hover:text-[#088269]">{selectedCity}</p>
            <IoLocationOutline className="text-[#202020] font-bold text-lg " />
          </div>
          <div className="border px-5 py-3 font-bold rounded-3xl md:text-[13px] xl:block 2xl:block md:hidden sm:hidden ">
            <p className="text-[14px]">+7(495)000-00-00</p>
          </div>
          <button
            className="border duration-200 px-7 py-3 bg-[#088269] rounded-3xl md:text-[13px] xl:block 2xl:block md:hidden sm:hidden text-[#F8F7F3] font-bold text-[14px] hover:scale-105"
            onClick={handleOpenCallRequestModal}
          >
            Заказать звонок
          </button>
          <button className="p-2 bg-[#088269] text-white rounded-full xl:hidden ">
            <PiPhoneDuotone className="bg-transparent" />
          </button>
        </div>
      </div>
      <hr />
      <CityModal isOpen={isCityModalOpen} onClose={handleCloseCityModal} onSelectCity={handleSelectCity} />
      <CallRequestModal isOpen={isCallRequestModalOpen} onClose={handleCloseCallRequestModal} />
    </div>
  );
};

export default NavBot;