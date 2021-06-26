import React from 'react'
import { NavLink, Link } from 'react-router-dom';


const authenticatedOptions = (
  <>
    <NavLink className="login-out" to="/log-out">
      Log-out
    </NavLink>
  </>
);





const Nav = ({ user }) => {
  


  return (
    <div>
       <Link to ='/posts'>chargePoint</Link>
      {/* {currentUser && authenticatedOptions} */}
    </div>
  );
};

export default Nav;