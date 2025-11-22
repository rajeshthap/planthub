import React from "react";
 // import css

// Example images — replace with your own


import "../../assets/css/TeamCard.css"
import { Container, Row } from "react-bootstrap";
import Paras from "../../assets/images/paras.png";
import Pankaj from "../../assets/images/pankaj.png";
import Vijay from "../../assets/images/vijay.png";
import Parshant from "../../assets/images/surendra1.png";
import surendra2 from "../../assets/images/surendra2.png";
import Footer from "../footer/Footer";
import "../../assets/css/Mission.css"
import { Link } from "react-router-dom";

function OurTeam() {
  const team = [
    {
      img: Paras,
      name: "MR. PARAS TIWARI",
      role: "Secretary",
    },
    {
      img: surendra2,
      name: "MR. PRASHANT SINGH AITHANI",
      role: "Chairman",
    },
    {
      img: Vijay,
      name: "MR. VIJAY KUMAR AGGARWAL",
      role: "Treasurer",
    },
     {
      img: Pankaj,
      name: "MR. PANKAJSATI",
      role: "EducationalAdvisor",
    },
     {
      img: Parshant,
      name: "DR. SURENDRASINGH",
      role: "Legal Adviso",
    },
    
  ];

  return (
 <>
    <div className="company-banner-mission">
  <div className="site-breadcrumb-wpr">
    <h2 className="breadcrumb-title">Our Team</h2>

    <ul className="breadcrumb-menu clearfix" type="none">
      <li>
        <Link to="/" className="breadcrumb-link">Home</Link>
      </li>

      <li className="px-2">/</li>

      <li>Our Team</li>
    </ul>
  </div>
</div>
      <Container className='py-4 mt-4 pt-container'>
      <Row className=' shadow p-4 rounded bg-white pt-contact-team '>
 
        <div className=' mt-2'><h2>Our Team</h2>
           <div className="team-container">
      {team.map((member, index) => (
        <div className="team-card" key={index}>
          <img src={member.img} alt={member.name} className="team-photo" />

          <h3 className="team-name">{member.name}</h3>

          <p className="team-role">{member.role}</p>
        </div>
      ))}
    </div>
       
        </div>
 
      </Row>
 
    </Container>
   <Footer />
  </>
  );
}

export default OurTeam;
