import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'
import './Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div className='layout'>
      <Nav />
      <header>
       
        {currentUser ? (
					<>
						<p className="user">  🔌  welcome, {currentUser.username}</p>
						<button className="logout-btn"onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link className='register'to='/login'>Login/Register</Link>
				)}

        
        </header>
      {children}
 <Footer /> 
    </div>
  )
}
