import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../style/home.css'
import Doc from '../assets/doc.jpg'
import Services from '../services/services';

import icon from '../assets/Rectangle 78.png'
import Helmet from '../components/Helmet/Helmet';
import portada from '../assets/portada.jpg' 
import Convenios from '../components/Convenios/Convenios';

const Home = () => {

  const year =new Date().getFullYear();
  
  return (
    <Helmet title={'Home'}>
    <section className='hero_section'>
        
            
              <div className='hero_content'>
                <p className='hero_subtitle'>Trending product in <span className='year'>{year}</span> </p>
                <h2>Heaven heals and the doctor collects the fees</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in veniam impedit adipisci? Dolor eius excepturi unde deserunt officia iusto?</p>
                <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOW NOW</Link></motion.button>
              </div>
            

            
                <div className='hero_img'>
                  <img src={Doc} alt='hero'/>
                </div>
           
               
      </section>


      <Services/>


      <section className='section-info'>
        <div className='content-info'>
          <img src={portada} alt=''/>
          <div className='info-text'>
            <h5 className='info-title'>El Mejor Staff Médico</h5>
            <p className='info-parrafo'>Médicos de primer nivel y los tecnólogos médicos  <br/>más especializados,  forman parte del staff de<br/> Clínica Internacional, han sido capacitados en<br/> las  más modernas aplicaciones que existen en el sector salud.</p>
          </div>
        </div>
      </section>

      <Convenios/>
   

      <section className='section-certif'>
        <div className='content-certif'>
          <img src={icon} alt='' className='certif-img'/>
          <p className='certif-title'>Joint Commission<br/> International</p>
        </div>
        <div className='certif-text'>
          <p>Todos nuestras sedes están acreditadas por Joint Commission International, máxima distinción internacional otorgada a una entidad de salud.</p>
        </div>
      </section>


      </Helmet>
     
  )
}

export default Home