import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./header.css";
import { motion } from "framer-motion";



const Header = () => {
 
  
  
  const nav_links = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "contact",
      display: "Contact",
    },
    {
      path: "Staff",
      display: "Staf",
    },

    {
      path: "specialties",
      display: "Specialties",
    },
    {
      path: "login",
      display: "Login",
    },
  
    
  ];

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");



  //////////////////(prueba) (start)/////////////////////////

  const [nombre, setNombre] = useState('');
  const [rolUsuario, setRolUsuario] = useState('');

  
  useEffect(() => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Hacer una solicitud a la API para obtener los detalles del usuario
    fetch('https://smarth-user-service.up.railway.app/usuarios/userLogin/actual', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con el nombre del usuario
        setNombre(data.username);
        setRolUsuario(data.rol)
      })
      .catch(error => {
        console.error('Error al obtener los detalles del usuario:', error);
      });
  }, []);




    //////////////////(prueba) (end)/////////////////////////
  


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              {/* <img alt='logo' src={Logo}/> */}
              <i className="ri-hospital-fill"></i>
              <div>
                <h1>SmartHealth360</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

           {/* inserta */}
          {
            rolUsuario === 'PATIENT' && (
              <MenuPaciente/>
            )
          }
          {
            rolUsuario === 'MEDIC' &&  (
              <MenuDoctor/>
            )
          }
          {
            rolUsuario === 'ADMIN' && (
              <MenuAdmin/>
            )
          }
            

            <div className="nav_icons">
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};



const MenuPaciente =()=>{

  const [nombre, setNombre] = useState('');
  const [rolUsuario, setRolUsuario] = useState('');

  
  useEffect(() => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Hacer una solicitud a la API para obtener los detalles del usuario
    fetch('https://smarth-user-service.up.railway.app/usuarios/userLogin/actual', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con el nombre del usuario
        setNombre(data.username);
        setRolUsuario(data.rol)
      })
      .catch(error => {
        console.error('Error al obtener los detalles del usuario:', error);
      });
  }, []);

 
  const [isMenu, setIsMenu] = useState(false);
  return(

    <div
    onMouseEnter={() => setIsMenu(true)}
    onMouseLeave={() => setIsMenu(false)}
    className="content_nav-main"
  >
    <div>
    <div> <p className="name_user" >{nombre}</p></div>

    {isMenu && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="content_nav-second"
      >


        <NavLink><p>Profile</p></NavLink>
        <NavLink><p>Setting</p></NavLink>
        <NavLink to="/login"><p>Sign Out</p></NavLink>
       
      </motion.div>
    )}
    </div>
  </div>
  )
}



const MenuDoctor =()=>{
  const [rolUsuario, setRolUsuario] = useState('');

  const [nombre, setNombre] = useState('');

  
  useEffect(() => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Hacer una solicitud a la API para obtener los detalles del usuario
    fetch('https://smarth-user-service.up.railway.app/usuarios/userLogin/actual', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con el nombre del usuario
        setNombre(data.username);
        setRolUsuario(data.rol)
      })
      .catch(error => {
        console.error('Error al obtener los detalles del usuario:', error);
      });
  }, []);

  const [isMenu, setIsMenu] = useState(false);
  return(
    <div
    onMouseEnter={() => setIsMenu(true)}
    onMouseLeave={() => setIsMenu(false)}
    className="content_nav-main"
  >
    <div>
    <div> <p className="name_user" >{nombre}</p></div>

    {isMenu && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="content_nav-second"
      >


        <NavLink><p>Profile</p></NavLink>
        <NavLink><p>Setting</p></NavLink>
        <NavLink to="/login"><p>Sign Out</p></NavLink>
       
        <NavLink><hr/>
          <p>Portal Doctor</p></NavLink>
       
      </motion.div>
    )}
    </div>
  </div>

  )
}


const MenuAdmin =()=>{
  const [rolUsuario, setRolUsuario] = useState('');

  const [nombre, setNombre] = useState('');

  
  useEffect(() => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Hacer una solicitud a la API para obtener los detalles del usuario
    fetch('https://smarth-user-service.up.railway.app/usuarios/userLogin/actual', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con el nombre del usuario
        setNombre(data.username);
        setRolUsuario(data.rol)
      })
      .catch(error => {
        console.error('Error al obtener los detalles del usuario:', error);
      });
  }, []);

  const [isMenu, setIsMenu] = useState(false);
  return(
    <div
    onMouseEnter={() => setIsMenu(true)}
    onMouseLeave={() => setIsMenu(false)}
    className="content_nav-main"
  >
    <div>
    <div> <p className="name_user" >{nombre}</p></div>

    {isMenu && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="content_nav-second"
      >


        <NavLink><p>Profile</p></NavLink>
        <NavLink><p>Setting</p></NavLink>
        <NavLink to="/login"><p>Sign Out</p></NavLink>
       
        <NavLink>
        <hr/><p>Dashboard</p></NavLink>
       
      </motion.div>
    )}
    </div>
  </div>

  )
}
export default Header;
