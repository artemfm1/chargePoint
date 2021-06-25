import React from 'react';


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
      {currentUser && authenticatedOptions}
    </div>
  );
};

export default Nav;