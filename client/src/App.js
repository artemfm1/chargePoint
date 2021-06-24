import './App.css';
import Layout from './layouts/Layout';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom'
import Home from './screens/Home'
import Register from './screens/Register'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import { useState, useEffect } from 'react';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
		const handleVerify = async () => {
			const userData = await verifyUser();
			setCurrentUser(userData);
		};
		handleVerify();
	}, []);

  const handleLogin = async (formData) => {
		const userData = await loginUser(formData);
		setCurrentUser(userData);
		history.push('/');
  };
  
  const handleRegister = async (formData) => {
		const userData = await registerUser(formData);
		setCurrentUser(userData);
		history.push('/');
  };
  
  const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem('authToken');
		removeToken();
	};


  return (
    <div className="App">
      
      <Layout>
        <Switch>

          <Route exact path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          {!currentUser && <Redirect to = '/login' />}
          <Route path = '/login' >
            <Home handleLogin={handleLogin} />
          </Route>
          
        </Switch>

      </Layout>

    </div>
  );
}

export default App;
