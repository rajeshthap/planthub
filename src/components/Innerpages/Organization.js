import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Organization = () => {
  return (
    <Container className='py-4 mt-4 pt-container'>
      <Row className=' shadow p-4 rounded bg-white pt-contact '>

        <div className='plant-main-box mt-2'><h2>About the Organization</h2>
          <p>Youth for Himalayas Trust is a community-driven environmental organization dedicated to protecting and restoring the natural beauty of the Himalayan region. Built on the belief that positive change begins with responsible action, our organization works tirelessly to conserve trees, safeguard native plant species, and promote sustainable living among Himalayan communities.</p>
          <p>With the active involvement of youth, volunteers, and local residents, we run plantation drives, forest protection campaigns, and eco-awareness programs that strengthen the fragile mountain ecosystem. Our focus goes beyond planting trees—we ensure their long-term survival through continuous care, monitoring, and community engagement.</p>
          <p>We strive to create strong environmental leaders by educating and empowering the younger generation. Every project we undertake is driven by the values of sustainability, responsibility, and respect for nature.</p>
          <p>At Youth for Himalayas Trust, we envision a future where the Himalayas remain green, healthy, and resilient—protected for generations to come. Together, we are nurturing a legacy of conservation, one plant at a time.</p>



        </div>

      </Row>

    </Container>

  )
}

export default Organization