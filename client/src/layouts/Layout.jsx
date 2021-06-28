import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div>
      <Nav />
      <header>
       
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
{/* <Footer /> */}
    </div>
  )
}
