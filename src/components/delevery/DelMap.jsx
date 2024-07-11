import React from "react";

const DelMap = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-20">
        <h1 className="text-[30px] sm:text-[38px] md:text-[48px]">
          Информация о доставке
        </h1>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31ca66d417%3A0x5755ff29b7bf33a!2sRayhon%20National%20Meals%20Restaurant!5e0!3m2!1sen!2s!4v1719604789618!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="mt-10 md:grid md:grid-cols-2 gap-8">
        <p></p>
        <p>
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов в различных направлениях, от установок
          компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.
          Переход на полностью цифровую платформу при диагностике и лечении
          заболеваний также стал серьёзным испытанием для большинства больниц и
          частных клиник.
        </p>
      </div>
      <div className="mt-16">
        <h1 className="text-[30px]">Почему выбирают нас?</h1>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="border w-full sm:w-[300px] p-10 flex flex-col items-center justify-center mb-4">
            <img src="/Symbol.svg" alt="" className="mb-10" />
            <p className="text-center">Быстрая доставка</p>
          </div>
          <div className="border w-full sm:w-[300px] p-10 flex flex-col items-center justify-center mb-4">
            <img src="/Symbol1.svg" alt="" className="mb-10" />
            <p className="text-center">
              Весь товар <br /> сертифицирован
            </p>
          </div>
          <div className="border w-full sm:w-[300px] p-10 flex flex-col items-center justify-center mb-4">
            <img src="/Symbol2.svg" alt="" className="mb-10" />
            <p className="text-center">
              Гибкая система <br /> скидок
            </p>
          </div>
          <div className="border w-full sm:w-[300px] p-10 flex flex-col items-center justify-center mb-4">
            <img src="/Symbol3.svg" alt="" className="mb-10" />
            <p className="text-center">Лет на рынке</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
          <h3 className="text-[30px] mb-3">
            Правила получения товара в пункте выдачи
          </h3>
          <p>
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись с
            вызовом, требующим обновления приборов.
          </p>
        </div>
        <div>
          <hr />
          <h4 className="text-[18px] py-3">Проверка упаковки</h4>
          <p className="py-3 text-[#7A7687]">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
          <hr />
          <h4 className="text-[18px] py-3">Подготовить документы</h4>
          <p className="py-3 text-[#7A7687]">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
          <hr />
          <h4 className="text-[18px] py-3">Проверка товара</h4>
          <p className="py-3 text-[#7A7687]">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
        </div>
      </div>
    </div>
  );
};

export default DelMap;
