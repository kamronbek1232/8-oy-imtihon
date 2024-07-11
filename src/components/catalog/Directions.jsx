import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Directions = () => {
    
    const [count , setCount] = useState(false)
  return (
    <div className="container">
      <p className="flex items-center gap-3">
        <Link to="/" className="text-[#7A7687]">
          Главная
        </Link>
        <MdNavigateNext /> <span className="text-black">Каталог</span>
      </p>
      <div>
        <div className=" lg:grid gap-3 mt-5 relative cursor-pointer group lg:grid-cols-3 xl:hidden">
          <h1 className="text-[20px]">Популярные категории</h1>
          <div></div>
          <div className="relative  w-full bg-[#f7f8f2] ">
            <div
              className="flex items-center justify-between rounded-t-lg border px-4 py-3"
              onClick={() => setCount(!count)}
            >
              <p>Направления</p>
              <MdNavigateNext className=" rotate-90 group-hover:rotate-[-90deg] duration-200" />
            </div>
            {count && (
              <div className=" absolute  border top-12 py-5  w-full bg-[#f7f8f2] h-[93%]">
                <p className="px-2">Направления</p>
                <hr className="" />
                <Link className="flex px-2 border-l border-r bg-[#f7f8f2] justify-between py-1 ">
                  <p className="text-[14px]">Реанимация</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Хирургия</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Офтальмология</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Лабораторная диагностика</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Акушерство и Гинекология</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Гистология</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Косметология</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Оториноларингология</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Рентгенология и томография</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Стерилизация</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Физиотерапия и реабилитация</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Функциональная диагностика</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Эндоскопия</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Новинки</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Распродажи</p>
                  <MdNavigateNext />
                </Link>
                <Link className=" flex border-b px-2 border-r border-l justify-between py-1">
                  <p className="text-[14px]">Кабинеты под ключ</p>
                  <MdNavigateNext />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <div className="p-4 py-5 border hidden xl:block rounded-xl bg-[#f7f8f2] h-auto xl:h-[93%]">
          <p className="pb-4">Направления</p>
          <hr className="py-1" />
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Реанимация</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Хирургия</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Офтальмология</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Лабораторная диагностика</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Акушерство и Гинекология</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Гистология</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Косметология</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Оториноларингология</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Рентгенология и томография</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Стерилизация</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Физиотерапия и реабилитация</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Функциональная диагностика</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Эндоскопия</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Новинки</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Распродажи</p>
            <MdNavigateNext />
          </Link>
          <Link className="flex justify-between py-1">
            <p className="text-[14px]">Кабинеты под ключ</p>
            <MdNavigateNext />
          </Link>
        </div>

        <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1 justify-between w-full">
          <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
            <img
              src="../../../public/Phtoto.png"
              alt="img"
              className="rounded-t-xl h-[80%] pb-2 object-cover"
            />
            <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
              <p className="text-[#202020]">Дерматологическое оборудование</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
            <img
              src="../../../public/Photo1.png"
              alt="img"
              className="rounded-t-xl h-[80%] object-cover"
            />
            <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
              <p className="text-[#202020]">Дерматологическое</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full col-span-1 md:col-span-1">
          <div className="mb-3 flex flex-col justify-between h-[48%] rounded-xl items-center pt-3 bg-white">
            <img
              src="../../../public/Photo3.png"
              alt="img"
              className="rounded-t-xl h-[80%] object-cover"
            />
            <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
              <p className="text-[#202020]">Дерматологическое оборудование</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[48%] rounded-xl items-center bg-white pt-3">
            <img
              src="../../../public/Photo4.png"
              alt="img"
              className="rounded-t-xl h-[80%] object-cover"
            />
            <div className="border bg-[#f7f8f2] rounded-b-xl py-5 pl-6 pr-12 w-full mt-1">
              <p className="text-[#202020]">Дерматологическое</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full justify-between w-full col-span-1">
          <div className="mb-3 flex flex-col justify-between h-full pt-3 rounded-xl items-center bg-white">
            <img
              src="../../../public/Photo2.png"
              alt="img"
              className="rounded-t-xl h-[80%] object-cover"
            />
            <div className="border bg-[#f7f8f2] w-full rounded-b-xl py-5 pl-6 pr-12">
              <p className="text-[#202020]">Дерматологическое оборудование</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
