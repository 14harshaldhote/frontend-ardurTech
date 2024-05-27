// import React from "react";
// import { Link } from "react-router-dom";
// // import logo from "../assets/logo.png";
// import logo from '../../assets/images/logo.png';



// const Header = () => {
//   return (
//     <header className="bg-gray-800/80 text-white p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
//         {/* <h1 className="text-2xl">Service Based Web Software</h1> */}
//       </div>
//       <nav className="flex space-x-4">
//         <Link to="/" className="hover:text-gray-400">
//           Home
//         </Link>
//         <Link to="/login" className="hover:text-gray-400">
//           Login
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Modal from "../basicComponent/Modal";
import Login from "../basicComponent/Login";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
        {/* <h1 className="text-2xl">Service Based Web Software</h1> */}
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-orange-900">
          Home
        </Link>
        <button onClick={openModal} className="hover:text-orange-900">
          Login
        </button>
      </nav>
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <Login />
      </Modal>
    </header>
  );
};

export default Header;
