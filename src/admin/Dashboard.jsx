import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import '../style/dashboard.css'




const Dashboard = () => {
  

  return (

    <> 

    <section>
      <Container>
          <Row>
            <Col className='lg-3'>
              <div className='revenue_box'>
                <h5>overall visitors</h5>
                <span>890</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='order_box'>
                <h5>consultancy</h5>
                <span>90</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='products_box'>
                <h5>Pacients</h5>
                <span>12</span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='users_box'>
                <h5>Doctors</h5>
                <span>12</span>
              </div>
            </Col>
          </Row>
      </Container>
    </section>
    </>
  )
}

export default Dashboard