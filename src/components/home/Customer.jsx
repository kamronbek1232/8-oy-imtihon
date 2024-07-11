import React from 'react'
import Marquee from 'react-fast-marquee';

const Customer = () => {
  return (
    <div className="bg-[#E5E2EE] my-32 py-24 max-w-[1520px] mx-auto">
      <div className="container flex justify-between max-md:flex-col">
        <div className="text-[30px] max-md:text-[26px]">Наши клиенты</div>
        <div className="text-[48px] max-md:text-[38px]">
          БОЛЕЕ <span className="bg-transparent text-[#088269]">5000</span>{" "}
          <br /> УСПЕШНЫХ ПРОЕКТОВ
        </div>
      </div>
      <Marquee>
        <div className='flex justify-between gap-6 mx-6 mt-16'>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl ">
              <img src="https://global-mt.ru/upload/iblock/42a/5v2wg01of3rez9u1ee3q7w6dub963ljz/slider7.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="https://global-mt.ru/upload/iblock/a98/asyu7avffyglsba9gj33sbzw0l1fes5r.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="https://global-mt.ru/upload/iblock/4d0/3yg35cvejk0jpbralf633oflhcxgzzj5/logoy.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="https://global-mt.ru/upload/iblock/a04/tnrrj9eg674c2lr979rqtldsuk0hojzx/slider5.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src="https://global-mt.ru/upload/iblock/d24/vwmcaq263qatmju6kh83be34r4v35rxj/12.png" alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Customer