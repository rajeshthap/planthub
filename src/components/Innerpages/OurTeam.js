import React from "react";
// import css

// Example images — replace with your own

import "../../assets/css/TeamCard.css";
import { Container, Row } from "react-bootstrap";
import Paras from "../../assets/images/paras.png";
import Pankaj from "../../assets/images/pankaj.png";
import Vijay from "../../assets/images/vijay.png";
import Parshant from "../../assets/images/surendra1.png";
import surendra2 from "../../assets/images/surendra2.png";
import Footer from "../footer/Footer";
import "../../assets/css/Mission.css";
import Arun from "../../assets/images/arun.png";
import { Link } from "react-router-dom";
import Bagwati from "../../assets/images/bhagwati.png";
import ADv from "../../assets/images/jaivardhan.png";
import Grish from "../../assets/images/grish.png";
import Hem from "../../assets/images/hem.png";
import Siddharath from "../../assets/images/siddharth.png";
import Vikram from "../../assets/images/vikarm.png";
import parshantimg from "../../assets/images/prashant.png";
import Rajat from "../../assets/images/rajat.png";
import Manish from "../../assets/images/manish.png";
import Structure from "../../assets/images/structure.png";

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
      name: "MR. PANKAJ SATI",
      role: "Educational Advisor",
    },
    {
      img: Parshant,
      name: "DR. SURENDRASINGH",
      role: "Legal Adviso",
    },
  ];
  const teammeet = [
    {
      img: Arun,
      name: "MR. Arun Sharma",
      role: "Board Of Governor ",
    },
    {
      img: Bagwati,
      name: "MR. Bhagwati Prasad",
      role: "Board Of Governor",
    },
  ];

  const teams = [
    {
      img: ADv,
      name: "ADV. JAIVARDHAN KANDPAL",
      role: "Senior Advisor – Legal Systems, Governance & Strategic Affairs ",
    },

    {
      img: Grish,
      name: "DR. GIRISH SEMWAL",
      role: "Senior Advisor – Strategic Research & Innovation",
    },
    {
      img: Hem,
      name: "MR. HEM PANDEY",
      role: "Senior Advisor – Eco-Tourism, Culture & Sustainable Travel Systems",
    },
    {
      img: Siddharath,
      name: "DR. SIDDHARTH PATNI",
      role: "Senior Advisor – Public Health, Medical Outreach & Primary Care",
    },
  ];

  const Excutive = [
    {
      img: Vikram,
      name: "MR. VIKRAM BISHT",
      role: "Director, Field Operations & Community Outreach ",
    },

    {
      img: parshantimg,
      name: "MR. PRASHANT SINGH AITHANI",
      role: "Executive Director,Strategy & Impact",
    },
    {
      img: Vijay,
      name: "MR. VIJAY KUMAR AGGARWAL",
      role: "Director, Strategic Alliances & Global Philanthropy",
    },
    {
      img: Rajat,
      name: "MR. RAJAT ASWAL",
      role: "Associate Director, Operations, Logistics & Field Governance",
    },
    {
      img: Manish,
      name: "MR. MANISH JOSHI",
      role: "Associate Director, Digital Ecosystems & Future Tech",
    },
  ];
  const Departments = [
    {
      name: "HEALTH EQUITY & MEDICAL SUPPORT COUNCIL",
      roles: ["Dr. Nishi Gilhotra", "Dr. Y.S. Thapaliyal", "Dr. Saurabh Kumar"],
    },

    {
      name: "ECONOMIC GROWTH & HIMALAYAN INDUSTRY COUNCIL",
      roles: ["Ambit Mailana", "Lalit Sharma", "Sarwjeet Ojha"],
    },

    {
      name: "GOVERNANCE, POLICY & LEGAL SYSTEMS COUNCIL",
      roles: ["Adv. Anuj Sharma", "Adv. Akshay Latwal", "Adv. Ankur Garg"],
    },

    {
      name: "STRATEGIC COMMUNICATIONS & PUBLIC NARRATIVE DIVISION",
      roles: ["Anchal Pant", "Rishabh Bameta", "Satyam Kumar"],
    },
    {
      name: "SOLAR, HYDRO & CLIMATE ENERGY DEVELOPMENT BUREAU",
      roles: ["Chandrakant Rawat", "Nitesh Chauhan"],
    },
    {
      name: "MOUNTAIN INFRASTRUCTURE & TECHNICAL ADVISORY CELL",
      roles: ["Vijay Kumar Aggarwal", "Deepak Bhatt"],
    },
    {
      name: "ECO-TOURISM, CULTURE & SUSTAINABLE TRAVEL COUNCIL",
      roles: ["Deep Chandra Pandey"],
    },
    {
      name: "MOUNTAIN FARMING & SUSTAINABLE AGRICULTURE DIVISION",
      roles: ["Chandar Rawat"],
    },
  ];

  return (
    <>
      <div className="company-banner-mission">
        <div className="site-breadcrumb-wpr">
          <h2 className="breadcrumb-title">Our Team</h2>

          <ul className="breadcrumb-menu clearfix" type="none">
            <li>
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
            </li>

            <li className="px-2">/</li>

            <li>Our Team</li>
          </ul>
        </div>
      </div>
      <Container className="py-4 pt-container">
        <Row className=" shadow p-1 rounded bg-white">
          <div className="our-team-heading mt-2">
            <h2>Our Team</h2>
            <h1>Youth For Himalayas</h1>

            <div className="text-center heading-team">
              Meet Our Board Of Trustees
            </div>

            <div className="team-container">
              {team.map((member, index) => (
                <div className="team-card" key={index}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo"
                  />

                  <h3 className="team-name">{member.name}</h3>

                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Row>
        <Row className=" shadow p-1 rounded bg-white">
          <div className="our-team-heading mt-2">
            <div className="text-center heading-team">
              Meet Our Board Of Governors{" "}
            </div>

            <div className="team-container">
              {teammeet.map((member, index) => (
                <div className="team-card" key={index}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo"
                  />

                  <h3 className="team-name">{member.name}</h3>

                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Row>

        <Row className=" shadow p-1 rounded bg-white">
          <div className="our-team-heading mt-2">
            <div className="text-center heading-team">
              Meet Our Board Of Advisors{" "}
            </div>

            <div className="team-container">
              {teams.map((member, index) => (
                <div className="team-card" key={index}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo"
                  />

                  <h3 className="team-name">{member.name}</h3>

                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Row>

        <Row className=" shadow p-1 rounded bg-white">
          <div className="our-team-heading mt-2">
            <div className="text-center heading-team">
              Meet Our Board Excutive Team{" "}
            </div>

            <div className="team-container">
              {Excutive.map((member, index) => (
                <div className="team-card" key={index}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="team-photo"
                  />

                  <h3 className="team-name">{member.name}</h3>

                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Row>

        <Row className="shadow p-1 rounded bg-white">
          <div className="our-team-heading mt-2">
            <div className="text-center heading-team">
              Meet Our Departments Experts
            </div>

            <div className="team-container">
              {Departments.map((member, index) => (
                <div className="team-card" key={index}>
                  {/* SHOW IMG ONLY IF EXISTS */}
                  {member.img && (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-photo"
                    />
                  )}

                  <h3 className="team-name">{member.name}</h3>

                  {/* MULTIPLE ROLES */}
                  {member.roles ? (
                    <p className="team-role">
                      {member.roles.map((r, i) => (
                        <span key={i} className="d-block">
                          {r}
                        </span>
                      ))}
                    </p>
                  ) : (
                    <p className="team-role">
                      <span>{member.role}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Row>

        <div className="text-center">
          <div className="our-team-heading mt-2 text-center">
            <div className="text-center heading-team">
              Meet Our Board Excutive Team{" "}
            </div>
          </div>
          <img src={Structure} alt="img" className="img-fluid "></img>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default OurTeam;
