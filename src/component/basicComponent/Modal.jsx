import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-red-800 text-2xl m-16">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
