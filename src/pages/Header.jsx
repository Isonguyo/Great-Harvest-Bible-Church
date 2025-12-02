import React, { useState } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Custom scroll function for HashLink
  const scrollToElement = el => {
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handler for mobile navigation
  const handleNavClick = (to) => {
    const hash = to.includes('#') ? to.split('#')[1] : '';
    if (location.pathname === "/" && location.hash === `#${hash}`) {
      const el = document.getElementById(hash);
      if (el) scrollToElement(el);
    } else {
      navigate(to);
    }
    setTimeout(closeMenu, 150);
  };

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
          <li><HashLink smooth to="/#home" scroll={scrollToElement}>Home</HashLink></li>
          <li><HashLink smooth to="/about#about" scroll={scrollToElement}>About</HashLink></li>
          <li><HashLink smooth to="/children-church#children" scroll={scrollToElement}>Children</HashLink></li>
          <li><HashLink smooth to="/Youth#youth" scroll={scrollToElement}>Youth</HashLink></li>
          <li><HashLink smooth to="/adult#adult" scroll={scrollToElement}>Adult</HashLink></li>
          <li><HashLink smooth to="/worship#worship" scroll={scrollToElement}>Worship</HashLink></li>
        </ul>

        {/* Give Button */}
        <div className="give-btn">
          <HashLink smooth to="/mission#mission" scroll={scrollToElement}>Global Missions</HashLink>
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
  <HashLink smooth to="/#home" scroll={scrollToElement} onClick={() => handleNavClick("/#home")}>Home</HashLink>
  <HashLink smooth to="/about#about" scroll={scrollToElement} onClick={() => handleNavClick("/about")}>About</HashLink>
  <HashLink smooth to="/children-church#children" scroll={scrollToElement} onClick={() => handleNavClick("/children-church")}>Children</HashLink>
  <HashLink smooth to="/Youth#youth" scroll={scrollToElement} onClick={() => handleNavClick("/Youth")}>Youth</HashLink>
  <HashLink smooth to="/adult#adult" scroll={scrollToElement} onClick={() => handleNavClick("/adult")}>Adult</HashLink>
  <HashLink smooth to="/worship#worship" scroll={scrollToElement} onClick={() => handleNavClick("/worship")}>Worship</HashLink>
  <HashLink className="mobile-give" smooth to="/mission#mission" scroll={scrollToElement} onClick={() => handleNavClick("#give")}>Global Missions</HashLink>
</div>
    </nav>
  );
};

export default Header;

