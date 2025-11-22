import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import "../../assets/css/Mission.css"
import Mission from "../../assets/images/banner3.jpeg"
const MissionVision = () => {
  return (
    <>
      <div className="company-banner">
  <div className="site-breadcrumb-wpr">
    <h2 className="breadcrumb-title">Mission & Vision</h2>

    <ul className="breadcrumb-menu clearfix" type="none">
      <li>
        <Link to="/" className="breadcrumb-link">Home</Link>
      </li>

      <li className="px-2">/</li>

      <li>Mission & Vision</li>
    </ul>
  </div>
</div>
      <Container>
        <Row className=' shadow p-4 rounded bg-white pt-container '>
          <Col lg={4} md={4} sm={12}>
          <img src={Mission} alt="vission" className='img-fluid mission-img'/>
          </Col>
 <Col lg={8} md={8} sm={12} className='plant-main-box mt-2'>
<h2>Mission & Vision</h2>
            <h5 className='pt-4'><b>🌱 Our Mission</b></h5>
            <p>Our mission is to <b>protect, restore, and preserve the Himalayan environment</b> by empowering youth and communities to take meaningful action. We work towards increasing green cover, saving native plant species, promoting sustainable practices, and raising awareness about the importance of environmental conservation.</p>
            <p>Through plantation drives, forest protection programs, and eco-awareness initiatives, we aim to create long-lasting positive change—one plant, one village, and one step at a time.</p>

            <h5><b>🌄 Our Vision</b></h5>
            <p>Our vision is to build a <b>green, healthy, and sustainable Himalayan region </b>where every plant is valued, every forest is protected, and every citizen is environmentally conscious.</p>
            <p>We aspire to create a future where the youth lead the movement for conservation, ensuring that the Himalayas remain vibrant, resilient, and thriving for generations to come.
              We envision communities living in harmony with nature, working together to protect the mountains that protect us.</p>

     
 </Col>
          

        </Row>

   </Container>
      <Footer />
    </>
  )
}

export default MissionVision