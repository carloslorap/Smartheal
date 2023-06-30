import React from 'react'
import Routers from '../../routes/Routers'
import Header from '../header/Header'
import Footer from '../footer/Footer.jsx'
import AdminNav from '../../admin/AdminNav';
import { useLocation } from 'react-router-dom';
import DoctorNav from '../../Doctor/DoctorNav';


const Layout = () => {

  const location = useLocation();

  return (
    <>

    {
      location.pathname.startsWith('/dashboard')? <AdminNav/> : (location.pathname.startsWith('/PortalDoc') ? <DoctorNav/> : <Header/>) 
    }
   
    
    <div>
        <Routers/>
    </div>
    <Footer/>
    </>

  )
}

export default Layout