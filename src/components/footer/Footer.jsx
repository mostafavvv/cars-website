import React from 'react'
import {Link } from "react-router-dom"
import { Container , Row,Col , ListGroup , ListGroupItem } from 'reactstrap'
import "../../styles/footer.css"

const quickLinks = [
  { 
    path:"/about",
    display:"About"
  },
  { 
    path:"#",
    display:"Privacy Policy"
  },
  { 
    path:"/cars",
    display:"Car Listing"
  },
  { 
    path:"/blogs",
    display:"Blog "
  },
  { 
    path:"/contact",
    display:"Contact"
  },
]

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row >
          <Col lg='4' md='4' sm='12'>

          <div className="logo footer__logo">
              <h1>
                <Link to="/home"  className='d-flex align-items-center gap-3'>
                <i class="ri-car-fill"></i>
                <span>Rent Car <br/> Service</span>
                </Link>
              </h1>
            </div>

          
          <p className='footer__logo-content'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Doloremque quasi error
            dolorem harum corrupti sed consectetur aut
            aspernatur impedit perspiciatis quaerat autem
            ab recusandae nisi voluptatum cumque quo magni
            velit incidunt, optio laborum! Ipsa natus corporis ducimus incidunt saepe minima!
          </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">
                Quick Links
              </h5>
             <ListGroup>
              {
                quickLinks.map((item,index) => (
                  <ListGroupItem key={index} className="p-0  mt-3 quick__link">
                    <Link to ={item.path}>
                    {item.display}
                    </Link>

                  </ListGroupItem>
                ))
              }
             </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6' >
            <div className="mb-4">
              <h5 className='footer__link-title mb-4'>Head Office  </h5>
              <p className='office__info'>
                 6 October ,Egypt
              </p>
              <p className='office__info'>
                 Phone: +12345678985295
              </p>
              <p className='office__info'>
                 Email: example1@yahoo.com
              </p>
              <p className='office__info'>
                 OfficeTime 10am - 8pm
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='12'  >
            <div className="mb-4">
              <h5 className='footer__link-title'>Newsletter</h5>
              <p className='section__description'>Subscrive our Newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span> <i className='ri-send-plane-line'></i></span>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
