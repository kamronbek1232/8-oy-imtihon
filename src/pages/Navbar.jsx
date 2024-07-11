import NavTop from "../components/Navbar/NavTop";
import NavCen from "../components/Navbar/NavCen";
import NavBot from "../components/Navbar/NavBot";

const Navbar = () => {
  return (
    <div className=" top-0 left-0 w-full z-40 bg-white border-none">
      <NavTop />
      <NavCen />
      <NavBot />
    </div>
  );
};

export default Navbar;
