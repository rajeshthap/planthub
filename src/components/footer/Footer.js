import React from 'react'
import { Navbar, Nav, Container, Button, Row, Col, Card, Form, Carousel, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="footer-section py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="footer-logo">Youth For Himalayas Trust
              </h5>
              <p>
                Uttarakhand, India
              </p>
              <div className="social-icons">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h6>Quick Links</h6>
              <Nav className="flex-column">
                <Link to="/" spy={true} smooth={true} duration={500} className="nav-link footer-link">Home</Link>
                <Link to="/OurTeam" spy={true} smooth={true} duration={500} className="nav-link footer-link">Our Team</Link>
                <Link to="/MissionVision" spy={true} smooth={true} duration={500} className="nav-link footer-link">Mission & Vision</Link>
                <Link to="/Donation" spy={true} smooth={true} duration={500} className="nav-link footer-link">Donate</Link>
              </Nav>
            </Col>
            <Col md={3} className="mb-4 mb-md-0">
              <h6>Contact Us</h6>
              <p>
                123 Green Street, Eco City<br />
                Dehradun, Uttarakhand 400001<br />
                India<br />
                Email: info@HimalayasTrust.org<br />
                Phone: +91 12345 67890
              </p>
            </Col>
            <Col md={3}>
              <h6>Subscribe to Newsletter</h6>
              <p>Stay updated with our latest projects and initiatives.</p>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Your email" />
                <button className="btn btn-success" type="button">Subscribe</button>
              </div>
            </Col>
          </Row>
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
          <Row>
            <Col className="text-center">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Youth For Himalayas Trust. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
