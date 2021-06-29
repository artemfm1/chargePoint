import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Nav.css'

const authenticatedOptions = (
  <>
    <NavLink className="login-out" to="/log-out">
      Log-out
    </NavLink>
  </>
);





const Nav = ({ user }) => {
  


  return (
    
    <div className="nav">
      
     
      
      <Link to='/posts'>
      <img src='https://www.chargepoint.com/themes/chargepoint/logo.svg' alt='logo' />
       </Link>
      
    </div>
  );
};

export default Nav;