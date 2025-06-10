import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Logo toggle outside sidebar */}
      <div
        className={`logo-toggle ${isOpen ? "open" : "closed"}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") setIsOpen(!isOpen);
        }}
        aria-label="Toggle sidebar"
      >
        <img
          src="https://enchanting-dusk-b08bd0.netlify.app/pics/logo.png"
          alt="MyApp Logo"
          className="sidebar-logo"
        />
      </div>

      <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          {/* You can keep company name here or remove logo since toggle has it */}
          <h3 className="company-name">NexAn Global Services</h3>
        </div>

        <ul className="sidebar-links">
<li><a href="#home">Home</a></li>
<li><a href="#about">Why us</a></li>
<li><a href="#services">Services</a></li>

          <li><a href="#contact">Contact</a></li>
        </ul>

<button className="click-me-button" onClick={() => setShowForm(true)}>
  👩🏻‍💻Chat with Bot
</button>
      </nav>
    </>
  );
};

export default Navbar;
