import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./css/Navbar.css"

const Navbar = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            E-Mart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
           
          
            </ul>
            <div className='buttons'>
              <Link to="/" className="btn btn-outline-dark ms-2" role="button">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </Link>

              <Link to="/cart" className="btn btn-outline-dark ms-2" role="button">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart ({state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
