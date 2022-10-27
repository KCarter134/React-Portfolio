import React from "react";


function Navbar() {
  return (
    <header className="header">
      <div className="flex-container">
        <div className="name"><i>Kyle Carter</i></div>
        <nav className="navbar">
          <a href="/" className="title">
            About
          </a>
          <a href="#projects" className="title">
            Projects
          </a>
          <a href="#skills" className="title">
            Contact
          </a>
          <a href="#testimonials" className="title">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;