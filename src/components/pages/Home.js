import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card, Form, Carousel, Dropdown, NavDropdown } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from '../Carousel/CarouselImage';
import Green from "../../assets/images/Green.jpg";





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
      title: 'Green Himalaya Plantation Drive',
      description: 'Large-scale tree plantation campaigns across villages, schools, and hill slopes to restore green cover.',
      image: Green,
      alt: "Green",
    },
    {
      id: 'rural-afforestation',
      title: ' Adopt-a-Plant Initiative',
      description: 'Encouraging individuals, families, and students to adopt a sapling and take responsibility for its growth.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'urban-greening',
      title: 'Community Forest Protection Program',
      description: 'Working with local communities to protect existing forests from cutting, grazing, and fire hazards.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: ' Himalayan Biodiversity Restoration',
      description: 'Planting native species to support local wildlife, prevent soil erosion, and strengthen the ecosystem.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: 'Plastic-Free Himalayas Mission',
      description: 'Conducting clean-up drives and awareness programs to reduce pollution in forest and trekking areas.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: ' Climate Awareness & Youth Workshops',
      description: 'Educating school and college students about climate change, tree conservation, and sustainable living.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: ' Water & Soil Conservation Projects',
      description: 'Building check dams, preventing landslides, and promoting rainwater harvesting to protect the environment.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: ' Sacred Tree Protection Program',
      description: 'Identifying and preserving old and culturally significant trees in Himalayan communities.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: '  Urban Green Corners Initiative',
      description: 'Creating small forests, herbal gardens, and green corners in towns and public spaces.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
     {
      id: 'urban-greening',
      title: ' Tree Health & Care Program',
      description: 'Regular maintenance of planted saplings, including watering, mulching, fencing, and monitoring.',
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


      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container fluid className='p-0'>

          <CarouselImage />

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
              <h2 className="section-title">About Us –Youth for Himalayas Trust</h2>
              <p className="section-subtitle">
                Youth for Himalayas Trust is a dedicated environmental initiative committed to protecting, nurturing, and restoring the natural heritage of the Himalayan region. We believe that every plant, tree, and ecosystem plays a vital role in preserving the fragile balance of our mountains.
              </p>
              <p>
                Our mission is simple yet powerful — <b>to inspire youth and local communities to take responsibility for nature</b>, beginning with small but impactful actions like planting and caring for saplings. Each plant we nurture represents our promise to safeguard the Himalayas for future generations.
                Through awareness programs, community participation, plantation drives, and sustainable development activities, the Trust works tirelessly to promote ecological conservation.
              </p>
              <p>
                With the energy of the youth and the wisdom of the mountains, we aim to create a greener, healthier, and more resilient Himalayan environment.
                Join us in our journey as we protect nature, one plant at a time.
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



      {/* Custom CSS */}

    </div>
  );
};

export default Home;