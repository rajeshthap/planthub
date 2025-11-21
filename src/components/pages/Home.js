import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card, Form, Carousel, Dropdown, NavDropdown } from 'react-bootstrap';
import Footer from "../footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage from '../Carousel/CarouselImage';
import Green from "../../assets/images/Green.jpg";
import PlantI from "../../assets/images/PlantI.jpg";
import Forest from "../../assets/images/Forest.png";
import HimalayaB from "../../assets/images/HimalayaB.jpg";
import Plastic from "../../assets/images/Plastic.jpg";
import Climate from "../../assets/images/Climate.png";
import Water from "../../assets/images/Water.jpg";
import Sacred from "../../assets/images/Sacred.jpg";
import Urban from "../../assets/images/Urban.webp";
import Treehealth from "../../assets/images/Treehealth.jpg";




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
      image: PlantI,
      alt: "PlantI"
    },
    {
      id: 'urban-greening',
      title: 'Community Forest Protection Program',
      description: 'Working with local communities to protect existing forests from cutting, grazing, and fire hazards.',
      image: Forest,
      alt: "Forest"
    },
    {
      id: 'urban-greening',
      title: ' Himalayan Biodiversity Restoration',
      description: 'Planting native species to support local wildlife, prevent soil erosion, and strengthen the ecosystem.',
      image: HimalayaB,
      alt: "HimalayaB"
    },
    {
      id: 'urban-greening',
      title: 'Plastic-Free Himalayas Mission',
      description: 'Conducting clean-up drives and awareness programs to reduce pollution in forest and trekking areas.',
      image: Plastic,
      alt: "Plastic"
    },
    {
      id: 'urban-greening',
      title: ' Climate Awareness & Youth Workshops',
      description: 'Educating school and college students about climate change, tree conservation, and sustainable living.',
      image: Climate,
      alt: "Climate"

    },
    {
      id: 'urban-greening',
      title: ' Water & Soil Conservation Projects',
      description: 'Building check dams, preventing landslides, and promoting rainwater harvesting to protect the environment.',
      image: Water,
      alt: "Water"
    },
    {
      id: 'urban-greening',
      title: ' Sacred Tree Protection Program',
      description: 'Identifying and preserving old and culturally significant trees in Himalayan communities.',
      image: Sacred,
      alt: "Sacred"
    },
    {
      id: 'urban-greening',
      title: '  Urban Green Corners Initiative',
      description: 'Creating small forests, herbal gardens, and green corners in towns and public spaces.',
      image: Urban,
      alt: "urban"
    },
    {
      id: 'urban-greening',
      title: ' Tree Health & Care Program',
      description: 'Regular maintenance of planted saplings, including watering, mulching, fencing, and monitoring.',
      image: Treehealth,
      alt: "Treehealth"
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
    <>
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
                  src={Forest}
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



        {/* Custom CSS */}

      </div>
      <Footer />
    </>
  );
};

export default Home;