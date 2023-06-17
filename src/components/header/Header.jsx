import React ,{useRef,useEffect}from 'react';
import {  NavLink } from 'react-router-dom';
import { Container,Row } from 'reactstrap';
import  './header.css'
import Logo from '../../assets/logoclinica.png'

const Header = () => {
  const nav_links=[
    {
      path:'home',
      display:'home'
    },
    {
      path:'contact',
      display:'contact'
    },
    {
      path:'Staff',
      display:'staff'
    },
  
    {
      path:'specialties',
      display:'specialties'
    },
    {path:'login',
    display:'login'
    },
    {path:'historial',
    display:'medical history'
    },
  
  ]


  const headerRef =useRef(null);


  const menuRef =useRef(null);
 


  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header');
      }else{
        headerRef.current.classList.remove('sticky_header');
      }
    })
  };

 


  useEffect(()=>{
    stickyHeaderFunc()
    return ()=>window.removeEventListener('scroll',stickyHeaderFunc);
  });
  

  const menuToggle=()=>menuRef.current.classList.toggle('active_menu');


 




  return (
    <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav_wrapper'>
          <div className='logo'>
            {/* <img alt='logo' src={Logo}/> */}
            <i class="ri-hospital-fill"></i>
            <div>
              <h1>SmartHealth360</h1>
             
            </div>
          </div>
          

        <div className='navigation' ref={menuRef} onClick={menuToggle}>
          <ul className='menu'>
            {
              nav_links.map((item,index)=>(
                <li className='nav_item' key={index}>
                <NavLink to={item.path} className={(navClass)=>navClass.isActive?'nav_active':''}>{item.display}</NavLink>
            </li>
            
              ))
            }
            
          </ul>
          
        </div>

        <div className='nav_icons'>
     
            <div className='mobile_menu'>
             <span onClick={menuToggle}><i className='ri-menu-line'></i></span>
            </div>

            </div>

        

      
        </div>
      </Row>
    </Container>
</header>
  )
}

export default Header