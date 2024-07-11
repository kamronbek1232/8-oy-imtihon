import React from "react";
import { Link } from "react-router-dom";
import phototo from "../../../public/Phtoto.png"
import photo1 from "../../../public/Photo1.png"
import photo2 from "../../../public/Photo2.png"
import photo3 from "../../../public/Photo3.png"
import photo4 from "../../../public/Photo4.png"
import photo5 from "../../../public/Photo5.png"
import photo6 from "../../../public/Photo6.png"

const Popular = () => {
  return (
    <div className="container">
      <div className="my-24">
        <div className="flex justify-between flex-wrap">
          <h2 className="text-[30px] mb-4 sm:mb-0">Популярные категории</h2>
          <Link to="/katalog">
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[14px] hover:scale-105 duration-200">
              Все категории
            </button>
          </Link>
        </div>
        <div className="py-16 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1 justify-between w-full">
            <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
              <img
                src={phototo}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
              <img
                src={photo1}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
                <p className="text-[#202020]">Дерматологическое</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between w-full col-span-1">
            <div className="mb-3 flex flex-col justify-between h-full pt-3 rounded-xl items-center bg-white">
              <img
                src={photo2}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full col-span-1">
            <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
              <img
                src={photo3}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
              <img
                src={photo4}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] rounded-b-xl  py-5 pl-6 pr-12 w-full mt-1">
                <p className="text-[#202020]">Дерматологическое</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full col-span-1">
            <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
              <img
                src={photo5}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
                <p className="text-[#202020]">Дерматологическое оборудование</p>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
              <img
                src={photo6}
                alt="img"
                className="rounded-t-xl h-[80%] object-fill"
              />
              <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
                <p className="text-[#202020]">Дерматологическое</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
