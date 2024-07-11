// import { BtnG, BtnWG } from "../ui/Btn";

const SliderItem = () => {
  return (
    <div className={` min-w-full h-full grid grid-cols-1 md:grid-cols-2 `}>
      <div className=" px-[20px] py-[17px] lg:py-[33px] lg:pl-[60px] ">
        <p className=" text-[28px] lg:text-[48px] font-medium text-[--second] mb-[15px] md:mb-[25px] leading-[110%]">
          Заголовок баннера <br /> в пару строк
        </p>
        <p className="text-[12px] lg:text-[16px] font-medium leading-[140%] text-[--text] w-[80%] md:w-[60%] mb-[23px] lg:mb-[65px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor{" "}
        </p>

        <div className="flex gap-4">
          <button className="border duration-200 px-7 py-3 bg-[#088269] rounded-3xl md:text-[13px] xl:block  2xl:block  md:hidden sm:hidden text-[#F8F7F3] font-bold text-[14px]  hover:scale-105">
          Запросить цену
          </button>
          <button className="duration-200 px-7 py-3 bg-[#dbd5ea] rounded-3xl md:text-[13px] xl:block  2xl:block  md:hidden sm:hidden text-[#088269] font-bold text-[14px]  hover:scale-105">
          В каталог
          </button>
        </div>
      </div>

      <img
        src="./Vector.png"
        alt=""
        className="h-full hidden w-full md:block "
      />
      <img
        src="./shifo.jpg"
        alt=""
        className="h-[200px] sm:h-[300px] rounded-[10px] w-full pt-[7px] md:hidden "
      />
    </div>
  );
};

export default SliderItem;
