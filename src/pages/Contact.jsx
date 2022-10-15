import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row, Col,Form ,FormGroup,Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'
import "../styles/contact.css"

const socialLinks = [
    {
      url: "#",
      icon: "ri-facebook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];
const Contact = () => {
  return (
    <Helmet>
        <CommonSection title="contact" />
        <section>
            <Container>
                <Row>
                    <Col lg="7" md="7">
                        <h6 className='fw-bold mb-4'>Get In Touch</h6>

                        <Form>
                            <FormGroup className='contact__form'>
                                <Input type="text" placeholder='Yout Name'/>
                            </FormGroup>
                            <FormGroup className='contact__form'>
                                <Input type="email" placeholder='Email'/>
                            </FormGroup>
                            <FormGroup className='contact__form'>
                                <textarea
                                rows="5"
                                 placeholder='Message' 
                                 className='textarea'
                                 ></textarea>
                            </FormGroup>
                            <button className=' btn contact__btn' type='submit'>Send Message</button>
                        </Form>
                    </Col>
                    <Col lg="5" md="5" >
                        <div className="contact__info">
                            <h6 className='fw-bold '>Contact Information</h6>
                            <p className='section__description  mb-0'> Lorem ipsum dolor sit amet.</p>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className='fs-6 mb-0'>Phone:</h6>
                                <p className='section__description mb-0'>+012334568</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className='fs-6 mb-0'>Phone:</h6>
                                <p className='section__description mb-0'>example@gmail.com</p>
                            </div>
                            <h6 className='fw-bold'>Follow Us</h6>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                {
                                    socialLinks.map((item,index) => (
                                        <Link to={item.url} key={index} className="social__link-icon">
                                        <i className={item.icon}></i>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Contact
