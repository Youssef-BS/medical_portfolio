import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navbar.css'; 
import Logo from '../../assets/logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white custom-navbar-shadow sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" width={100} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/prodcats">
                Product Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/company">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/academy">
                Academy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex ms-3">
            <button className="btn btn-primary me-2" style={{ backgroundColor: '#001F3F', border: 'none' }}>
              Sign In
            </button>
            <button className="btn btn-primary" style={{ backgroundColor: '#001F3F', border: 'none' }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;