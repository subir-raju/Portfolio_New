import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const location = useLocation();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (id) => {
    if (location.pathname === "/") {
      handleScroll(id);
    } else {
      window.location.href = `/#${id.replace("#", "")}`;
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <img
        src={menu_open}
        onClick={openMenu}
        alt=" "
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=" "
          className="nav-mob-close"
        />
        <li>
          <p
            onClick={() => handleClick("#home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </p>
        </li>
        <li>
          <p
            onClick={() => handleClick("#about")}
            className={menu === "about" ? "active" : ""}
          >
            About Me
          </p>
        </li>
        <li>
          <p
            onClick={() => handleClick("#project")}
            className={menu === "project" ? "active" : ""}
          >
            Project
          </p>
        </li>
        <li>
          <p
            onClick={() => handleClick("#contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </p>
        </li>
      </ul>
      <div className="nav-connect">
        <p onClick={() => handleClick("#contact")}>Let's talk</p>
      </div>
    </div>
  );
};

export default Navbar;
