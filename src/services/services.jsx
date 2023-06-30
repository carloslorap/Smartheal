import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import { motion } from 'framer-motion';
import serviceData from '../assets/data/serviceData'
import './services.css'
import { useNavigate } from "react-router-dom";

const services = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()

  
  function rediricionar() {
    navigate('/services');
  }

  return (
    <section className='services'>
    <Container>
      <Row>
            {
            serviceData.map((item, index) =>(
            <Col lg='3' md='4' key={index}>
                <motion.div onClick={rediricionar} whileHover={{scale:1.1} }className='service_item' style={{background:`${item.bg}`}}>
                    <span><i className={item.icon}></i></span>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                </motion.div>
            </Col>
                ))
            }
            </Row>
            </Container>
       
</section>
  )
}

export default services