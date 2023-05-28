import React from 'react'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../style/home.css'
import Doc from '../assets/doc.jpg'
import Services from '../services/services';
import Helmet from '../components/Helmet/Helmet';

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


      </Helmet>
     
  )
}

export default Home