import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const menuRef = useRef();
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setMenuOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.current) {
      setHideNavbar(false);
    } else if (currentScrollY > lastScrollY.current) {
      setHideNavbar(true);
    }

    lastScrollY.current = currentScrollY;
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu(); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${hideNavbar ? "hide-navbar" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu open"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu close"
          className="nav-mob-close"
        />
        <li onClick={() => handleScrollToSection("home")}>
          <p>Home</p>
        </li>
        <li onClick={() => handleScrollToSection("about")}>
          <p>About Me</p>
        </li>
        <li onClick={() => handleScrollToSection("project")}>
          <p>Project</p>
        </li>
        <li onClick={() => handleScrollToSection("contact")}>
          <p>Contact</p>
        </li>
      </ul>
      <div className="nav-connect">
        <p onClick={() => handleScrollToSection("contact")}>Let's talk</p>
      </div>
    </div>
  );
};

export default Navbar;
