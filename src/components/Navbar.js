import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper pink darken-4">
        <div className="container">
          <a href='#' className="brand-logo">Refresher</a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
