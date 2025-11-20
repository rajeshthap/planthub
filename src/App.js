import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "../src/components/custom/style.css";




import Home from '../src/components/pages/Home';
import Footer from '../src/components/footer/Footer'
import NavBar from '../src/components/topnav/Navbar'




function App() {
  const location = useLocation();

  // Paths where NavBar should be hidden
  const hiddenPaths = new Set([
    "/EmpDashBoard",
  ]);

  // Paths where Footer should be hidden
  const hiddenFooter1 = new Set([
    "/",
  ]);

  const shouldHideNavbar = hiddenPaths.has(location.pathname);
  const shouldHideFooter1 = hiddenFooter1.has(location.pathname);
  return (

    <>
      {!shouldHideNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
      {!shouldHideFooter1 && <Footer />}
    </>

  );
}

export default App;
