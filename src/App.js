import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "../src/components/custom/style.css";




import Home from '../src/components/pages/Home';
import CarouselImage from './components/Carousel/CarouselImage';
import Footer from '../src/components/footer/Footer'
import ContactUs from './components/Innerpages/ContactUs';
import Donation from './components/Innerpages/Donation';
import Gallery from './components/Innerpages/Gallery';
import MissionVision from './components/Innerpages/MissionVision';
import Organization from './components/Innerpages/Organization';
import OurProject from './components/Innerpages/OurProject';
import OurTeam from './components/Innerpages/OurTeam';
import OurWork from './components/Innerpages/OurWork';
import MainNavbar from './components/topnav/MainNavbar';
import InnerDashBoard from './components/dashboard/InnerDashBoard';
import LeftNav from './components/dashboard/LeftNav';
import "../src/components/custom/custom.css";



function App() {
  const location = useLocation();

  // Paths where NavBar should be hidden
  const hiddenPaths = new Set([
    "/InnerDashBoard",
  ]);

  // Paths where Footer should be hidden
  const hiddenFooter1 = new Set([
    "/Footer",
  ]);

  const shouldHideMainNavbar = hiddenPaths.has(location.pathname);
  const shouldHideFooter1 = hiddenFooter1.has(location.pathname);
  return (

    <>
      {!shouldHideMainNavbar && <MainNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CarouselImage" element={<CarouselImage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
         <Route path="/Donation" element={<Donation/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/MissionVision" element={<MissionVision/>} />
           <Route path="/Organization" element={<Organization/>} />
             <Route path="/OurProject" element={<OurProject/>} />
              <Route path="/OurTeam" element={<OurTeam/>} />
              <Route path="/OurWork" element={<OurWork/>} />
              <Route path="/LeftNav" element={<LeftNav/>} />
              <Route path="/InnerDashBoard" element={<InnerDashBoard/>} />
        
      </Routes>
      {!shouldHideFooter1}
    </>

  );
}

export default App;
