import Footer from "../components/home/Footer";
import Map from "../components/home/Map";
import Information from "../components/home/Information";
import News from "../components/home/News";
import Brend from "../components/home/Brend";
import Customer from "../components/home/Customer";
import Kabinet from "../components/home/Kabinet";
import Product from "../components/home/Product";
import Catigory from "../components/catalog/Catigory";
import Directions from "../components/catalog/Directions";

const Katalog = () => {
  
  return (
    <div className="mt-6">
      <Directions/>
      <Catigory/>
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

export default Katalog;
