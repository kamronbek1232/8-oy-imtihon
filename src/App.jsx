import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Katalog from "./pages/Katalog";
import Analiz from "./pages/Analiz";
import Laboratory from "./pages/Laboratory";
import Kompane from "./pages/Kompane";
import Delevery from "./pages/Delevery";
import Usluga from "./pages/Usluga";
import Oplata from "./pages/Oplata";
import FullInformatsiya from "./components/informatsiya/FullInformatsiya";
import ContactUs from "./pages/ContactUs";
import Garanti from "./pages/Garanti";
import ProfilePage from "./pages/ProfilePage";
import Karzina from "./pages/Karzina";
import Like from "./pages/Like";
import Proizvoditel from "./pages/Proizvoditel";
import Pokupatelyam from "./pages/Pokupatelyam";
import Aksiya from "./pages/Aksiya";
import Compair from "./pages/Compair";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/kompane" element={<Kompane />} />
          <Route path="/usluga" element={<Usluga />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/Garanti" element={<Garanti />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/Karzina" element={<Karzina />} />          
          <Route path="/Like" element={<Like />} />          
          <Route path="/blog/informatsionny" element={<FullInformatsiya />} />
          <Route path="/delevery" element={<Delevery />} />
          <Route path="/katalog/laboratory" element={<Laboratory />} />
          <Route path="/katalog/laboratory/analiz" element={<Analiz />} />
          <Route path="Proizvoditel" element={<Proizvoditel />} />
          <Route path="Pokupatelyam" element={<Pokupatelyam />} />
          <Route path="Aksiya" element={<Aksiya />} />
          <Route path="Compair" element={<Compair />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
