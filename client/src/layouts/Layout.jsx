import React from 'react'
import {Link} from 'react-router-dom'

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div>
      <header>
        <h1>chargePoint</h1>
        {currentUser ? (
					<>
						<p>{currentUser.username}</p>
						<button onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link to='/login'>Login/Register</Link>
				)}

        
        </header>
      {children}
    </div>
  )
}
