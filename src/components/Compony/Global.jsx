import React from 'react'
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Global = () => {
  return (
    <div className="container">
      <div className="mt-10">
        <p className="flex items-center gap-3">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <MdNavigateNext /> <span className="text-black">О компании</span>
        </p>
        <div className="mt-8">
          <img src="./assets/Main.png" alt="igm" />
          <div className='md:grid md:grid-cols-2 gap-32 mt-10 '>
            <h1 className='text-[48px]'>Глобал медикал трейд</h1>
            <p>
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник. <br /> <br />
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
              специалистам всю необходимую помощь в деле поставок медицинского
              оборудования. Наш каталог включает передовое оборудование
              от лучших производителей России, Европы, Азии и США.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Global