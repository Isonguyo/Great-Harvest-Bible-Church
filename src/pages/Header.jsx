import React, { useState } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="header-container">
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <img
            src="images/church-logo-removebg-preview (1).png"
            alt="Church Logo"
            className="logo-img"
          />
          <span className="logo-text">Great Harvest Bible Church</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><Link smooth to="/#home">Home</Link></li>
          <li><Link smooth to="/about">About</Link></li>
          <li><Link smooth to="/#sermons">Sermons</Link></li>
          <li><Link smooth to="/#ministries">Ministries</Link></li>
          <li><Link smooth to="/#events">Events</Link></li>
          <li><Link smooth to="/#contact">Contact</Link></li>
        </ul>

        {/* Give Button */}
        <div className="give-btn">
          <Link smooth to="/#give">Give Online</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link smooth to="/#home" onClick={closeMenu}>Home</Link>
        <Link smooth to="/about" onClick={closeMenu}>About</Link>
        <Link smooth to="/#sermons" onClick={closeMenu}>Sermons</Link>
        <Link smooth to="/#ministries" onClick={closeMenu}>Ministries</Link>
        <Link smooth to="/#events" onClick={closeMenu}>Events</Link>
        <Link smooth to="/#contact" onClick={closeMenu}>Contact</Link>
        <Link className="mobile-give" smooth to="/#give" onClick={closeMenu}>
          Give Online
        </Link>
      </div>
    </nav>
  );
};

export default Header;
