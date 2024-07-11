
// import React, { useState, useEffect } from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
// import { useDropzone } from "react-dropzone";
// import Footer from "../components/home/Footer";

// const PersonalInfoModal = ({
//   isOpen,
//   onClose,
//   currentName,
//   currentSurname,
//   currentPhone,
//   currentEmail,
//   onSave,
//   currentImage
// }) => {
//   const [name, setName] = useState(currentName);
//   const [surname, setSurname] = useState(currentSurname);
//   const [phone, setPhone] = useState(currentPhone);
//   const [email, setEmail] = useState(currentEmail);

//   useEffect(() => {
//     setName(currentName);
//     setSurname(currentSurname);
//     setPhone(currentPhone);
//     setEmail(currentEmail);
//   }, [currentName, currentSurname, currentPhone, currentEmail]);

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ name, surname, phone, email });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[500px] h-auto mx-auto">
//         <button
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-lg font-semibold mb-4">Персональные данные</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Имя*</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Фамилия*</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               value={surname}
//               onChange={(e) => setSurname(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Телефон*</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email*</label>
//             <input
//               type="email"
//               className="w-full p-2 border border-gray-300 rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-[200px] bg-green-700 mt-[10px] text-white p-2 rounded-[20px]"
//           >
//             Добавить
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const UserProfile = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentName, setCurrentName] = useState("Константин");
//   const [currentSurname, setCurrentSurname] = useState("Константинопольский");
//   const [currentPhone, setCurrentPhone] = useState("+7 911 564-86-86");
//   const [currentEmail, setCurrentEmail] = useState("person@mail.ru");
//   const [currentImage, setCurrentImage] = useState(null);

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("userInfo"));
//     if (savedData) {
//       setCurrentName(savedData.name);
//       setCurrentSurname(savedData.surname);
//       setCurrentPhone(savedData.phone);
//       setCurrentEmail(savedData.email);
//       setCurrentImage(savedData.image);
//     }
//   }, []);

//   const toggleModal = () => {
//     setModalIsOpen(!modalIsOpen);
//   };

//   const handleSave = (newData) => {
//     setCurrentName(newData.name);
//     setCurrentSurname(newData.surname);
//     setCurrentPhone(newData.phone);
//     setCurrentEmail(newData.email);
//     setCurrentImage(newData.image);
//     localStorage.setItem("userInfo", JSON.stringify(newData));
//   };

//   const handleDelete = () => {
//     setCurrentName("");
//     setCurrentSurname("");
//     setCurrentPhone("");
//     setCurrentEmail("");
//     setCurrentImage(null);
//     localStorage.removeItem("userInfo");
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/*",
//     onDrop: (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         const base64 = reader.result;
//         setCurrentImage(base64);
//         localStorage.setItem(
//           "userInfo",
//           JSON.stringify({
//             name: currentName,
//             surname: currentSurname,
//             phone: currentPhone,
//             email: currentEmail,
//             image: base64,
//           })
//         );
//       };
//       reader.readAsDataURL(file);
//     },
//   });

//   return (
//     <div>
//       <div className="p-6 bg-gray-50 mt-[20px] w-[1410px] mx-auto">
//         <div className="max-w-[1410px] mx-auto p-6 rounded-lg shadow-md">
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-500">
//                 {currentImage ? (
//                   <img
//                     src={currentImage}
//                     alt="Profile"
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 ) : (
//                   currentName.charAt(0)
//                 )}
//               </div>
//               <div {...getRootProps()} className="absolute bottom-0 right-0">
//                 <input {...getInputProps()} />
//                 <button className="bg-green-500 text-white p-2 rounded-full shadow-md transform translate-x-1/4 translate-y-1/4">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15.232 5.232l3.536 3.536M9 17l-4.5 1.5L6 14m3-3l5.232-5.232a2.828 2.828 0 114 4L13 14m0 0l-3 3m0 0H6v-3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="">
//               <h2 className="text-xl font-semibold ml-[150px] mb-[20px]">
//                 {currentName} {currentSurname}
//               </h2>
//               <div className="flex space-x-2 mt-2 ml-[150px] mb-[20px]">
//                 <a href="#" className="text-gray-500 hover:text-black">
//                   <FaFacebook size={24} />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-black">
//                   <FaTwitter size={24} />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-black">
//                   <FaInstagram size={24} />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-black">
//                   <FaTelegram size={24} />
//                 </a>
//               </div>
//               <button
//                 className="mt-4 ml-[150px] border-2 text-gray-800 px-4 py-2 rounded-[20px] shadow-sm hover:bg-gray-300"
//                 onClick={toggleModal}
//               >
//                 Изменить персональную информацию
//               </button>
//               <button
//                 className="mt-4 ml-[10px] border-2 text-gray-800 px-4 py-2 rounded-[20px] shadow-sm hover:bg-gray-300"
//                 onClick={handleDelete}
//               >
//                 Удалить
//               </button>
//             </div>
//           </div>
//           <div className="mt-[100px] ml-[350px] flex space-x-24">
//             <div>
//               <label className="block text-gray-600">Телефон</label>
//               <div className="flex items-center space-x-2 mt-1">
//                 <span className="text-lg">{currentPhone}</span>
//                 <button className="text-blue-500">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15.232 5.232l3.536 3.536M9 17l-4.5 1.5L6 14m3-3l5.232-5.232a2.828 2.828 0 114 4L13 14m0 0l-3 3m0 0H6v-3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-600">Email</label>
//               <div className="flex items-center space-x-2 mt-1">
//                 <span className="text-lg">{currentEmail}</span>
//                 <button className="text-blue-500">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15.232 5.232l3.536 3.536M9 17l-4.5 1.5L6 14m3-3l5.232-5.232a2.828 2.828 0 114 4L13 14m0 0l-3 3m0 0H6v-3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <PersonalInfoModal
//         isOpen={modalIsOpen}
//         onClose={toggleModal}
//         currentName={currentName}
//         currentSurname={currentSurname}
//         currentPhone={currentPhone}
//         currentEmail={currentEmail}
//         onSave={handleSave}
//       />
//     </div>
//   );
// };

// export default UserProfile;



import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import Footer from "../components/home/Footer";
import PersonalInfoModal from "../pages/modalField";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const UserProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentName, setCurrentName] = useState("Константин");
  const [currentSurname, setCurrentSurname] = useState("Константинопольский");
  const [currentPhone, setCurrentPhone] = useState("+7 911 564-86-86");
  const [currentEmail, setCurrentEmail] = useState("person@mail.ru");
  const [currentImage, setCurrentImage] = useState(null);
  const [modalField, setModalField] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userInfo"));
    if (savedData) {
      setCurrentName(savedData.name);
      setCurrentSurname(savedData.surname);
      setCurrentPhone(savedData.phone);
      setCurrentEmail(savedData.email);
      setCurrentImage(savedData.image);
    }
  }, []);

  const toggleModal = (field = null) => {
    setModalField(field);
    setModalIsOpen(!modalIsOpen);
  };

  const handleSave = (newData) => {
    setCurrentName(newData.name);
    setCurrentSurname(newData.surname);
    setCurrentPhone(newData.phone);
    setCurrentEmail(newData.email);
    setCurrentImage(newData.image);
    localStorage.setItem("userInfo", JSON.stringify(newData));
  };

  const handleDelete = () => {
    setCurrentName("");
    setCurrentSurname("");
    setCurrentPhone("");
    setCurrentEmail("");
    setCurrentImage(null);
    localStorage.removeItem("userInfo");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        setCurrentImage(base64);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            name: currentName,
            surname: currentSurname,
            phone: currentPhone,
            email: currentEmail,
            image: base64,
          })
        );
      };
      reader.readAsDataURL(file);
    },
  });

  return (
    <div>
      <div className="flex ml-[130px] mb-[40px] mt-[20px] my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[18px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[18px]" />
          <p className="text-[18px] font-normal text-[#202020]">Profile</p>
      </div>
      <div className="p-6 bg-gray-50 mt-[20px] w-[1410px] mx-auto">
        <div className="max-w-[1410px] mx-auto p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-500">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  currentName.charAt(0)
                )}
              </div>
              <div {...getRootProps()} className="absolute bottom-0 right-0">
                <input {...getInputProps()} />
                <button className="bg-green-500 text-white p-2 rounded-full shadow-md transform translate-x-1/4 translate-y-1/4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536M9 17l-4.5 1.5L6 14m3-3l5.232-5.232a2.828 2.828 0 114 4L13 14m0 0l-3 3m0 0H6v-3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold ml-[150px] mb-[20px]">
                {currentName} {currentSurname}
              </h2>
              <div className="flex space-x-2 mt-2 ml-[150px] mb-[20px]">
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                  <FaTelegram size={24} />
                </a>
              </div>
              <button
                className="mt-4 ml-[150px] border-2 text-gray-800 px-4 py-2 rounded-[20px] shadow-sm hover:bg-gray-300"
                onClick={() => toggleModal('info')}
              >
                Изменить персональную информацию
              </button>
              <button
                className="mt-4 ml-[10px] border-2 text-gray-800 px-4 py-2 rounded-[20px] shadow-sm hover:bg-gray-300"
                onClick={handleDelete}
              >
                Удалить
              </button>
            </div>
          </div>
          <div className="mt-[100px] ml-[350px] flex space-x-24">
            <div>
              <label className="block text-gray-600">Телефон</label>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-lg">{currentPhone}</span>
                <button className="text-blue-500" onClick={() => toggleModal('phone')}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536M9 17l-4.5 1.5L6 14m3-3l5.232-5.232a2.828 2.828 0 114 4L13 14m0 0l-3 3m0 0H6v-3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-lg">{currentEmail}</span>
                <button className="text-blue-500" onClick={() => toggleModal('email')}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536M9 17l-4.5 1.5L6 14m3-3l5.232-5.232a2.828 2.828 0 114 4L13 14m0 0l-3 3m0 0H6v-3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <PersonalInfoModal
        isOpen={modalIsOpen}
        onClose={() => toggleModal()}
        currentName={currentName}
        currentSurname={currentSurname}
        currentPhone={currentPhone}
        currentEmail={currentEmail}
        onSave={handleSave}
        modalField={modalField}
      />
    </div>
  );
};

export default UserProfile;