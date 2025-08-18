import React, { useState } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
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
          <li><Link smooth to="/#home" scroll={scrollToElement}>Home</Link></li>
          <li><Link smooth to="/about" scroll={scrollToElement}>About</Link></li>
          <li><Link smooth to="/children-church" scroll={scrollToElement}>Children</Link></li>
          <li><Link smooth to="/Youth" scroll={scrollToElement}>Youth</Link></li>
          <li><Link smooth to="/adult" scroll={scrollToElement}>Adult</Link></li>
          <li><Link smooth to="/worship" scroll={scrollToElement}>Worship</Link></li>
        </ul>

        {/* Give Button */}
        <div className="give-btn">
          <Link smooth to="#give" scroll={scrollToElement}>Give Online</Link>
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
  <Link smooth to="/#home" scroll={scrollToElement} onClick={() => handleNavClick("/#home")}>Home</Link>
  <Link smooth to="/about" scroll={scrollToElement} onClick={() => handleNavClick("/about")}>About</Link>
  <Link smooth to="/children-church" scroll={scrollToElement} onClick={() => handleNavClick("/children-church")}>Children</Link>
  <Link smooth to="/Youth" scroll={scrollToElement} onClick={() => handleNavClick("/Youth")}>Youth</Link>
  <Link smooth to="/adult" scroll={scrollToElement} onClick={() => handleNavClick("/adult")}>Adult</Link>
  <Link smooth to="/worship" scroll={scrollToElement} onClick={() => handleNavClick("/worship")}>Worship</Link>
{/*   <Link className="mobile-give" smooth to="/#give" scroll={scrollToElement} onClick={() => handleNavClick("#give")}>Give Online</Link> */}
</div>
    </nav>
  );
};

export default Header;

