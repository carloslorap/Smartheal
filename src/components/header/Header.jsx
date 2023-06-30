import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./header.css";
import { motion } from "framer-motion";


const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

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
      display: "Staff",
    },

    {
      path: "specialties",
      display: "Specialties",
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

            <div
              onMouseEnter={() => setIsMenu(true)}
              onMouseLeave={() => setIsMenu(false)}
              className="content_nav-main"
            >
              <div> <p className="name_user">name</p></div>

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

export default Header;
