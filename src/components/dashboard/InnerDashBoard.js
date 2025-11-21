import React, { useState, useEffect } from "react";
import {
  Container,
 
} from "react-bootstrap";


import "../../assets/css/LeftNav.css";



import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import LeftNav from "./LeftNav";
import HeaderTop from "./HeaderTop";



const InnerDashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <LeftNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
      
        <HeaderTop toggleSidebar={toggleSidebar} />


        {/* Dashboard Body */}
        <Container fluid className="dashboard-body">
         <div className="br-box-container">

            hello
         </div>

          {/* Existing Table + Quick Actions (same layout) */}
        </Container>
      </div>
    </div>
  );
};

export default InnerDashBoard;
