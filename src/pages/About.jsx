import React from 'react'
import Helmet  from "../components/Helmet/Helmet"
import CommonSection from '../components/Ui/CommonSection'
import AboutSection from '../components/Ui/AboutSection'
import {Container ,Row , Col} from "reactstrap"
import BecomeDriverSection from "../components/Ui/BecomeDriverSection"
import driverImg from "../assets/all-images/drive.jpg"
import OurMembers from '../components/Ui/OurMembers'
import "../styles/about.css"
const About = () => {
  return (
    <Helmet>
      <CommonSection title='About Us' />
      <AboutSection aboutClass="aboutPage" />

      <section className='about__page-section'>
        <Container >
          <Row>
            <Col lg="6" md="6" sm="12" >
              <div className="about__page-img">
                <img src={driverImg} alt="" className='w-100 rounded-3' />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className='section__tilte'>We Are Committed To Provide Safe Ride Soultion</h2>
                <p className='section__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, excepturi? Pariatur voluptas, molestias quibusdam doloribus sequi perferendis quae, veritatis ut ex et cum rem impedit placeat labore rerum quas ad.</p>
                <p className='section__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, excepturi? Pariatur voluptas, molestias quibusdam doloribus sequi perferendis quae, veritatis ut ex et cum rem impedit placeat labore rerum quas ad.</p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'>
                    <i className='ri-phone-line'></i>
                  </span>
                  
                  <div>
                    <h6 className='section__subtilte'>Need Any Help?</h6>
                    <h4>+00123456789</h4>
                    </div>
                </div>
              </div> 
            </Col>
          </Row>
        </Container>

      </section>
      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center' >
              <h6 className='section__subtilte'>Experis</h6>
              <h2 className='section__title'>Our Members</h2>
            
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    
    </Helmet>
  )
}

export default About