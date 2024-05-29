import React, { useState } from "react";
import Modal from "../component/basicComponent/Modal";
import Login from "../component/basicComponent/Login";

const LoginPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalVisible(true)}>Open Login Modal</button>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <Login onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default LoginPage;
