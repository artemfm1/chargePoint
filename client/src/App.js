import './App.css';
import Layout from './layouts/Layout';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom'
import Home from './screens/Home/Home'
import Register from './screens/Register/Register'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import { useState, useEffect } from 'react';
import MainContainer from './containers/MainContainer';
import CommentDetail from './screens/CommentDetail/CommentDetail'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
		const handleVerify = async () => {
      const userData = await verifyUser();
      if (userData) {
        setCurrentUser(userData);
      }
      else {
        history.push('/login')
      }
      
      
		};
		handleVerify();
	}, []);

  const handleLogin = async (formData) => {
		const userData = await loginUser(formData);
		setCurrentUser(userData);
		history.push('/posts');
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
      
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>

          <Route exact path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/login'>
            <Home handleLogin={handleLogin} />
          </Route>
          <Route path='/' >
          <MainContainer />
         
          </Route>
         

          
        </Switch>

      </Layout>

    </div>
  );
}

export default App;
