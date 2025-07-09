import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Optional if using React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">
        <a href="/">🎓 GECK Help Desk</a>
      </div>
      <nav>
        <ul id="navLinks" className={isMenuOpen ? 'active' : ''}>
          <li><a href="/departments">Departments</a></li>
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/developer">Developer</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="hamburger" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
