import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {

  const year=new Date().getFullYear();
  return (
    <footer className='footer'>
      
      <Container>
        <Row>
          <Col lg='4'className='mb-4'md='6' >
          <div className='logo'>
                
                <div>
                  <h1 className='text-white '>SmartHealth360</h1>
                  {/* <p>Since 1995</p> */}
                </div>

              </div>
              <p className='footer_text mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error id ducimus labore praesentium nisi, doloribus tempore dolorum consequatur est.
                </p>
          </Col>
          <Col lg='2'md='3'  className='mb-4' >
            <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Quick Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>About Us</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Services</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Booking</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Out Team</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Our Services</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Dental Care</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cardial Clinic</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Massage Therapy</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Cardiology</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
            </Col> 
          <Col lg='3' md='4' >

          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup className='mb-3 footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>ZindaBazar,Sylhet,Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-phone-line'></i></span>
                  <p>+51 960906687</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                  <p>SmartHealth360@gmail.com</p>
                </ListGroupItem>

                
              </ListGroup>
            </div>
          </Col>


          <Col lg='12'>
            <p className='footer_copyright'>Copyright {year} developed by Muhibur Rahman. All rights reserved.</p>
          </Col>
        </Row>
        
      </Container>
      
    </footer>
  )
}

export default Footer