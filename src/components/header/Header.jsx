import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import "./header.css";
import { toast } from "react-toastify";

const Header = () => {
  const navLinks = [
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
  
  // const [isMenu, setIsMenu] = useState(false);

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
  }, []);

 
  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://smarth-user-service.azurewebsites.net/user-service/usuarios/userLogin/actual", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error("Error al obtener los detalles del usuario:", error);
      });
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <i className="ri-hospital-fill"></i>
              <div>
                <h1>SmartHealth360</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {navLinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    {user && item.path === "login" ? (
                      <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "nav_active" : "")}>
                        {user.username}
                      </NavLink>
                    ) : (
                      <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "nav_active" : "")}>
                        {item.display}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {user && (
              <>
                {user.rol === "PATIENT" && <MenuPaciente user={user} />}
                {user.rol === "MEDIC" && <MenuDoctor user={user} />}
                {user.rol === "ADMIN" && <MenuAdmin user={user} />}
              </>
            )}

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

const MenuPaciente = ({ user }) => {
  
 
  const [isMenu, setIsMenu] = useState(false);


  const handleLogout =()=>{
    localStorage.clear();
    toast.success('Logout Successfully');
  
}



  return (
    <div
      onMouseEnter={() => setIsMenu(true)}
      onMouseLeave={() => setIsMenu(false)}
      className="content_nav-main"
    >
      <div className="user_avatar">
        {/* <p className="name_user">{username}</p> */}
        <i className="ri-settings-5-fill name_user"></i>
      </div>
      {isMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="content_nav-second"
        >
          <NavLink>
            <p>Profile</p>
          </NavLink>
          <NavLink>
            <p>Settings</p>
          </NavLink>
          <NavLink to="/historial">
          
            <p>Medical History</p>
          </NavLink>

          <NavLink onClick={handleLogout}  to="/login">
            <p>Logout</p>
          </NavLink>

        </motion.div>
      )}
    </div>
  );
};

const MenuDoctor = ({ user }) => {
 
  
  const [isMenu, setIsMenu] = useState(false);

  const handleLogout =()=>{
    localStorage.clear();
    toast.success('Logout Successfully');
    
}





  return (
    <div
      onMouseEnter={() => setIsMenu(true)}
      onMouseLeave={() => setIsMenu(false)}
      className="content_nav-main"
    >
      <div className="user_avatar">
        {/* <p className="name_user">{username}</p> */}
        <i className="ri-settings-5-fill name_user"></i>
      </div>
      {isMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="content_nav-second"
        >
          <NavLink>
            <p>Profile</p>
          </NavLink>
          <NavLink>
            <p>Settings</p>
          </NavLink>
          <NavLink onClick={handleLogout}  to="/login">
            <p>Logout </p>
          </NavLink>
          <NavLink to="/PortalDoc">
            <hr />
            <p>Portal Doc</p>
          </NavLink>
        </motion.div>
      )}
    </div>
  );
};

const MenuAdmin = ({ user }) => {
  
  
  const [isMenu, setIsMenu] = useState(false);


  const handleLogout =()=>{
    localStorage.clear();
    toast.success('Logout Successfully');
  
}






  return (
    <div
      onMouseEnter={() => setIsMenu(true)}
      onMouseLeave={() => setIsMenu(false)}
      className="content_nav-main"
    >
      {/* <p className="name_user">{username}</p> */}
      <i className="ri-settings-5-fill name_user"></i>
      {isMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="content_nav-second"
        >
          <NavLink>
            <p>Profile</p>
          </NavLink>
          <NavLink>
            <p>Settings</p>
          </NavLink>
          <NavLink onClick={handleLogout} to="/login">
            <p>Logout </p>
          </NavLink>
          <NavLink to="/dashboard">
            <hr />
            <p>Dashboard</p>
          </NavLink>
        </motion.div>
      )}
    </div>
  );
};

export default Header;