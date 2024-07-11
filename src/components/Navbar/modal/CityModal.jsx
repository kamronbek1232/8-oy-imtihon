import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const CityModal = ({ isOpen, onClose, onSelectCity }) => {
  const [search, setSearch] = useState('');
  const cities = [
    'Москва', 'Апрелевка', 'Балашиха', 'Бронницы', 'Верея', 'Видное', 'Волоколамск',
    'Воскресенск', 'Высоковск', 'Голицыно', 'Дедовск', 'Дзержинский', 'Дмитров',
    'Долгопрудный', 'Домодедово', 'Дрезна', 'Санкт-Петербург', 'Абакан', 'Азов',
    'Александров', 'Алексин', 'Альметьевск', 'Анапа', 'Ангарск', 'Анжеро-Судженск',
    'Апатиты', 'Арзамас', 'Армавир', 'Артем', 'Архангельск'
  ];

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleCitySelect = (city) => {
    onSelectCity(city);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 rounded-[10px]">
      <div className="bg-white p-6 rounded-lg w-[600px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Укажите свой город</h2>
          <IoCloseOutline className="text-2xl cursor-pointer" onClick={onClose} />
        </div>
        <input
          type="text"
          className="w-full mb-4 p-2 border rounded-[20px]"
          placeholder="Поиск населенного пункта"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
          {filteredCities.map((city, index) => (
            <p
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </p>
          ))}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-[#088269] text-white rounded w-full"
          onClick={onClose}
        >
          Все города
        </button>
      </div>
    </div>
  );
};

export default CityModal;