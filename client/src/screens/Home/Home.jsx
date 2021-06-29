import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password  } = formData;
	const { handleLogin } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};


  return (
    
      <form className='input-form'
			onSubmit={(e) => {
				e.preventDefault();
				handleLogin(formData);
			}}
		>
			<h3>Login</h3>
			<label>
				Username:
        <input
          className='input'
					type='text'
					name='username'
					value={username}
					onChange={handleChange}
				/>
			</label>
			
			<label>
				Password:
        <input
          className='input'
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
			</label>
			
      <Link to='/register'>not a member? Register</Link>
      
        
      <button className='btn'>Submit</button>
      <br></br>
      <input type="checkbox" />
        <label>Remember Me</label>
		</form>
    
  )
}
