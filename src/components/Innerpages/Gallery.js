import React, { useState } from "react";
import "../../assets/css/Innerpages.css";
import Footer from "../footer/Footer";
import Plant1 from "../../assets/images/Plant1.jpg";
import Plant2 from "../../assets/images/Plant2.jpg";
import Plant3 from "../../assets/images/Plant3.jpg";
import Plant4 from "../../assets/images/Plant4.jpg";
import Plant5 from "../../assets/images/Plant5.png";
import Plant6 from "../../assets/images/Plant6.jpg";
import Plant7 from "../../assets/images/Plant7.jpg";
import Plant8 from "../../assets/images/Plant8.webp";
import Plant9 from "../../assets/images/Plant9.webp";
import Plant10 from "../../assets/images/Plant10.jpg";
import Plant11 from "../../assets/images/Plant11.jpg";
import Plant12 from "../../assets/images/Plant12.jpg";
import Plant13 from "../../assets/images/Plant13.jpg";
import Plant14 from "../../assets/images/Plant14.jpg";
import Plant15 from "../../assets/images/Plant15.jpg";
import Plant16 from "../../assets/images/Plant16.jpg";
import Plant17 from "../../assets/images/Plant17.jpg";
import Plant18 from "../../assets/images/Plant18.webp";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";



const Gallery = () => {
  const [activeTab, setActiveTab] = useState("plantation");


  const tabs = [
    { id: "plantation", label: "Plantation" },
    { id: "agriculture", label: "Agriculture" },
    { id: "events", label: "Events" }
  ];


  const images = {
    plantation: [Plant1, Plant2, Plant3, Plant4, Plant5, Plant6, Plant7],
    agriculture: [Plant8, Plant9, Plant10, Plant11, Plant12, Plant13],
    events: [Plant14, Plant15, Plant16, Plant17, Plant18]
  };


  return (
    <>
     <div className="company-banner">
          <div className="site-breadcrumb-wpr">
            <h2 className="breadcrumb-title">Gallery</h2>
        
            <ul className="breadcrumb-menu clearfix" type="none">
              <li>
                <Link to="/" className="breadcrumb-link">Home</Link>
              </li>
        
              <li className="px-2">/</li>
        
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      <Container className="py-4 pt-container">
        <div className="gallery-container">
          <h2 className="gallery-title">Plantation & Agricultural Gallery</h2>


          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>


          <div className="gallery-grid">
            {images[activeTab].map((src, index) => (
              <div key={index} className="gallery-card">
                <img src={src} alt={`${activeTab} ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};


export default Gallery;