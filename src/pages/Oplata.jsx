import React from 'react'
import Footer from '../components/home/Footer'
import Map from '../components/home/Map'
import MainOplata from '../components/Oplata/MainOplata'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Oplata = () => {
  return (
    <div>
        <MainOplata/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default Oplata