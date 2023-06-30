import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../style/admin-nav.css';
const DoctorNav = () => {


    const admin_nav=[
        {
            display:'Portal Medic',
            path:'/PortalDoc'
        },
        {
            display:'History Medic',
            path:'PortalDoc/HistorialMed'
        },
        {
            display:'Setting',
            path:'/PortalDoc/configuration'
        },
        {
            display:'Patients',
            path:'/PortalDoc/patients'
        },
        {
            display:'Documents',
            path:'/PortalDoc/documentation'
        }
    ]



  return (
    <>
    <header className='admin_header'>
         <div className='admin_nav-top'>
            <Container>
                <div className='admin_nav-wrapper-top'>
                    <div className='logo'>
                        <h2>SmartHealth360
</h2>
                    </div>

                    <div className='search_box'>
                        <input type='text' placeholder='Search...'/>
                        <span><i className='ri-search-line'></i></span>

                    </div>
                    <div className='admin_nav-top-right'>
                            
                            <span><i className='ri-settings-2-line'></i></span>
                            
                    </div>
                </div>
            </Container>
         </div>
    </header>
     <section className='admin_menu p-0'>
        <Container>
            <Row>
                <div className='admin_navigation'>
                    <ul className='admin_menu-list'>
                        {
                            admin_nav.map((item,index)=>(
                                <li className='admin_menu-item' key={index}>
                                    <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active_admin-menu':''}>{item.display} </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Row>
        </Container>
     </section>
    </>
  )
}

export default DoctorNav