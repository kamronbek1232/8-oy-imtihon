import React from 'react'
import Hero from '../components/home/Hero'
import Popular from '../components/home/Popular'
import Kabinet from '../components/home/Kabinet'
import Product from '../components/home/Product'
import Customer from '../components/home/Customer'
import Brend from '../components/home/Brend'
import Information from '../components/home/Information'
import News from '../components/home/News'
import Footer from '../components/home/Footer'
import Map from '../components/home/Map'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

function Pokupatelyam() {
  return (
    <div>
        <div className="flex ml-[130px] mb-[40px] mt-]40px[] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Pokupaytelyam</p>
        </div>
      <Hero />
      <Popular />
      <Kabinet />
      <Product />
      <Customer />
      <Brend />
      <Information />
      <News />
      <Map />
      <Footer />
    </div>
  )
}

export default Pokupatelyam;