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
                <h5>Historial Medico</h5>
                <span><i class="ri-health-book-fill"></i></span>
              </div>
              </Link>
            </Col>
            <Col className='lg-3'>
            <div className='order_box'>
                <h5>Configuracion</h5>
                <span><i class="ri-settings-3-fill"></i></span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='products_box'>
                <h5>Pacients</h5>
                <span><i class="ri-user-heart-line"></i></span>
              </div>
            </Col>
            <Col className='lg-3'>
            <div className='users_box'>
                <h5>Documentos</h5>
                <span><i class="ri-article-fill"></i></span>
              </div>
            </Col>
          </Row>
      </Container>
    </section>
    </>
  )
}

export default DashboarDoc