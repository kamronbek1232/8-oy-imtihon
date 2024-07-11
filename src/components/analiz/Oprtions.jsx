import React, { useState } from 'react'
import Rec from '../../../public/Rec.png'

const Oprtions = () => {
     const [sortOption, setSortOption] = useState("useful");

     const reviews = [
       {
         name: "Тишков",
         date: "12 января 2023",
         rating: 4,
         comment:
           "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение посттангового и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
       },
       {
         name: "Тепляков Максим",
         date: "03 января 2023",
         rating: 5,
         comment:
           "Но синтетическое тестирование, в своём классическом представлении, допускает внедрение посттангового и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.",
       },
     ];

     const handleSortChange = (e) => {
       setSortOption(e.target.value);
     };
    const [count , setCount ] = useState(1)
  return (
    <div className="container ">
      <div className="border rounded-xl mt-20">
        <div>
          <ul className=" flex items-center px-6 md:gap-6 gap-1 cursor-pointer">
            <li
              onClick={() => setCount(1)}
              className={`py-4  md:text-[14px] text-[6px] sm:[10px]  duration-150  ${
                count == 1
                  ? `text-black border-b-4 border-[#07745E]`
                  : `text-[#7A7687]`
              } font-medium`}
            >
              Описание оборудования
            </li>
            <li
              onClick={() => setCount(2)}
              className={`py-4 md:text-[14px] text-[8px] sm:[10px]  duration-150 ${
                count == 2
                  ? `text-black border-b-4 border-[#07745E]`
                  : `text-[#7A7687]`
              } font-medium`}
            >
              Описание оборудования
            </li>
            <li
              onClick={() => setCount(3)}
              className={`py-4  md:text-[14px] text-[6px] sm:[10px]  duration-150 ${
                count == 3
                  ? `text-black border-b-4 border-[#07745E]`
                  : `text-[#7A7687]`
              } font-medium`}
            >
              Описание оборудования
            </li>
            <li
              onClick={() => setCount(4)}
              className={`py-4 md:text-[14px] text-[6px] sm:[10px]  duration-150 ${
                count == 4
                  ? `text-black border-b-4 border-[#07745E]`
                  : `text-[#7A7687]`
              } font-medium`}
            >
              Описание оборудования
            </li>
            <li
              onClick={() => setCount(5)}
              className={`py-4 md:text-[14px] text-[8px] sm:[10px] duration-150 ${
                count == 5
                  ? `text-black border-b-4 border-[#07745E]`
                  : `text-[#7A7687]`
              } font-medium`}
            >
              Описание оборудования
            </li>
          </ul>
        </div>
        <hr />
        <div className="px-6 py-5 bg-white">
          {count == 1 && (
            <div>
              <p className="text-black text-[18px] font-medium">
                Описание оборудования
              </p>
              <p className="text-[14px] text-[#7A7687] mb-3">
                Биохимический анализатор Mindr UA-66 оснащен открытой платформой
                для загрузки образцов и отлично размещается на столе в кабинете
                врача. Функциональная сочетаемость с дополнительным модулем ISE
                обеспечивает увеличение «скорострельности» прибора от 100 до 300
                обработанных пробирок с биоматериалом в час, а также позволит
                замерять показатели K, Na, Cl и Li в плазме, моче,
                цереброспинальной жидкости вместе с другими важными параметрами
                исследования.
              </p>
              <p className="text-[14px] text-[#7A7687] mb-3">
                Прибор интуитивно понятен в использовании и техобслуживании,
                экономен в части финансовых затрат не реагенты. Что важно,
                калибровка системы аналогична той, что установлена на более
                современной аппаратуре, и это – идеальный вариант для небольших
                лабораторий, поскольку емкость погрузчика для проб меньше, чем у
                мощного оборудования.
              </p>
              <p className="text-[14px] text-[#7A7687] mb-3">
                Только небольшая загрузочная емкость для образцов и химических
                компонентов, если сравнивать с передовой аналогичной техникой,
                не позволяет этой системе претендовать на принятие в ряды
                аппаратуры, которой оснащены крупномасштабные лаборатории.
              </p>
            </div>
          )}
          {count == 2 && (
            <div>
              <p className="text-black text-[18px] font-medium">
                Технические характеристики
              </p>
              <div className="lg:flex justify-between">
                <div className="flex flex-col gap-3 my-5">
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Вес оборудования . . . . . . . . . . . .
                    </p>
                    <p>90 кг</p>
                  </div>
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Детектор . . . . . . . . . . . . . . . . . . . . .
                    </p>
                    <p>CsI - на основе аморфного кремния</p>
                  </div>
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Время сканирования . . . . . . . . .
                    </p>
                    <p>PAN стандарт - 12 сек</p>
                  </div>
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Размер фокусного пятна . . . . . .
                    </p>
                    <p>0.6</p>
                  </div>
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Динамический диапазон . . . . . .
                    </p>
                    <p>16 бит (65 536 градации серого)</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 my-3">
                  <div className="flex ">
                    <p className="text-[#7A7687]">
                      Вес оборудования . . . . . . . . . . . .
                    </p>
                    <p>90 кг</p>
                  </div>
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Детектор . . . . . . . . . . . . . . . . . . . . .
                    </p>
                    <p>CsI - на основе аморфного кремния</p>
                  </div>
                  <div className="flex">
                    <p className="text-[#7A7687]">
                      Время сканирования . . . . . . . . .
                    </p>
                    <p>PAN стандарт - 12 сек</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {count == 3 && (
            <div className="mt-5">
              <p className="text-black pb-5 text-[18px] font-medium">
                Услуги и сервис
              </p>
              <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="border rounded-xl">
                  <img
                    src="../../../public/Rec.png"
                    alt="img"
                    className="w-full rounded-t-xl "
                  />
                  <div>
                    <p className="text-black text-[18px] font-medium p-5">
                      Апробация
                    </p>
                  </div>
                </div>
                <div className="border rounded-xl">
                  <img
                    src="../../../public/Rec.png"
                    alt="img"
                    className="w-full rounded-t-xl"
                  />
                  <div>
                    <p className="text-black text-[18px] font-medium p-5">
                      Апробация
                    </p>
                  </div>
                </div>
                <div className="border rounded-xl">
                  <img
                    src="../../../public/Rec.png"
                    alt="img"
                    className="w-full rounded-t-xl"
                  />
                  <div>
                    <p className="text-black text-[18px] font-medium p-5">
                      Апробация
                    </p>
                  </div>
                </div>
                <div className="border rounded-xl">
                  <img
                    src="../../../public/Rec.png"
                    alt="img"
                    className="w-full rounded-t-xl"
                  />
                  <div>
                    <p className="text-black text-[18px] font-medium p-5">
                      Апробация
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {count == 4 && (
            <div>
              <p className="text-black text-[18px] font-medium">
                Описание оборудования
              </p>
              <p className="text-[14px] text-[#7A7687] mb-3">
                Биохимический анализатор Mindr UA-66 оснащен открытой платформой
                для загрузки образцов и отлично размещается на столе в кабинете
                врача. Функциональная сочетаемость с дополнительным модулем ISE
                обеспечивает увеличение «скорострельности» прибора от 100 до 300
                обработанных пробирок с биоматериалом в час, а также позволит
                замерять показатели K, Na, Cl и Li в плазме, моче,
                цереброспинальной жидкости вместе с другими важными параметрами
                исследования.
              </p>
              <p className="text-black text-[18px] font-medium py-5">
                Описание оборудования
              </p>
              <p className="text-[14px] text-[#7A7687] mb-3">
                Прибор интуитивно понятен в использовании и техобслуживании,
                экономен в части финансовых затрат не реагенты. Что важно,
                калибровка системы аналогична той, что установлена на более
                современной аппаратуре, и это – идеальный вариант для небольших
                лабораторий, поскольку емкость погрузчика для проб меньше, чем у
                мощного оборудования.
              </p>
              <p className="text-[14px] text-[#7A7687] mb-3">
                Реквизиты для оформеления заказа
              </p>
            </div>
          )}
          {count == 5 && (
            <div className="container mx-auto md:flex px-4 gap-10 py-6">
              <div className="border rounded-xl p-6 w-full md:w-[75%]">
                <div className="flex gap-10  items-center mb-6">
                  <h2 className="text-[18px] font-medium">
                    Отзывы{" "}
                    <span className="text-[14px] text-[#7A7687]">(4)</span>
                  </h2>
                  <div className="relative hidden sm:block bg-white">
                    <select
                      value={sortOption}
                      onChange={handleSortChange}
                      className="border rounded-md bg-white outline-none py-2 px-4 text-[14px] text-[#7A7687]"
                    >
                      <option value="useful">Сначала полезные</option>
                      <option value="new">Сначала новые</option>
                      <option value="high-rating">
                        Сначала с высокой оценкой
                      </option>
                      <option value="low-rating">
                        Сначала с низкой оценкой
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  {reviews.map((review, index) => (
                    <div key={index} className="border rounded-xl p-4 mb-4">
                      <p className="text-[14px] text-[#7A7687] mb-1">
                        <strong>{review.name}</strong>
                      </p>
                      <p className="text-[14px] text-[#7A7687] mb-1">
                        {review.comment}
                      </p>
                      <p className="text-[14px] text-[#7A7687]">
                        {review.date}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="border block mx-auto  rounded-3xl py-2 px-4 text-[14px] text-[#07745E] mt-4">
                  Показать еще
                </button>
              </div>
              <div className="flex w-full md:w-[25%] flex-col items-end mt-6">
                <div className=" flex justify-between items-center mb-2 w-full ">
                  <p className="text-[14px] text-[#7A7687] mr-2">5 звезд</p>
                  <div className="w-24 h-2 bg-[#f1f1f1] rounded-md overflow-hidden">
                    <div
                      className="h-full bg-[#FFC536]"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <p className="text-[14px] text-[#7A7687] ml-2">12</p>
                </div>
                <div className="flex justify-between items-center mb-2 w-full">
                  <p className="text-[14px] text-[#7A7687] mr-2">4 звезды</p>
                  <div className="w-24 h-2 bg-[#f1f1f1] rounded-md overflow-hidden">
                    <div
                      className="h-full bg-[#FFC536]"
                      style={{ width: "53%" }}
                    ></div>
                  </div>
                  <p className="text-[14px] text-[#7A7687] ml-2">8</p>
                </div>
                <div className="flex justify-between items-center mb-2 w-full">
                  <p className="text-[14px] text-[#7A7687] mr-2">3 звезды</p>
                  <div className="w-24 h-2 bg-[#f1f1f1] rounded-md overflow-hidden">
                    <div
                      className="h-full bg-[#FFC536]"
                      style={{ width: "13%" }}
                    ></div>
                  </div>
                  <p className="text-[14px] text-[#7A7687] ml-2">2</p>
                </div>
                <div className="flex justify-between items-center mb-2 w-full">
                  <p className="text-[14px] text-[#7A7687] mr-2">2 звезды</p>
                  <div className="w-24 h-2 bg-[#f1f1f1] rounded-md overflow-hidden">
                    <div
                      className="h-full bg-[#FFC536]"
                      style={{ width: "7%" }}
                    ></div>
                  </div>
                  <p className="text-[14px] text-[#7A7687] ml-2">1</p>
                </div>
                <div className="flex justify-between items-center mb-2 w-full">
                  <p className="text-[14px] text-[#7A7687] mr-2">1 звезда</p>
                  <div className="w-24 h-2 bg-[#f1f1f1] rounded-md overflow-hidden">
                    <div
                      className="h-full bg-[#FFC536]"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <p className="text-[14px] text-[#7A7687] ml-2">0</p>
                </div>
                <button className="bg-[#07745E] w-full mt-7 text-white py-2 px-4 rounded-3xl">
                  Оставить отзыв
                </button>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="px-6">
          <ul className="flex gap-3 sm:5 md:gap-10">
            <li className="text-[12px] text-[#07745E] py-[10px] cursor-pointer">
              Новинки
            </li>
            <li className="text-[12px] text-[#07745E] py-[10px] cursor-pointer">
              Получить прайс
            </li>
            <li className="text-[12px] text-[#07745E] py-[10px] cursor-pointer">
              Условия доставки
            </li>
            <li className="text-[12px] text-[#07745E] py-[10px] cursor-pointer">
              Способы оплаты
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Oprtions