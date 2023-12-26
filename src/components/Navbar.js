import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./css/Navbar.css"

const Navbar = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
<div>
  <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ff6433', padding: '1rem' }}>
    <div className="container">
      <Link className="navbar-brand fw-bold text-light" to="/">
        E-Mart
      </Link>
      <div className="input-group ms-2">
        <input type="text" className="form-control" placeholder="Search..." />
        <button className="btn btn-outline-light" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
      
      <div className="ms-auto"> {/* This class 'ms-auto' will push the buttons to the right */}
        <Link to="/cart" className="btn btn-outline-light ms-2" role="button">
          <i className="fa fa-shopping-cart me-1">Cart ({state.length})</i>
          
        </Link>
        
        {/* Assuming this is your login button */}
       
      </div>
    </div>
  </nav>
</div>





  );
};

export default Navbar;
