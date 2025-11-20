import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card, Form, Carousel, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // State for donation form
  const [donationAmount, setDonationAmount] = useState('500');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    pan: ''
  });

  // Handle donation amount change
  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  // Handle custom amount change
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('');
  };

  // Handle donor info change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of ₹${donationAmount || customAmount}!`);
  };

  // Stats data
  const statsData = [
    { number: '1M+', label: 'Trees Planted' },
    { number: '500+', label: 'Villages Covered' },
    { number: '100K+', label: 'Lives Impacted' },
    { number: '10+', label: 'Years of Service' }
  ];

  // Projects data with IDs for submenu
  const projectsData = [
    {
      id: 'green-schools',
      title: 'Green Schools',
      description: 'Creating green spaces in schools to educate children about environmental conservation.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'rural-afforestation',
      title: 'Rural Afforestation',
      description: 'Planting trees in rural areas to improve livelihoods and restore ecosystems.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'urban-greening',
      title: 'Urban Greening',
      description: 'Transforming urban spaces with greenery to combat pollution and improve air quality.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  // Testimonials data
  const testimonialsData = [
    {
      name: 'Rajesh Sharma',
      role: 'Farmer, Rajasthan',
      content: 'SankalpTaru helped us plant fruit trees that now provide additional income for our family.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'School Teacher, Gujarat',
      content: 'The Green Schools program has transformed our campus and educated students about environmental conservation.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Amit Kumar',
      role: 'Corporate Volunteer, Mumbai',
      content: 'Participating in tree plantation drives with SankalpTaru has been a rewarding experience for our team.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" fixed="top" className="custom-navbar bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo text-black fw-bold">
            SankalpTaru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="home" spy={true} smooth={true} duration={500} className="nav-link text-black">
                Home
              </Link>
              <Link to="about" spy={true} smooth={true} duration={500} className="nav-link text-black">
                About Us
              </Link>

              {/* Projects with Submenu */}
              <NavDropdown title="Projects" id="projects-nav-dropdown" className="text-black">
                <NavDropdown.Item as={Link} to="projects" spy={true} smooth={true} duration={500}>
                  All Projects
                </NavDropdown.Item>
                {projectsData.map((project) => (
                  <NavDropdown.Item
                    as={Link}
                    to={project.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    key={project.id}
                  >
                    {project.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Link to="testimonials" spy={true} smooth={true} duration={500} className="nav-link text-black">
                Testimonials
              </Link>
              <Link to="donate" spy={true} smooth={true} duration={500} className="nav-link text-black">
                Donate
              </Link>

              {/* Social Media Icons */}
              <div className="d-flex align-items-center ms-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black me-3 social-icon">
                  <FaFacebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black me-3 social-icon">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black me-3 social-icon">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black me-4 social-icon">
                  <FaLinkedin size={20} />
                </a>

                {/* User Profile Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="user-dropdown" className="text-black p-0 user-dropdown">
                    <FaUserCircle size={28} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/donations">My Donations</Dropdown.Item>
                    <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Button variant="outline-light" className="ms-3 donate-btn">
                Donate Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={12} className="hero-content">
              <h1 className="hero-title">Plant a Tree, Grow a Future</h1>
              <p className="hero-subtitle">
                Join us in our mission to create a greener planet by planting trees
                and supporting sustainable environmental initiatives.
              </p>
              <div className="hero-buttons">
                <Link to="donate" spy={true} smooth={true} duration={500}>
                  <Button variant="success" className="me-3 donate-btn-lg">
                    Donate Now
                  </Button>
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500}>
                  <Button variant="outline-light" className="learn-more-btn">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Planting trees"
                className="img-fluid rounded about-image"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title">About SankalpTaru</h2>
              <p className="section-subtitle">
                SankalpTaru is a non-profit organization dedicated to environmental conservation
                through tree plantation and sustainable practices.
              </p>
              <p>
                Founded in 2013, we have planted over 1 million trees across India, creating
                green spaces, restoring ecosystems, and empowering communities. Our unique approach
                combines technology with grassroots efforts to ensure every sapling thrives.
              </p>
              <p>
                We work with rural communities, schools, and corporate partners to create a greener,
                healthier planet for future generations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row>
            {statsData.map((stat, index) => (
              <Col md={6} lg={3} className="mb-4 mb-lg-0" key={index}>
                <div className="stat-box text-center">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Our Projects</h2>
          <Row>
            {projectsData.map((project, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="project-card h-100" id={project.id}>
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Button variant="outline-success">Learn More</Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">What People Say</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Carousel indicators={false} className="testimonial-carousel">
                {testimonialsData.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <Card className="testimonial-card">
                      <Card.Body className="text-center">
                        <Card.Img
                          src={testimonial.image}
                          className="testimonial-img mb-3"
                          roundedCircle
                        />
                        <Card.Text className="testimonial-content">
                          "{testimonial.content}"
                        </Card.Text>
                        <Card.Title className="testimonial-name">{testimonial.name}</Card.Title>
                        <Card.Subtitle className="testimonial-role">{testimonial.role}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Make a Donation</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="donation-card">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Select Donation Amount</Form.Label>
                          <div className="donation-amounts">
                            {[100, 250, 500, 1000, 2500].map((amount) => (
                              <Button
                                key={amount}
                                variant={donationAmount === amount.toString() ? "success" : "outline-success"}
                                onClick={() => handleAmountChange(amount.toString())}
                              >
                                ₹{amount}
                              </Button>
                            ))}
                          </div>
                          <Form.Control
                            type="number"
                            placeholder="Enter custom amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="mt-2"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Donation Impact</Form.Label>
                          <div className="donation-impact">
                            <p>₹100 plants 1 tree</p>
                            <p>₹500 plants 5 trees</p>
                            <p>₹1000 plants 10 trees</p>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <h4 className="mb-3">Donor Information</h4>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={donorInfo.name}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={donorInfo.email}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={donorInfo.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>PAN Number (for tax benefits)</Form.Label>
                          <Form.Control
                            type="text"
                            name="pan"
                            value={donorInfo.pan}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="text-center mt-4">
                      <Button variant="success" type="submit" size="lg" className="donate-btn-lg">
                        Donate Now
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="footer-logo">SankalpTaru</h5>
              <p>
                Creating a greener planet through tree plantation and sustainable environmental initiatives.
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
                <Link to="home" spy={true} smooth={true} duration={500} className="nav-link footer-link">Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="nav-link footer-link">About Us</Link>
                <Link to="projects" spy={true} smooth={true} duration={500} className="nav-link footer-link">Projects</Link>
                <Link to="donate" spy={true} smooth={true} duration={500} className="nav-link footer-link">Donate</Link>
              </Nav>
            </Col>
            <Col md={3} className="mb-4 mb-md-0">
              <h6>Contact Us</h6>
              <p>
                123 Green Street, Eco City<br />
                Mumbai, Maharashtra 400001<br />
                India<br />
                Email: info@sankalptaru.org<br />
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
                &copy; {new Date().getFullYear()} SankalpTaru. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Custom CSS */}

    </div>
  );
};

export default Home;