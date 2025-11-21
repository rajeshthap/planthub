import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "../../assets/css/Navbar.css";


function MainNavbar() {
  return (
    <BsNavbar expand="lg" fixed="top" className="custom-navbar bg-dark">
      <Container>
        <BsNavbar.Brand href="/" className="brand-logo text-black fw-bold">
          <div className="pt-logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to="/Organization" className="nav-link text-black">
              Organization
            </Link>
            <Link
              to="/Donation"
              className="nav-link px-3 py-1 rounded pt-dount-btn"
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Donation
            </Link>
            <Link to="/MissionVision" className="nav-link text-black">
              Mission & Vision
            </Link>
            <Link to="/OurProject" className="nav-link text-black">
              Our Project
            </Link>
            <Link to="/OurTeam" className="nav-link text-black">
              Our Team
            </Link>
            <Link to="/OurWork" className="nav-link text-black">
              Our Work
            </Link>
            <Link to="/Gallery" className="nav-link text-black">
              Gallery
            </Link>
            <Link to="/ContactUs" className="nav-link text-black">
              Contact Us
            </Link>

            {/* Social Icons */}
            <div className="d-flex align-items-center ms-3">
              <a href="https://facebook.com" className="text-black me-2">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-black me-2">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-black me-2">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-black me-2">
                <FaLinkedin size={20} />
              </a>
            </div>
            <Link to="/InnerDashBoard" className="nav-link text-black pt-login">
              Login
            </Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default MainNavbar;
