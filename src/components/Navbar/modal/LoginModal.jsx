import React, { useState, useEffect } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      setFormData(JSON.parse(storedData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setIsLoggedIn(true);
    onClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setFormData({ email: "" });
    setIsLoggedIn(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-80">
          <h2 className="text-xl font-bold mb-4">{isLoggedIn ? "Welcome Back!" : "Login"}</h2>
          {isLoggedIn ? (
            <div>
              <p className="mb-4">Logged in as: {formData.email}</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          )}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default LoginModal;