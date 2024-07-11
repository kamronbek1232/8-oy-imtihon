import React from 'react';
import Footer from '../components/home/Footer';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Garanti = () => {
  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Analiz</p>
      </div>
      <div className="max-w-[1360px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Гарантии</h2>
      <p className="mb-6">
        Регулярное сервисное обслуживание медицинской техники - залог её надёжной,
        бесперебойной эксплуатации, а также продолжительного срока службы.
        Периодическая диагностика позволяет выявить любые неисправности,
        отклонения от нормального рабочего режима на самых ранних сроках. Это
        предотвращает серьёзные поломки, приводящие к дорогостоящим ремонтам.
      </p>
      <p className="mb-6">
        Являясь авторизованным дилером фирм, продукция которых представлена в
        каталоге, компания:
      </p>
      <ol className="list-decimal list-inside mb-6">
        <li>Предоставляет услуги сервисного и гарантийного обслуживания.</li>
        <li>Осуществляет поставку оригинальных запчастей и комплектующих.</li>
        <li>Обучает медицинский персонал работе с поставленным медицинским оборудованием.</li>
      </ol>
      <p className="mb-6">
        Глобал Медикал Трейд является надежным поставщиком медицинского оборудования, 
        применяя комплексный подход, мы поставляем качественную продукцию по лучшей цене. 
        Наша компания гарантирует всем клиентам возможность воспользоваться всеми услугами 
        на каждом этапе: запуск-наладка, сервисным и техническим обслуживанием приобретаемого оборудования.
      </p>

      <h3 className="text-2xl font-bold mb-4">Перечень гарантийных услуг</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 border rounded-lg text-center hover:scale-105 duration-200 cursor-pointer h-[260px]">
          <div className="mb-4">
            <i className="fas fa-cogs text-4xl"></i>
          </div>
          <img className='mx-auto mb-[20px]' src="https://global-mt.ru/local/templates/gmt/img/Symbol.svg" alt="" />
          <h4 className="text-xl font-medium">Установка, настройка и пуско-наладка медтехники</h4>
        </div>
        <div className="p-6 border rounded-lg text-center hover:scale-105 duration-200 cursor-pointer h-[260px]">
          <div className="mb-4">
            <i className="fas fa-tools text-4xl"></i>
          </div>
          <img className='mx-auto mb-[20px]' src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg" alt="" />
          <h4 className="text-xl font-medium">Сервисное обслуживание медицинской техники любой комплектации</h4>
        </div>
        <div className="p-6 border rounded-lg text-center hover:scale-105 duration-200 cursor-pointer h-[260px]">
          <div className="mb-4">
            <i className="fas fa-shield-alt text-4xl"></i>
          </div>
          <img className='mx-auto mb-[20px]' src="https://global-mt.ru/local/templates/gmt/img/Symbol(2).svg" alt="" />
          <h4 className="text-xl font-medium">Гарантийное и постгарантийное обслуживание</h4>
        </div>
        <div className="p-6 border rounded-lg text-center hover:scale-105 duration-200 cursor-pointer h-[260px]">
          <div className="mb-4">
            <i className="fas fa-stethoscope text-4xl"></i>
          </div>
          <img className='mx-auto mb-[20px]' src="https://global-mt.ru/local/templates/gmt/img/Symbol(3).svg" alt="" />
          <h4 className="text-xl font-medium">Диагностика и проведение профилактических работ</h4>
        </div>
      </div>

      <div className="flex justify-end gap-8 items-center">
           <button className="px-7 mb-2 py-3 text-[#088269] rounded-3xl border font-bold text-[12px] sm:text-[14px] hover:scale-105 duration-200">
           Гарантийный случай
            </button>
            <button className="px-7 py-3 bg-[#088269] rounded-3xl text-white font-bold text-[12px] sm:text-[14px] hover:scale-105 duration-200 mr-2 mb-2">
            Замена товара
            </button>
      </div>

      <div className="flex justify-between bg-[#088269] p-6 mt-8 rounded-lg">
        <h4 className="text-[25px] font-bold text-[#F8F7F3] mb-2 ml-[30px] mt-[5px]">Внимание!</h4>
        <div className='w-[600px]'>
        <p className='mb-[30px] text-[#F8F7F3] text-[14px]'>
          Рассмотрение заявки на замену товара осуществляется в срок до 30 дней
          со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии
          предоставления документов, перечисленных в договоре.
        </p>
        <p className='text-[#F8F7F3] text-[14px]'>
          Оформление гарантийного случая осуществляется согласно Гражданскому
          кодексу РФ, при условии предоставления документов, перечисленных в
          договоре и при наличии заявления с указанием причины возврата,
          оформленного надлежащим образом.
        </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Garanti;