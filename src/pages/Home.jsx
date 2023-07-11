import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../style/home.css'
import Doc from '../assets/doc.jpg'
import Services from '../services/services';

import icon from '../assets/Rectangle 78.png'


import Convenios from '../components/Convenios/Convenios';


const Home = () => {

  const year =new Date().getFullYear();

  
 
  return (
   
    <div>
    <section className='hero_section'>
        
            
              <div className='hero_content'>
                <p className='hero_subtitle'>The Best Clinic in <span className='year'>{year}</span> </p>
                <h2>Heaven Heals And The Doctor Collects The Fees</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in veniam impedit adipisci? Dolor eius excepturi unde deserunt officia iusto?</p>
                <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOW NOW</Link></motion.button>
              </div>
            

            
                <div className='hero_img'>
                  <img src={Doc} alt='hero'/>
                </div>
           
               
      </section>


      <Services/>

{/* 
      <section className='section-info'>
        <div className='content-info'>
          <img src={portada} alt=''/>
          <div className='info-text'>
            <h5 className='info-title'>El Mejor Staff Médico</h5>
            <p className='info-parrafo'>Médicos de primer nivel y los tecnólogos médicos  <br/>más especializados,  forman parte del staff de<br/> Clínica Internacional, han sido capacitados en<br/> las  más modernas aplicaciones que existen en el sector salud.</p>
          </div>
        </div>
      </section> */}
<section className="categories">
        <div className="container categories_container">
            <div className="categories_left">
                <h1>Specialties</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta, perspiciatis quidem velit eos unde tempora sunt labore quis in deserunt aspernatur nostrum debitis eum illo eius ullam cumque necessitatibus.</p>
                <motion.button whileTap={{scale:1.2}} className='buy_btn'>LEARN MORE</motion.button>
            </div>
            <div className="categories_right">
                <article className="category">
                    <span className="category_icon"><i className="ri-lungs-line"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, </p>
                </article>
                <article className="category">
                    <span className="category_icon"><i className="ri-surgical-mask-line"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, </p>
                </article>
                <article className="category">
                    <span className="category_icon"><i className="ri-stethoscope-line"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, </p>
                </article>
                <article className="category">
                    <span className="category_icon"><i className="ri-virus-line"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, </p>
                </article>
                <article className="category">
                    <span className="category_icon"><i className="ri-brain-line"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, </p>
                </article>
                <article className="category">
                    <span className="category_icon"><i className="ri-heart-pulse-line"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, </p>
                </article>
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
          <p>All our offices are accredited by the Joint Commission International, the highest international distinction awarded to a health entity.</p>
        </div>
      </section>


    
     </div>
  )
}

export default Home