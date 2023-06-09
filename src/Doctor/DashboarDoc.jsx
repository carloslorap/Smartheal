import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import '../style/dashboard.css'
import { Link } from 'react-router-dom';
import HistorialMed from './HistorialMed';

const DashboarDoc = () => {
  


  return (

    <> 

    <section>
      <Container>
          <Row>
            <Col className='lg-3'>
              <Link to='HistorialMed'>
              <div className='revenue_box'>
                <h5>Medical History</h5>
                <span><i className="ri-health-book-fill"></i></span>
              </div>
              </Link>
            </Col>
            <Col className='lg-3'>
            <div className='order_box'>
                <h5>Setting</h5>
                <span><i className="ri-settings-3-fill"></i></span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='products_box'>
                <h5>Patients</h5>
                <span><i className="ri-user-heart-line"></i></span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='users_box'>
                <h5>Documents</h5>
                <span><i className="ri-article-fill"></i></span>
              </div>
            </Col>
          </Row>
      </Container>
    </section>
    </>
  )
}

export default DashboarDoc