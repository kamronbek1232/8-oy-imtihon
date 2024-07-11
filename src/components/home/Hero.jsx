import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import SliderItem from "./Slider";

const Hero = () => {
  const [isShow, setIsShow] = useState(0);

  const HandlePrev = () => {
    if (isShow > 0) {
      setIsShow(isShow - 1);
    }
  };
  const HandleNext = () => {
    if (isShow < 3) {
      setIsShow(isShow + 1);
    }
  };

  return (
    <div className="container mt-[30px] mb-[40px] md:mb-[84px] lg:mb-[120px] relative ">
      <div className=" overflow-hidden w-full z-0 relative bg-[#E5E4ED] rounded-[10px] max-h-[780px] ">
        <div
          style={{ transform: `translateX(-${isShow * 100}% )` }}
          className="flex w-full transition-transform ease-out duration-500 z-0 relative"
        >
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </div>

        <div className="hidden md:flex absolute z-10 bottom-[33px] right-10 gap-4 items-center">
          <button
            onClick={HandlePrev}
            className={` bg-[#F8F7F3]  duration-200  transition-all  rounded-full border p-3 `}
          >
            <FaArrowLeft className="w-[17px] h-[17px] "></FaArrowLeft>
          </button>
          <button
            onClick={HandleNext}
            className={` bg-[#F8F7F3]  duration-200  transition-all  rounded-full border p-3  `}
          >
            <FaArrowRight className="w-[17px] h-[17px] bg-transparent "></FaArrowRight>
          </button>
        </div>
      </div>
      <div className="flex gap-[10px] absolute z- bottom-[-15px] left-1/2 -translate-x-1/2 ">
        <span
          onClick={() => setIsShow(0)}
          className={` ${
            isShow == 0 ? "w-[36px]  bg-[#7A7687]" : "w-[6px] bg-[#b9b6bc] "
          } cursor-pointer duration-500 h-[6px] block rounded `}
        ></span>
        <span
          onClick={() => setIsShow(1)}
          className={` ${
            isShow == 1 ? "w-[36px]  bg-[#7A7687]" : "w-[6px] bg-[#b9b6bc] "
          } cursor-pointer duration-500 h-[6px] block rounded `}
        ></span>
        <span
          onClick={() => setIsShow(2)}
          className={` ${
            isShow == 2 ? "w-[36px]  bg-[#7A7687]" : "w-[6px] bg-[#b9b6bc] "
          } cursor-pointer duration-500 h-[6px] block rounded `}
        ></span>
        <span
          onClick={() => setIsShow(3)}
          className={` ${
            isShow == 3 ? "w-[36px]  bg-[#7A7687]" : "w-[6px] bg-[#b9b6bc] "
          } cursor-pointer duration-500 h-[6px] block rounded `}
        ></span>
      </div>
    </div>
  );
};

export default Hero;
