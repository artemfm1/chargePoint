import {useState} from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
		username: '',
    email: '',
		password: '',
	});
	const { username, email, password } = formData;
	const { handleRegister } = props;

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
				handleRegister(formData);
			}}
		>
			<h3>Register</h3>
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
				Email:
        <input
          className='input'
					type='text'
					name='email'
					value={email}
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
			
			<button className='btn'>Submit</button>
		</form>
  )
}
