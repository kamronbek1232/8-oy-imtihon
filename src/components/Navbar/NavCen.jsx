import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { FaRegUser, FaSortDown } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiHome3Line, RiMenuSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { LiaChartBar } from "react-icons/lia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Logo from "../../../public/Logo.svg";
import PersonalInfoModal from "./modal/PersonalInfoModal";
import { catalogCrData } from "../../data/data";
const NavCen = () => {
  const { list, like, statist } = useSelector((state) => state.addTo);

  const [currentSlide, setCurrentSlide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentName, setCurrentName] = useState("Константин");
  const [currentSurname, setCurrentSurname] = useState("Константинопольский");
  const [currentPhone, setCurrentPhone] = useState("+7 911 564-86-86");
  const [currentEmail, setCurrentEmail] = useState("person@mail.ru");
  const [searchQuery, setSearchQuery] = useState("");

  const Refrence = useRef();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleSave = (newData) => {
    setCurrentName(newData.name);
    setCurrentSurname(newData.surname);
    setCurrentPhone(newData.phone);
    setCurrentEmail(newData.email);
    localStorage.setItem("userInfo", JSON.stringify(newData));
  };

  const filteredProducts = catalogCrData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F8F7F3] border-b w-full">
      <hr />
      <div className="container flex items-center justify-between cursor-pointer py-7 xl:py-5">
        <div className="flex items-center max-sm:flex-col max-md:flex-col lg:gap-12 md:gap-7 md:flex md:w-full overflow-hidden py-4 w-full">
          <div className="flex overflow-hidden justify-between max-md:w-full max-sm:w-full">
            <Link to="/">
              <img src={Logo} alt="img" className="h-full w-auto" />
            </Link>
            <div className="gap-4 sm:flex max-sm:flex md:hidden items-center lg:hidden xl:hidden">
              <FiPhone className="h-full w-7" />
              {menuOpen ? (
                <IoMdClose
                  className="h-full w-7"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <RxHamburgerMenu
                  className="h-full w-7"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </div>
          </div>
          <div className="rounded-3xl border-t border-[1.50px] border-[#D5D1E1] flex max-lg:w-full items-center bg-[#D5D1E1] mt-3 md:mt-0">
            <div className="flex overflow-hidden bg-[#F8F7F3] h-full rounded-3xl w-full">
              <div
                className="flex items-center gap-1 py-[10px] rounded-3xl px-[15px] bg-[#EFEFEF] xl:min-w-[150px] min-w-[120px]"
                onClick={() => setCurrentSlide(!currentSlide)}
              >
                <p className="text-[#7A7687] h-full bg-transparent max-sm:text-[10px] sm:text-[10px] md:text-[10px] xl:text-[14px]">
                  Все категории
                </p>
                <FaSortDown
                  className={
                    currentSlide
                      ? "text-[#7A7687] bg-transparent rotate-180 duration-150"
                      : "text-[#7A7687] bg-transparent duration-150"
                  }
                />
              </div>
              <input
                ref={Refrence}
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={handleSearchChange}
                className="pr-20 max-md:pr-5 pl-5 rounded-3xl outline-none w-[350px] text-[15px] text-[#646464]"
              />
            </div>
            <IoSearch
              className="w-5 h-5 my-[10px] bg-transparent text-[#7A7687] mx-3 cursor-pointer hover:scale-125 duration-300"
              onClick={() => Refrence.current.focus()}
            />
          </div>
          <p className="text-[#7A7687] text-[12px] hidden lg:block">
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </p>
        </div>
        <div className="flex items-center gap-7 xl:gap-6 md:gap-3 md:flex xl:flex max-md:hidden sm:hidden">
          <NavLink to="/ProfilePage">
            <div className="text-center relative hover:scale-105 duration-300">
              <FaRegUser
                className="block mx-auto w-5 h-5 text-[#505050]"
                onClick={toggleModal}
              />
              <p
                onClick={toggleModal}
                className="text-[#7A7687] text-[15px] hidden lg:block"
              >
                Войти
              </p>
            </div>
          </NavLink>
          <NavLink to="/Like">
            <div className="text-center relative hover:scale-105 duration-300">
              <img className="ml-[25px]" src="https://global-mt.ru/local/templates/gmt/img/favourites.svg" alt="" />
              <p className="text-[#7A7687] mb-[5px] text-[15px] hidden lg:block">
                Избранное
              </p>
              <span className="top-[-5px] left-11 px-[4px] text-[12px] rounded-full text-white bg-[#088269] font-bold absolute">
                {like.length}
              </span>
            </div>
          </NavLink>
          <NavLink to="Compair">
          <div className="text-center relative hover:scale-105 duration-300">
            {/* <LiaChartBar className="block mx-auto w-5 h-5 text-[#505050]" /> */}
            <img className="ml-[25px]" src="https://global-mt.ru/local/templates/gmt/img/comparison.svg" alt="" />
            <p className="text-[#7A7687] mb-[5px] text-[15px] hidden lg:block">
              Сравнение
            </p>
            <span className="top-[-5px] left-11 px-[4px] text-[12px] rounded-full text-white bg-[#088269] font-bold absolute">
              {statist.length}
            </span>
          </div>
          </NavLink>
          <NavLink to="/Karzina">
            <div className="text-center relative hover:scale-105 duration-300">
              <SlBasket className="block mx-auto w-5 h-5 text-[#505050]" />
              <img src="" alt="" />
              <p className="text-[#7A7687] mb-[5px] text-[15px] hidden lg:block">
                Корзина
              </p>
              <span className="top-[-5px] left-11 px-[4px] text-[12px] rounded-full text-white bg-[#088269] font-bold absolute">
                {list.length}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
      {searchQuery && (
        <div className="fixed top-[120px] left-0 right-[300px] mx-auto bg-[#fff] p-4 rounded-[10px] shadow max-h-[400px] overflow-y-auto w-[400px] z-50">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="py-2 border-b flex items-center hover:scale-105 duration-200"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-10 h-10 object-cover mr-2"
                  />
                  <span>{product.name}</span>
                  <span className="ml-auto">{product.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
      <PersonalInfoModal
        isOpen={modalIsOpen}
        onClose={toggleModal}
        currentName={currentName}
        currentSurname={currentSurname}
        currentPhone={currentPhone}
        currentEmail={currentEmail}
        onSave={handleSave}
      />
    </div>
    
  );
};

export default NavCen;