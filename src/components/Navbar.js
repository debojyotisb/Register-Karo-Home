import React from 'react';
import './Navbar.css';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaSearch } from 'react-icons/fa';
import navIcon from "../images/navIcon.png";

const Navbar = () => {
  return (
    <>
      {/* Top Blue Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <FaEnvelope className="icon" /> <span>www.registerkaro.in</span>
          <FaPhoneAlt className="icon" /> <span>+91 8447746183</span>
        </div>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaPinterestP className="icon" />
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="logo"> 
          <img src={navIcon} alt="Nav Icon" style={{ width: "250px", height: "40px" }} />
          {/* <span>Register<span className="highlight">Karo</span></span> */}
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#">Our Services ▼</a>
            <ul className="dropdown-menu">
              {/* <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#"> 3</a></li> */}
            </ul>
          </li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="nav-right">
          <FaSearch className="search-icon" />
          <button className="cta-button">Talk To Expert</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

