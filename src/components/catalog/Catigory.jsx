import React from "react";
import img240 from "../../../public/240.png"
import phototo from "../../../public/Phtoto.png"
import photo1 from "../../../public/Photo1.png"
import photo3 from "../../../public/Photo3.png"
import photo4 from "../../../public/Photo4.png"

const Catigory = () => {
  
  return (
    <div className="container">
      <div className=" mt-7 grid gap-3 md:grid-cols-3 xl:grid-cols-4">
        <div className=" hidden xl:block"></div>
        <div className="flex flex-col h-full justify-between  w-full col-span-1">
          <div className="mb-3 flex flex-col justify-between h-full pt-3 rounded-xl items-center bg-white">
            <img
              src={img240}
              alt="img"
              className="rounded-t-xl h-[80%]"
            />
            <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
              <p className="text-[#202020]">Дерматологическое оборудование</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1 justify-between w-full">
          <div className="mb-7 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
            <img
              src={phototo}
              alt="img"
              className="rounded-t-xl h-[80%] pb-2"
            />
            <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
              <p className="text-[#202020]">Дерматологическое оборудование</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
            <img
              src={photo1}
              alt="img"
              className="rounded-t-xl h-[80%]"
            />
            <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
              <p className="text-[#202020]">Дерматологическое</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full col-span-1">
          <div className="mb-7 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
            <img
              src={photo3}
              alt="img"
              className="rounded-t-xl h-[80%]"
            />
            <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
              <p className="text-[#202020]">Дерматологическое оборудование</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
            <img
              src={photo4}
              alt="img"
              className="rounded-t-xl h-[80%]"
            />
            <div className="border bg-[#f7f8f2] rounded-b-xl  py-5 pl-6 pr-12 w-full mt-1">
              <p className="text-[#202020]">Дерматологическое</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catigory;
