import React from 'react'
import Footer from '../components/home/Footer'
import Map from '../components/home/Map'
import MainOplata from '../components/Oplata/MainOplata'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Oplata = () => {
  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Oplata</p>
      </div>
        <MainOplata/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default Oplata