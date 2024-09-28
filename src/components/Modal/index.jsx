import React, { useState } from "react";

const Modal = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6  w-[37rem] h-48">
          <div className="flex justify-center text-3xl font-bold mb-4">
            Todo List
          </div>
          <div className="flex justify-center items-center relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-full bg-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add your task"
            />
            <button className="text-white absolute right-0 rounded-3xl text-sm border-2 px-5 p-3 bg-[#EA7260]">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
