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

const HomePage = () => {
  
  return (
    <div className="mt-12">
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
  );
};

export default HomePage;
