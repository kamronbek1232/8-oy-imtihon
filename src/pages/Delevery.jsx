import React from 'react'
import Footer from '../components/home/Footer'
import Information from '../components/home/Information'
import DelMap from '../components/delevery/DelMap'
import Kontak from '../components/delevery/Kontak'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Delevery = () => {
  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[17px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[17px]" />
          <p className="text-[17px] font-normal text-[#202020]">Delevery</p>
        </div>
        <DelMap/>
        <Information/>
        <Kontak/>
        <Footer/>
    </div>
  )
}

export default Delevery