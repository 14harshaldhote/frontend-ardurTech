import React, { useEffect, useRef } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div ref={modalRef} className="bg-white p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-600 text-2xl">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
