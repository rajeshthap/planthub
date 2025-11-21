import React from 'react'
import { Container, Row } from 'react-bootstrap'

const MissionVision = () => {
  return (
    <Container className='py-4 mt-4 pt-container'>
      <Row className=' shadow p-4 rounded bg-white pt-contact '>

        <div className='plant-main-box mt-2'><h2>Mission & Vision</h2>
          <h5 className='pt-4'><b>🌱 Our Mission</b></h5>
          <p>Our mission is to <b>protect, restore, and preserve the Himalayan environment</b> by empowering youth and communities to take meaningful action. We work towards increasing green cover, saving native plant species, promoting sustainable practices, and raising awareness about the importance of environmental conservation.</p>
          <p>Through plantation drives, forest protection programs, and eco-awareness initiatives, we aim to create long-lasting positive change—one plant, one village, and one step at a time.</p>

          <h5><b>🌄 Our Vision</b></h5>
          <p>Our vision is to build a <b>green, healthy, and sustainable Himalayan region </b>where every plant is valued, every forest is protected, and every citizen is environmentally conscious.</p>
          <p>We aspire to create a future where the youth lead the movement for conservation, ensuring that the Himalayas remain vibrant, resilient, and thriving for generations to come.
            We envision communities living in harmony with nature, working together to protect the mountains that protect us.</p>

        </div>

      </Row>

    </Container>
  )
}

export default MissionVision