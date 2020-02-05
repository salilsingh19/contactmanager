import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li className="nav item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus"></i>
              Add Contact
            </Link>
          </li>
          <li className="nav item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
