// import React from "react";
// import { MdNavigateNext } from "react-icons/md";
// import { Link } from "react-router-dom";

// const UslugaMain = () => {
//   return (
//     <div className="container mx-auto px-4">
//       <div className="mt-10">
//         <p className="flex items-center gap-3">
//           <Link to="/" className="text-[#7A7687]">
//             Главная
//           </Link>
//           <MdNavigateNext /> <span className="text-black">Услуги</span>
//         </p>
//         <div className="mt-20 ">
//           <h3 className="mb-10 text-[36px] md:text-[48px]">Услуги</h3>
//           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
//             {Array(8)
//               .fill()
//               .map((_, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col md:flex-row h-auto md:h-[350px] w-full bg-white rounded-xl overflow-hidden transition-transform transform"
//                 >
//                   <div className="p-5 flex flex-col justify-between w-full md:w-[60%]">
//                     <div>
//                       <h4 className="text-[18px] font-medium mb-4">
//                         Апробация
//                       </h4>
//                       <p className="text-[12px] text-[#7A7687] mb-4">
//                         Описание услуги
//                       </p>
//                       <p className="text-[#7A7687]">
//                         Также как постоянное информационно-пропагандистское
//                         обеспечение нашей деятельности требует определения и
//                         уточнения распределения внутренних резервов и ресурсов.
//                       </p>
//                     </div>
//                     <div className="mt-4 md:mt-0">
//                       <button className="px-7 py-3 border-[#088269]  border rounded-3xl text-[#088269] font-bold text-[14px] hover:scale-105 duration-200">
//                         Заказать
//                       </button>
//                     </div>
//                   </div>
//                   <div className="w-full md:w-[265px]">
//                     <img
//                       src={`/assets/r${(index % 3) + 1}.png`}
//                       alt="img"
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UslugaMain;



import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const UslugaMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-10">
        <p className="flex items-center gap-3">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <MdNavigateNext /> <span className="text-black">Услуги</span>
        </p>
        <div className="mt-20 ">
          <h3 className="mb-10 text-[36px] md:text-[48px]">Услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row h-auto md:h-[350px] w-full bg-white rounded-xl overflow-hidden transition-transform transform"
                >
                  <div className="p-5 flex flex-col justify-between w-full md:w-[60%]">
                    <div>
                      <h4 className="text-[18px] font-medium mb-4">
                        Апробация
                      </h4>
                      <p className="text-[12px] text-[#7A7687] mb-4">
                        Описание услуги
                      </p>
                      <p className="text-[#7A7687]">
                        Также как постоянное информационно-пропагандистское
                        обеспечение нашей деятельности требует определения и
                        уточнения распределения внутренних резервов и ресурсов.
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button
                        className="px-7 py-3 border-[#088269] border rounded-3xl text-[#088269] font-bold text-[14px] hover:scale-105 duration-200"
                        onClick={handleOrderClick}
                      >
                        Заказать
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-[265px]">
                    <img
                      src={`/assets/r${(index % 3) + 1}.png`}
                      alt="img"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UslugaMain;