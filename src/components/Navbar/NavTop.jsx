import React from "react";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="bg-[#f7f8f2] border-b max-md:hidden ">
      <div className="container  ">
        <div className="flex justify-between items-center py-[10px]  cursor-pointer  ">
          <ul className="flex gap-5 bg-transparent">
            <Link to="kompane">
              <li className="text-[#7A7687] text-[12px] hover:scale-105 duration-200 hover:text-[#424242]">О компании</li>
            </Link>
            <Link to="delevery">
              <li className="text-[#7A7687] text-[12px] hover:scale-105 duration-200 hover:text-[#424242]">Доставка</li>
            </Link>
            <Link to='oplata'>
              <li className="text-[#7A7687] text-[12px] hover:scale-105 duration-200 hover:text-[#424242]">Оплата</li>
            </Link>
            <Link to="/Garanti">
            <li className="text-[#7A7687] text-[12px] hover:scale-105 duration-200 hover:text-[#424242]">Гарантии</li></Link>
            <Link to="/blog/informatsionny">
              <li className="text-[#7A7687] text-[12px] hover:scale-105 duration-200 hover:text-[#424242]">Блог</li>
            </Link>
          </ul>
          <ul className="flex gap-11 bg-transparent">
            <li className="text-[#7A7687] text-[12px] hover:text-[#424242]">info@mail.ru</li>
            <li className="text-[#7A7687] text-[12px] hover:text-[#424242]">
              г. Москва, ул. Московская, д. 35
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
