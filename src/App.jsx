// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./component/basicComponent/Header";
// import Routes from "./Routes/Router";
// import Footer from "./component/basicComponent/Footer";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes />
//       <Footer />
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/basicComponent/Header";
import Footer from "./component/basicComponent/Footer";
import RouterComponent from "./Routes/Router";
// import "./assets/styles/styles.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <RouterComponent />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
