import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import HeroSlider from '../components/Ui/HeroSlider'
import { Container , Row,Col } from 'reactstrap'
import FindCarForm from '../components/Ui/FindCarForm'
import AboutSection from '../components/Ui/AboutSection'
import ServicesList from '../components/Ui/ServicesList'
import carData from "../assets/data/carData"
import CarItem from '../components/Ui/CarItem'
import BecomeDriverSection from '../components/Ui/BecomeDriverSection'
import Testimonial from '../components/Ui/Testimonial'
import BlogList from '../components/Ui/BlogList'




const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============== Hero Section ============== */ }
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container >
            <Row className='form__row'>
              <Col lg='4' md='4'>
                <div className="find__cars-left">
                  <h2>Find Your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md='8' sm='12'>
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* aboute seCTION  */}
      <AboutSection />

      {/* service section  <ServicesList /> */ }

      <section>
        <Container>
          <Row>
            <Col lg="12" sm="6"className='mb-5 text-center' >
              <h6 className='section__subtilte'>See Our</h6>
              <h2 className='section__title'>Pupular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* car offer section*/}
      <section>
        <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h6 className='section__subtilte'>Come With</h6>
            <h2 className='section__title'>Hot Offers</h2>
          </Col>
          {
            carData.slice(0,6).map(item => (
              <CarItem item={item} key={item.id} />
            ))
          }
        </Row>
        </Container>
      </section>
      {/* Become a Driver Section  */}
      <BecomeDriverSection />

      {/* Testimonial Section*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-4 text-center'>
              <h6 className='section__subtilte'>Our cliets says</h6>
              <h2 className='section__title '>Testimonial</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>


      {/* Blog Section */ }
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-4 text-center'>
              <h6 className='section__subtilte'>Esplore Our Blogs  </h6>
              <h2 className='section__title '>Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home