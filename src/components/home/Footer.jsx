// import React, { useState, useEffect } from "react";
// import Mes from "../../../public/mes.png";
// import FooterBot from "./FooterBot";
// import Modal from "react-modal";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [validationMessage, setValidationMessage] = useState("");

//   const handleSubscribe = () => {
//     if (!email) {
//       setValidationMessage("Пожалуйста, введите email");
//     } else if (!validateEmail(email)) {
//       setValidationMessage("Пожалуйста, введите корректный email");
//     } else {
//       localStorage.setItem("subscribedEmail", email);
//       setEmail("");
//       setIsModalOpen(true);
//       setValidationMessage("");
//     }
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       const timer = setTimeout(() => {
//         setIsModalOpen(false);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [isModalOpen]);

//   return (
//     <>
//       <div className="mt-20 bg-[#E5E4ED]">
//         <div className="container flex items-center max-md:flex-col justify-between pr-40 bg-transparent">
//           <div className=" bg-transparent">
//             <img src={Mes} alt="img" className=" bg-transparent" />
//           </div>
//           <div className=" bg-transparent">
//             <h1 className="text-[30px] mb-3 bg-transparent">
//               Подпишитесь и будьте в курсе!
//             </h1>
//             <p className="text-[#7A7687] mb-3 bg-transparent">
//               Акции, скидки, распродажи ждут!
//             </p>
//             <div className=" bg-white mb-6 rounded-3xl justify-between border flex items-center">
//               <input
//                 id="input"
//                 type="text"
//                 placeholder="Введите email"
//                 className="bg-transparent px-5 w-full outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 className="px-7 py-3 bg-[#088269] rounded-3xl text-[#F8F7F3] font-bold text-[14px]"
//                 onClick={handleSubscribe}
//               >
//                 Подписаться
//               </button>
//             </div>
//             {validationMessage && (
//               <p className="text-red-500">{validationMessage}</p>
//             )}
//             <div className="flex items-center gap-2">
//               <input type="checkbox" className="w-4 h-4" />
//               <span className="bg-transparent">
//                 Я даю согласие на обработку своих персональных данных.
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterBot />
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         className="flex justify-center items-start mt-[30px] inset-0 fixed z-50"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
//       >
//         <div className="bg-green-500 text-white rounded-lg p-1 shadow-lg w-full  mx-auto text-center max-w-[400px] h-[80px]">
//           <h2 className="text-xl font-bold mb-2">Успех!</h2>
//           <p className="mb-4">Ваш email был успешно сохранен.</p>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from "react";
import Mes from "../../../public/mes.png";
import FooterBot from "./FooterBot";
import Modal from "react-modal";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      setValidationMessage("Пожалуйста, введите email");
    } else if (!validateEmail(email)) {
      setValidationMessage("Пожалуйста, введите корректный email");
    } else if (!isChecked) {
      setValidationMessage("Пожалуйста, дайте согласие на обработку данных");
    } else {
      localStorage.setItem("subscribedEmail", email);
      setEmail("");
      setIsModalOpen(true);
      setValidationMessage("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="mt-20 bg-[#E5E4ED]">
        <div className="container flex items-center max-md:flex-col justify-between pr-40 bg-transparent">
          <div className=" bg-transparent">
            <img src={Mes} alt="img" className=" bg-transparent" />
          </div>
          <div className=" bg-transparent">
            <h1 className="text-[30px] mb-3 bg-transparent">
              Подпишитесь и будьте в курсе!
            </h1>
            <p className="text-[#7A7687] mb-3 bg-transparent">
              Акции, скидки, распродажи ждут!
            </p>
            <div className=" bg-white mb-6 rounded-3xl justify-between border flex items-center">
              <input
                id="input"
                type="text"
                placeholder="Введите email"
                className="bg-transparent px-5 w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-7 py-3 bg-[#088269] rounded-3xl text-[#F8F7F3] font-bold text-[14px] hover:scale-105 duration-200"
                onClick={handleSubscribe}
              >
                Подписаться
              </button>
            </div>
            {validationMessage && (
              <p className="text-red-500">{validationMessage}</p>
            )}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="bg-transparent">
                Я даю согласие на обработку своих персональных данных.
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterBot />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="flex justify-center items-start mt-[30px] inset-0 fixed z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-green-500 text-white rounded-lg p-1 shadow-lg w-full mx-auto text-center max-w-[400px] h-[80px]">
          <h2 className="text-xl font-bold mb-2">Успех!</h2>
          <p className="mb-4">Ваш email был успешно сохранен.</p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;